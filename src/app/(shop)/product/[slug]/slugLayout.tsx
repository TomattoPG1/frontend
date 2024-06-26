// Slug.tsx
import { Footer, NavBarShow } from '@/components';
import { ReactNode } from 'react';


interface SlugProps {
  children: ReactNode;
}

const SlugLayout = ({ children }: SlugProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarShow />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default SlugLayout;
