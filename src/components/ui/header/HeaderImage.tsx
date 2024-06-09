import Image from 'next/image';

const HeaderImage: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex px-5 justify-center items-center w-full ">
        <Image
          src="/imgs/fakeslider.png"
          alt="Tomatto"
          className=" sm:p-0"
          width={1000} // Asegúrate de proporcionar un ancho
          height={500} // y una altura
        />
      </div>
    </div>
  );
};

export default HeaderImage;