// components/layouts/HomeLayout.tsx
import React from 'react';
import { Footer, Sidebar, TopMenu } from '@/components';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="px-0 sm:px-10">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
