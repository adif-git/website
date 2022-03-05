import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex translate-x-5 md:translate-x-8 md:border-r-4 md:border-sky-400">
      <Image
        src="/Logo.png"
        alt="..."
        width={100}
        height={50}
        objectFit="scale-down"
        className="opacity-100 md:opacity-50 md:hover:opacity-100 md:hover:scale-125 ease-in duration-100"
      />
    </div>
  );
};

export default Logo;
