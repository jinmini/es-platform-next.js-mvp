import React from 'react';
import ESGRiskDashboard from '@/components/dashboard/ESGRiskDashboard';
import SiteLayout from '@/components/dashboard/SiteLayout';

export default function RiskMonitoringPage() {
  return (
    <SiteLayout>
      <ESGRiskDashboard />
    </SiteLayout>
  );
} 