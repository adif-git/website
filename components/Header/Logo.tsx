import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex md:translate-x-8 md:border-r-4 md:border-sky-400">
      <Image
        src="/White-TP.svg"
        alt="..."
        width={90}
        height={50}
        objectFit="scale-down"
        className="opacity-70 md:opacity-50 md:hover:opacity-100 ease-in duration-100"
      />
    </div>
  );
};

export default Logo;
