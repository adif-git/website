const Introduction: React.FC = () => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-4xl text-center text-slate-900 underline decoration-solid decoration-4 decoration-sky-500 underline-offset-8 mb-16">
        About Me
      </h1>
      <p className="font-semibold text-justify md:text-center leading-relaxed md:leading-loose text-lg text-slate-600">
        Hello! My name is{' '}
        <span className="font-bold underline decoration-solid decoration-2 decoration-sky-500 underline-offset-4 text-slate-900">
          Adif
        </span>{' '}
        from{' '}
        <span className="font-bold underline decoration-solid decoration-2 decoration-red-500 underline-offset-4 text-slate-900">
          Indonesia
        </span>
        . I am writing this to introduce myself and share a little about my
        website. I have a Bachelor of Engineering in Electrical from Institut
        Teknologi Sepuluh Nopember with primary focus in Electronics. I built
        interest in web development and embedded systems. In my free time, I
        build personal projects as a hobby. With this website, I will share my
        past projects and also as a journal for myself.
      </p>
    </div>
  );
};

export default Introduction;