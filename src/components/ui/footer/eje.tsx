import { titleFont } from "@/config/fonts";
import Link from "next/link";
import Image from 'next/image';


export const Footer = () => {
  return (
    <div className="flex w-full flex-col text-xs bg-customBlue text-white" >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-center items-center mb-5 md:mb-0" >
        <Link href="/">
        <Image
            src="/imgs/logo.png"
            alt="Tomatto"
            className=" sm:p-0"
            width={ 150 }
            height={ 150 }
          />

          {/* <span className={`${titleFont.className} antialiased font-bold `}>
            Tomatto{" "}
          </span>
          <span>| shop </span> */}
          {/* <span>© {new Date().getFullYear()}</span> */}
        </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center mb-5 md:mb-0" >
          <div>
            <Link href="/" className="mx-3 underline">
              Quienes Somos?
            </Link>
          </div>
          <div>
            <Link href="/" className="mx-3 underline">
              Empresa
            </Link>
          </div>
          <div>
            <Link href="/" className="mx-3 underline">
              El taller
            </Link>
          </div>
          <div>
            <Link href="/" className="mx-3 underline">
              Contactenos
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start" >
          <div className="mb-3">
            <div className="mt-3">
              <span>Seguinos en:</span>
            </div>
          </div>

          <div className="flex justify-around items-center w-full md:w-auto" >
            <div>  <Image
              src="/imgs/instagram.png"
              alt="Tomatto"
              className="p-5 sm:p-0"
              width={ 20 }
              height={ 20 }
            /></div>
            <div>  <Image
              src="/imgs/whatsapp.png"
              alt="Tomatto"
              className="p-5 sm:p-0"
              width={ 20 }
              height={ 20 }
            /></div>
            <div>  <Image
              src="/imgs/facebook.png"
              alt="Tomatto"
              className="p-5 sm:p-0"
              width={ 20 }
              height={ 20 }
            /></div>
            <div>  <Image
              src="/imgs/tik-tok.png"
              alt="Tomatto"
              className="p-5 sm:p-0"
              width={ 20 }
              height={ 20 }
            /></div>
            <div>  <Image
              src="/imgs/youtube.png"
              alt="Tomatto"
              className="p-5 sm:p-0"
              width={ 20 }
              height={ 20 }
            /></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 " >
        <div>
          <span>©Todos los derechos reservados - Tomatto</span>
        </div>
      </div>

    </div>
  );
};
