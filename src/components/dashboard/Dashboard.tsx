'use client';

import React from 'react';
import { Line } from 'recharts';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const mockTrends = [
  { month: '1월', environmental: 62, social: 55, governance: 67 },
  { month: '2월', environmental: 64, social: 56, governance: 68 },
  { month: '3월', environmental: 67, social: 60, governance: 69 },
  { month: '4월', environmental: 69, social: 63, governance: 71 },
  { month: '5월', environmental: 72, social: 65, governance: 72 },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 overflow-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">ESG 대시보드 요약</h1>
        <span className="bg-blue-900 text-white px-3 py-1 text-sm rounded-md">최근 업데이트: 2025-05-22</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg border-l-4 border-l-green-500 overflow-hidden">
          <div className="p-4 border-b">
            <div className="text-lg flex justify-between">
              <span>환경(E) 점수</span>
              <span className="text-green-500">72.3</span>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "72.3%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">전월 대비 +2.1% 상승</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg border-l-4 border-l-blue-500 overflow-hidden">
          <div className="p-4 border-b">
            <div className="text-lg flex justify-between">
              <span>사회(S) 점수</span>
              <span className="text-blue-500">65.8</span>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65.8%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">전월 대비 +1.7% 상승</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg border-l-4 border-l-yellow-500 overflow-hidden">
          <div className="p-4 border-b">
            <div className="text-lg flex justify-between">
              <span>지배구조(G) 점수</span>
              <span className="text-yellow-500">71.5</span>
            </div>
          </div>
          <div className="p-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "71.5%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">전월 대비 +0.5% 상승</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <div className="text-lg font-semibold">ESG 성과 트렌드 (2025년)</div>
        </div>
        <div className="p-4">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTrends} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="environmental" 
                  stroke="#34A853" 
                  name="환경(E)" 
                  strokeWidth={2} 
                />
                <Line 
                  type="monotone" 
                  dataKey="social" 
                  stroke="#4285F4" 
                  name="사회(S)" 
                  strokeWidth={2} 
                />
                <Line 
                  type="monotone" 
                  dataKey="governance" 
                  stroke="#F4B400" 
                  name="지배구조(G)" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="text-lg font-semibold">주요 ESG 이슈</div>
          </div>
          <div className="p-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs mt-1">높음</span>
                <span>CSRD 규제 준수를 위한 보고 체계 강화 필요</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs mt-1">중간</span>
                <span>공급망 ESG 평가 개선 권장</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs mt-1">중간</span>
                <span>탄소배출 데이터 검증 프로세스 강화</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mt-1">낮음</span>
                <span>이사회 다양성 지표 개선 중</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="text-lg font-semibold">예정된 보고서</div>
          </div>
          <div className="p-4">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <span>2025 Q2 ESG 성과 요약</span>
                <span className="border px-2 py-1 rounded-md text-xs">2025-07-15</span>
              </li>
              <li className="flex items-center justify-between">
                <span>탄소 배출 중간 보고서</span>
                <span className="border px-2 py-1 rounded-md text-xs">2025-06-30</span>
              </li>
              <li className="flex items-center justify-between">
                <span>TCFD 기후 리스크 보고서</span>
                <span className="border px-2 py-1 rounded-md text-xs">2025-08-10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 