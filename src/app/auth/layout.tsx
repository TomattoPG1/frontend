import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';
import  {Footer} from '../../components/ui/footer/Footer';
export default async function ShopLayout( { children }: {
  children: React.ReactNode;
} ) {

  const session = await auth();

  if ( session?.user ) {
    redirect('/');
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header>
{/* {<Header></Header>} */}
      </header>
        {/* Aquí va tu header */}
      <main className="flex justify-center flex-grow">
        <div className="w-full w-full  px-10"> 
          { children }
        </div>
      </main>
      <footer>
        {<Footer />}
      </footer>
    </div>
  );
}