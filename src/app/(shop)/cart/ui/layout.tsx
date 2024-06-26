import { Footer, NavBarShow, TopMenu } from '@/components';

export default function ProductsInCartLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <main className="min-h-screen">
      <header>
      <NavBarShow />
      </header>
      <div className="px-0 sm:px-10">{children}</div>
      <footer>
      <Footer />
      </footer>
    </main>
  );
}
