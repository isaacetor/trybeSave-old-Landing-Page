import React from 'react';
// import DashboardSidebar from '../dashboard/DashboardSidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <DashboardSidebar /> */}
      <p>sidebar</p>
      <main className="grow p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
