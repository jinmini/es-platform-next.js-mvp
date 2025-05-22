'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronLeft, BarChart2, FileText, History, Settings, Home, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  collapsed?: boolean;
  href: string;
}

const NavItem = ({ icon: Icon, label, active = false, collapsed = false, href }: NavItemProps) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          'w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200',
          collapsed ? 'justify-center' : '',
          active 
            ? 'bg-gray-100 text-blue-800' 
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        )}
      >
        <Icon className={cn("h-5 w-5", active ? "text-blue-800" : "text-gray-700")} />
        {!collapsed && <span>{label}</span>}
      </div>
    </Link>
  );
};

interface ESGSidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

const ESGSidebar = ({ 
  activeItem, 
  setActiveItem, 
  collapsed: externalCollapsed, 
  setCollapsed: externalSetCollapsed 
}: ESGSidebarProps) => {
  // 내부 상태와 외부 상태 중 하나를 사용
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  
  // 외부에서 제공된 상태가 있으면 그것을 사용, 아니면 내부 상태 사용
  const collapsed = externalCollapsed !== undefined ? externalCollapsed : internalCollapsed;
  const setCollapsed = externalSetCollapsed || setInternalCollapsed;

  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: '홈 대시보드', icon: Home, href: '/dashboard' },
    { id: 'esg-report', label: 'ESG 보고서 생성', icon: FileText, href: '/dashboard/esg-report' },
    { id: 'risk-monitoring', label: '리스크 모니터링', icon: BarChart2, href: '/dashboard/risk-monitoring' },
    { id: 'report-history', label: '보고서 히스토리', icon: History, href: '/dashboard/report-history' },
    { id: 'settings', label: '환경 설정', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <div
      className={cn(
        'bg-white border-r border-gray-200 h-full flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-full'
      )}
    >
      <div className="flex items-center h-14 px-4 border-b border-gray-200">
        {!collapsed && (
          <span className="text-lg font-semibold text-blue-900 truncate">ESG GenAI</span>
        )}
        <button
          className={cn('ml-auto rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors', 
            collapsed && 'mx-auto')}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex flex-col h-full">
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          <div className="mb-6">
            <div className={cn("mb-2 px-3", collapsed ? "hidden" : "block")}>
              <span className="text-xs font-medium text-gray-500 uppercase">메인 메뉴</span>
            </div>
            
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (pathname === '/dashboard' && item.id === 'home') || 
                (pathname?.startsWith(item.href) && item.href !== '/dashboard');
              
              return (
                <NavItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  active={isActive}
                  collapsed={collapsed}
                  href={item.href}
                />
              );
            })}
          </div>
        </nav>
        
        <div className="mt-auto border-t border-gray-200 p-2">
          <Link href="/">
            <div
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors',
                collapsed ? 'justify-center' : ''
              )}
            >
              <LogOut className="h-5 w-5 text-gray-700" />
              {!collapsed && <span>홈페이지로 돌아가기</span>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ESGSidebar; 