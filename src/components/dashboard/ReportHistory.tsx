'use client';

import React from 'react';
import { Eye, Download, ExternalLink } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  createdAt: Date;
  framework: string;
  status: 'draft' | 'final' | 'archived';
}

// 모의 데이터
const mockReports: Report[] = [
  {
    id: "1",
    title: "2023 지속가능경영보고서",
    createdAt: new Date(2023, 11, 15),
    framework: "GRI Standards",
    status: "final"
  },
  {
    id: "2",
    title: "2023 ESG 성과 보고서",
    createdAt: new Date(2023, 10, 5),
    framework: "SASB",
    status: "draft"
  },
  {
    id: "3",
    title: "2022 기후변화 대응 보고서",
    createdAt: new Date(2022, 7, 22),
    framework: "TCFD",
    status: "archived"
  },
  {
    id: "4",
    title: "2022 지속가능경영보고서",
    createdAt: new Date(2022, 6, 10),
    framework: "GRI Standards",
    status: "final"
  }
];

// 상태에 따른 배지 스타일 반환
const getStatusBadge = (status: 'draft' | 'final' | 'archived') => {
  switch (status) {
    case 'draft':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">초안</span>;
    case 'final':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">최종</span>;
    case 'archived':
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">보관됨</span>;
    default:
      return null;
  }
};

const ReportHistory = () => {
  return (
    <div className="p-6 space-y-6 overflow-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navy">보고서 히스토리</h1>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="bg-navy/5 py-4 px-6">
          <h2 className="font-semibold text-lg">생성된 ESG 보고서</h2>
        </div>
        <div className="p-0">
          <div className="min-w-full divide-y divide-gray-200">
            <div className="bg-gray-50">
              <div className="grid grid-cols-5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div>보고서 제목</div>
                <div>생성일</div>
                <div>프레임워크</div>
                <div>상태</div>
                <div className="text-right">작업</div>
              </div>
            </div>
            <div className="bg-white divide-y divide-gray-200">
              {mockReports.map((report) => (
                <div key={report.id} className="grid grid-cols-5 px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">{report.title}</div>
                  <div className="text-gray-500">
                    {report.createdAt.toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="text-gray-500">{report.framework}</div>
                  <div>{getStatusBadge(report.status)}</div>
                  <div className="text-right space-x-2">
                    <button className="inline-flex items-center p-1.5 border border-transparent rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" title="보기">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center p-1.5 border border-transparent rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" title="다운로드">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center p-1.5 border border-transparent rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" title="공유">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHistory; 