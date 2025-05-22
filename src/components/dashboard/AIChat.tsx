'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Send, BotIcon } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  isCollapsed?: boolean;
  setIsCollapsed?: (collapsed: boolean) => void;
}

const AIChat = ({ isCollapsed: externalCollapsed, setIsCollapsed: externalSetIsCollapsed }: AIChatProps = {}) => {
  // 내부 상태 관리
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  
  // 외부에서 제공된 상태가 있으면 그것을 사용, 아니면 내부 상태 사용
  const isCollapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const setIsCollapsed = externalSetIsCollapsed || setInternalCollapsed;
  
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '안녕하세요! ESG GenAI 어시스턴트입니다. ESG 보고서 생성, 리스크 분석 또는 ESG 관련 질문이 있으시면 도와드리겠습니다.',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setMessage('');

    // Simulate AI response after a short delay
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        '보고서': 'ESG 보고서 생성을 도와드리겠습니다. 원하시는 프레임워크(GRI, SASB, TCFD 등)와 보고서 유형(연간, 분기, 요약 등)을 알려주세요.',
        '리스크': '리스크 분석을 위해 특정 산업 또는 기업을 알려주시면 관련 ESG 리스크에 대한 정보를 제공해 드리겠습니다.',
        '환경': '환경(E) 지표에는 탄소 배출, 에너지 사용, 폐기물 관리, 물 사용량, 생물다양성 영향 등이 포함됩니다. 특정 지표에 대해 자세히 알고 싶으신가요?',
        '사회': '사회(S) 지표에는 직원 다양성, 인권, 근로조건, 지역사회 영향, 고객 안전 등이 포함됩니다. 어떤 부분이 궁금하신가요?',
        '지배구조': '지배구조(G) 지표에는 이사회 구성, 경영 투명성, 윤리 규정, 부패방지, 내부통제 등이 포함됩니다. 더 자세한 정보가 필요하신가요?',
      };

      let botResponse = '죄송합니다, 요청을 이해하지 못했습니다. ESG 보고서 생성 또는 리스크 분석에 관한 질문을 해주세요.';

      // Check if the user message contains any of the keywords
      for (const [keyword, response] of Object.entries(botResponses)) {
        if (message.toLowerCase().includes(keyword.toLowerCase())) {
          botResponse = response;
          break;
        }
      }

      const newBotMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      className={cn(
        'border-l border-gray-200 h-full flex flex-col transition-all duration-300',
        isCollapsed ? 'w-14' : 'w-full'
      )}
    >
      <div className="h-full flex flex-col bg-white shadow-sm">
        <div className="h-14 px-4 border-b border-gray-200 flex items-center justify-between">
          <div className={cn('text-base font-semibold text-blue-900 truncate', isCollapsed && 'hidden')}>
            AI 어시스턴트
          </div>
          <button
            className="h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </div>
        {!isCollapsed && (
          <>
            <div className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex max-w-[80%] rounded-lg px-3 py-2 text-sm',
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white ml-auto'
                      : 'bg-gray-100 text-gray-800 mr-auto'
                  )}
                >
                  {msg.type === 'bot' && (
                    <BotIcon className="mr-2 h-4 w-4 shrink-0 translate-y-1" />
                  )}
                  <div>
                    <p>{msg.content}</p>
                    <span className="text-xs opacity-50 block mt-1">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-gray-200">
              <div className="flex w-full items-center gap-2">
                <textarea
                  placeholder="ESG 관련 질문을 입력하세요..."
                  className="min-h-[40px] resize-none w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="h-9 w-9 bg-blue-600 hover:bg-blue-700 rounded-md flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIChat; 