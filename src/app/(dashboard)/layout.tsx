import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESG GenAI Platform - 대시보드',
  description: 'ESG 보고서 생성 및 리스크 모니터링을 위한 AI 기반 대시보드',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 