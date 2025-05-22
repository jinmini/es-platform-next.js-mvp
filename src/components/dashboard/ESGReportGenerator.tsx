'use client';

import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

const ESGReportGenerator = () => {
  const [reportType, setReportType] = useState('annual');
  const [framework, setFramework] = useState('gri');
  const [industry, setIndustry] = useState('tech');

  return (
    <div className="p-6 space-y-6 overflow-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">ESG 보고서 생성</h1>
        <button className="inline-flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50">
          <FileText className="h-4 w-4" />
          새 보고서
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white border-2 border-dashed border-blue-900/20 rounded-lg overflow-hidden">
            <div className="bg-blue-900/5 p-4 border-b">
              <h2 className="text-lg font-semibold">ESG 보고서 생성</h2>
              <p className="text-sm text-gray-500">
                아래에서 보고서 유형, 프레임워크 및 산업을 선택하여 AI 기반 보고서를 생성하세요.
              </p>
            </div>
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="report-type" className="text-sm font-medium">
                      보고서 유형
                    </label>
                    <select
                      id="report-type"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                    >
                      <option value="annual">연간 ESG 보고서</option>
                      <option value="quarterly">분기별 ESG 보고서</option>
                      <option value="compliance">규제 준수 보고서</option>
                      <option value="summary">ESG 성과 요약</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="framework" className="text-sm font-medium">
                      ESG 프레임워크
                    </label>
                    <select
                      id="framework"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      value={framework}
                      onChange={(e) => setFramework(e.target.value)}
                    >
                      <option value="gri">GRI Standards</option>
                      <option value="sasb">SASB</option>
                      <option value="tcfd">TCFD</option>
                      <option value="ungc">UN Global Compact</option>
                      <option value="k-esg">K-ESG 가이드라인</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">
                      산업 분류
                    </label>
                    <select
                      id="industry"
                      className="w-full border border-gray-300 rounded-md p-2 text-sm"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    >
                      <option value="tech">정보기술</option>
                      <option value="finance">금융</option>
                      <option value="healthcare">의료/바이오</option>
                      <option value="consumer">소비재</option>
                      <option value="energy">에너지/자원</option>
                      <option value="manufacturing">제조업</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button 
                    type="button" 
                    className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    보고서 생성하기
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-6">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">보고서 미리보기</h2>
              </div>
              <div className="p-6 min-h-[300px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-900/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-gray-500">
                      보고서 생성을 시작하려면 위 양식을 작성하고 '보고서 생성하기' 버튼을 클릭하세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">최근 생성된 보고서</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">2025 Q1 ESG 보고서</div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">TCFD 준수 보고서</div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium">탄소 배출 분석</div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESGReportGenerator; 