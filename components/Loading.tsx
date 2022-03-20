import Image from 'next/image';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-slate-900 w-screen h-screen">
      <div className="animate-bounce opacity-50">
        <Image
          src="/Logo.png"
          alt="..."
          width={250}
          height={200}
          objectFit="scale-down"
          className=""
        />
      </div>
    </div>
  );
};

export default Loading;
