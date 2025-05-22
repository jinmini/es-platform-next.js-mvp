'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RiskData {
  companyName: string;
  esgScore: number;
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  trend: 'up' | 'down' | 'stable';
}

const mockCompanies: RiskData[] = [
  {
    companyName: '삼성전자',
    esgScore: 75.3,
    environmentalScore: 68.5,
    socialScore: 79.1,
    governanceScore: 78.3,
    riskLevel: 'low',
    trend: 'up',
  },
  {
    companyName: '네이버클라우드',
    esgScore: 66.7,
    environmentalScore: 62.0,
    socialScore: 70.2,
    governanceScore: 67.8,
    riskLevel: 'medium',
    trend: 'stable',
  },
  {
    companyName: '카카오엔터프라이즈',
    esgScore: 72.1,
    environmentalScore: 70.5,
    socialScore: 74.3,
    governanceScore: 71.5,
    riskLevel: 'low',
    trend: 'up',
  },
  {
    companyName: 'SK하이닉스',
    esgScore: 69.8,
    environmentalScore: 65.2,
    socialScore: 71.4,
    governanceScore: 72.8,
    riskLevel: 'medium',
    trend: 'up',
  },
  {
    companyName: '현대자동차',
    esgScore: 71.2,
    environmentalScore: 67.8,
    socialScore: 72.5,
    governanceScore: 73.3,
    riskLevel: 'low',
    trend: 'stable',
  },
  {
    companyName: 'LG에너지솔루션',
    esgScore: 68.4,
    environmentalScore: 72.1,
    socialScore: 65.3,
    governanceScore: 67.8,
    riskLevel: 'medium',
    trend: 'down',
  },
  {
    companyName: '현대자동차',
    esgScore: 67.9,
    environmentalScore: 63.4,
    socialScore: 69.2,
    governanceScore: 71.1,
    riskLevel: 'medium',
    trend: 'up',
  },
];

const getRiskColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'low':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'high':
      return 'bg-red-100 text-red-800';
    default:
      return '';
  }
};

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up':
      return '↑';
    case 'down':
      return '↓';
    case 'stable':
      return '→';
    default:
      return '';
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up':
      return 'text-green-600';
    case 'down':
      return 'text-red-600';
    case 'stable':
      return 'text-gray-600';
    default:
      return '';
  }
};

const ESGRiskDashboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="p-6 space-y-6 overflow-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">ESG Risk Dashboard</h1>
        <span className="bg-blue-900 text-white px-3 py-1 text-sm rounded-md">최근 업데이트: 2025-05-22</span>
      </div>

      <div className="space-y-4">
        <div className="flex border-b border-gray-200">
          <button
            className={cn(
              'py-2 px-4 text-sm font-medium border-b-2 -mb-px',
              activeTab === 'all'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
            onClick={() => setActiveTab('all')}
          >
            모든 데이터
          </button>
          <button
            className={cn(
              'py-2 px-4 text-sm font-medium border-b-2 -mb-px',
              activeTab === 'environmental'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
            onClick={() => setActiveTab('environmental')}
          >
            환경 (E)
          </button>
          <button
            className={cn(
              'py-2 px-4 text-sm font-medium border-b-2 -mb-px',
              activeTab === 'social'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
            onClick={() => setActiveTab('social')}
          >
            사회 (S)
          </button>
          <button
            className={cn(
              'py-2 px-4 text-sm font-medium border-b-2 -mb-px',
              activeTab === 'governance'
                ? 'border-yellow-500 text-yellow-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            )}
            onClick={() => setActiveTab('governance')}
          >
            지배구조 (G)
          </button>
        </div>

        {activeTab === 'all' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 bg-blue-900/5 border-b">
              <h2 className="font-medium text-blue-900">ESG 리스크 분석표</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">기업명</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">ESG 종합점수</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">환경 점수</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">사회 점수</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">지배구조 점수</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">리스크 수준</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">추세</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockCompanies.map((company, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.companyName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{company.esgScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{company.environmentalScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{company.socialScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{company.governanceScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={cn('px-2 py-1 text-xs rounded-full', getRiskColor(company.riskLevel))}>
                          {company.riskLevel === 'low' && '낮음'}
                          {company.riskLevel === 'medium' && '중간'}
                          {company.riskLevel === 'high' && '높음'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={cn('font-bold', getTrendColor(company.trend))}>
                          {getTrendIcon(company.trend)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'environmental' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 bg-green-500/10 border-b">
              <h2 className="font-medium text-green-600">환경(E) 리스크 분석표</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">기업명</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">환경 점수</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">탄소 배출</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">자원 사용</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">재생 에너지</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">리스크 수준</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockCompanies.map((company, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{company.companyName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-gray-900">{company.environmentalScore}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{(Math.random() * 10 + 60).toFixed(1)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{(Math.random() * 20 + 50).toFixed(1)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">{(Math.random() * 30 + 40).toFixed(1)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={cn('px-2 py-1 text-xs rounded-full', getRiskColor(company.riskLevel))}>
                          {company.riskLevel === 'low' && '낮음'}
                          {company.riskLevel === 'medium' && '중간'}
                          {company.riskLevel === 'high' && '높음'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 bg-blue-500/10 border-b">
              <h2 className="font-medium text-blue-600">사회(S) 리스크 분석표</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-500">사회적 영향 관련 데이터가 곧 추가될 예정입니다.</p>
            </div>
          </div>
        )}

        {activeTab === 'governance' && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 bg-yellow-500/10 border-b">
              <h2 className="font-medium text-yellow-600">지배구조(G) 리스크 분석표</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-500">지배구조 관련 데이터가 곧 추가될 예정입니다.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ESGRiskDashboard; 