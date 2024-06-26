import { Footer, NavBarShow } from '@/components';

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBarShow />
      <main>{children}</main>
      <Footer />
    </>
  );
}
