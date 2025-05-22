'use client';

import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="p-6 space-y-6 overflow-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-navy">환경 설정</h1>
        <button className="bg-navy hover:bg-navy-light text-white px-4 py-2 rounded-md">저장</button>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('general')}
            className={`whitespace-nowrap py-2 border-b-2 font-medium text-sm ${
              activeTab === 'general'
                ? 'border-navy text-navy'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            일반
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`whitespace-nowrap py-2 border-b-2 font-medium text-sm ${
              activeTab === 'notifications'
                ? 'border-navy text-navy'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            알림
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`whitespace-nowrap py-2 border-b-2 font-medium text-sm ${
              activeTab === 'api'
                ? 'border-navy text-navy'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            API 연동
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`whitespace-nowrap py-2 border-b-2 font-medium text-sm ${
              activeTab === 'data'
                ? 'border-navy text-navy'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            데이터 관리
          </button>
        </nav>
      </div>
        
      {activeTab === 'general' && (
        <div className="mt-4 space-y-4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">프로필 설정</h2>
              <p className="mt-1 text-sm text-gray-500">
                계정 및 프로필 정보를 관리합니다.
              </p>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">회사명</label>
                  <input
                    id="company-name"
                    type="text"
                    defaultValue="ESG Innovations Co."
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="industry-type" className="block text-sm font-medium text-gray-700">산업 분류</label>
                  <select
                    id="industry-type"
                    defaultValue="tech"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="tech">정보기술</option>
                    <option value="finance">금융</option>
                    <option value="healthcare">의료/바이오</option>
                    <option value="consumer">소비재</option>
                    <option value="manufacturing">제조업</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">이메일</label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="admin@esginnovations.co.kr"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700">언어 설정</label>
                  <select
                    id="language"
                    defaultValue="ko"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="ko">한국어</option>
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">보고서 기본 설정</h2>
              <p className="mt-1 text-sm text-gray-500">
                보고서 생성시 사용될 기본 설정을 관리합니다.
              </p>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="default-framework" className="block text-sm font-medium text-gray-700">기본 프레임워크</label>
                  <select
                    id="default-framework"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="gri">GRI Standards</option>
                    <option value="sasb">SASB</option>
                    <option value="tcfd">TCFD</option>
                    <option value="ungc">UN Global Compact</option>
                    <option value="k-esg">K-ESG 가이드라인</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="report-format" className="block text-sm font-medium text-gray-700">보고서 포맷</label>
                  <select
                    id="report-format"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="pdf">PDF</option>
                    <option value="docx">Word (DOCX)</option>
                    <option value="web">웹 문서</option>
                    <option value="ppt">프레젠테이션</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="auto-save" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="auto-save" className="text-sm font-medium text-gray-700">보고서 자동 저장 사용</label>
              </div>
            </div>
          </div>
        </div>
      )}
        
      {activeTab === 'notifications' && (
        <div className="mt-4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">알림 설정</h2>
              <p className="mt-1 text-sm text-gray-500">
                알림 수신 방법과 빈도를 관리합니다.
              </p>
            </div>
            <div className="px-6 py-4 space-y-6">
              <div className="space-y-4">
                <h3 className="text-base font-medium text-gray-900">ESG 보고서 알림</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">보고서 생성 완료</p>
                    <p className="text-sm text-gray-500">ESG 보고서 생성이 완료되면 알림 수신</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" id="report-notification" className="sr-only peer" />
                    <label htmlFor="report-notification" className="block h-6 w-12 rounded-full bg-gray-200 peer-checked:bg-blue-600 cursor-pointer transition-colors ease-in-out duration-200"></label>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">데이터 업데이트</p>
                    <p className="text-sm text-gray-500">ESG 데이터가 업데이트되면 알림 수신</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" id="data-notification" className="sr-only peer" />
                    <label htmlFor="data-notification" className="block h-6 w-12 rounded-full bg-gray-200 peer-checked:bg-blue-600 cursor-pointer transition-colors ease-in-out duration-200"></label>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">이메일 알림</p>
                    <p className="text-sm text-gray-500">모든 알림을 이메일로도 수신</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" id="email-notification" className="sr-only peer" />
                    <label htmlFor="email-notification" className="block h-6 w-12 rounded-full bg-gray-200 peer-checked:bg-blue-600 cursor-pointer transition-colors ease-in-out duration-200"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        
      {activeTab === 'api' && (
        <div className="mt-4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">API 연동 설정</h2>
              <p className="mt-1 text-sm text-gray-500">
                외부 서비스와의 API 연동을 관리합니다.
              </p>
            </div>
            <div className="px-6 py-4 space-y-4">
              <p>이 섹션은 곧 추가될 예정입니다.</p>
            </div>
          </div>
        </div>
      )}
        
      {activeTab === 'data' && (
        <div className="mt-4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">데이터 관리</h2>
              <p className="mt-1 text-sm text-gray-500">
                ESG 데이터 관리 및 백업 설정을 구성합니다.
              </p>
            </div>
            <div className="px-6 py-4 space-y-4">
              <p>이 섹션은 곧 추가될 예정입니다.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings; 