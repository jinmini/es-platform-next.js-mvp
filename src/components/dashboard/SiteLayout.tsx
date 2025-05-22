'use client';

import React, { useState } from 'react';
import ESGSidebar from './ESGSidebar';
import AIChat from './AIChat';
import { cn } from '@/lib/utils';
import {
  PanelGroup,
  Panel,
  PanelResizeHandle
} from 'react-resizable-panels';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResizeHandle = ({ className }: { className?: string }) => (
  <PanelResizeHandle 
    className={cn(
      "w-1.5 bg-gray-100 relative flex items-center justify-center group",
      className
    )}
  >
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-16 flex flex-col items-center justify-center gap-1">
      <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-200"></div>
      <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-200"></div>
      <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors duration-200"></div>
    </div>
  </PanelResizeHandle>
);

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  // 초기 상태는 양쪽 사이드바 모두 열린 상태
  const [leftSidebarCollapsed, setLeftSidebarCollapsed] = useState(false);
  const [rightSidebarCollapsed, setRightSidebarCollapsed] = useState(false);

  // 왼쪽 사이드바 토글
  const toggleLeftSidebar = () => {
    setLeftSidebarCollapsed(!leftSidebarCollapsed);
  };

  // 오른쪽 사이드바 토글
  const toggleRightSidebar = () => {
    setRightSidebarCollapsed(!rightSidebarCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 relative">
      {/* 왼쪽 사이드바 토글 버튼 (사이드바가 접혔을 때만 표시) */}
      {leftSidebarCollapsed && (
        <button 
          onClick={toggleLeftSidebar}
          className="absolute left-0 top-4 z-20 bg-white shadow-md p-1.5 rounded-r-md border border-l-0 border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Open left sidebar"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
      
      <PanelGroup
        direction="horizontal"
        className="flex w-full h-full"
      >
        {/* 왼쪽 사이드바 */}
        {!leftSidebarCollapsed && (
          <>
            <Panel 
              defaultSize={20} 
              minSize={10}
              maxSize={30}
              className="relative"
            >
              <ESGSidebar 
                activeItem="" 
                setActiveItem={() => {}} 
                collapsed={false}
                setCollapsed={setLeftSidebarCollapsed}
              />
            </Panel>
            
            <ResizeHandle />
          </>
        )}
        
        {/* 메인 콘텐츠 */}
        <Panel 
          defaultSize={leftSidebarCollapsed && rightSidebarCollapsed ? 100 : 60} 
          className="relative"
        >
          <main className="p-6 h-screen overflow-auto">{children}</main>
        </Panel>
        
        {/* 오른쪽 사이드바 */}
        {!rightSidebarCollapsed && (
          <>
            <ResizeHandle />
            
            <Panel 
              defaultSize={20} 
              minSize={15}
              maxSize={40}
              className="relative"
            >
              <AIChat 
                isCollapsed={false}
                setIsCollapsed={setRightSidebarCollapsed}
              />
            </Panel>
          </>
        )}
      </PanelGroup>
      
      {/* 오른쪽 사이드바 토글 버튼 (사이드바가 접혔을 때만 표시) */}
      {rightSidebarCollapsed && (
        <button 
          onClick={toggleRightSidebar}
          className="absolute right-0 top-4 z-20 bg-white shadow-md p-1.5 rounded-l-md border border-r-0 border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Open right sidebar"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
    </div>
  );
} 