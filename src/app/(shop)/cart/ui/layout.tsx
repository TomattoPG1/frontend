import { Footer, NavBarShow, TopMenu } from '@/components';

export default function ProductsInCartLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <NavBarShow />
      <div className="px-0 sm:px-10">{children}</div>
      <Footer />
    </main>
  );
}
