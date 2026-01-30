import React from 'react';
import Header from '../home/components/header';
import Footer from '../home/components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
