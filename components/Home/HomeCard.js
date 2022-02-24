export default function HomeCard({ content }) {
  return (
    <div className="flex flex-row md:flex-col justify-center align-center text-slate-400 md:hover:text-blue-900 my-5 md:m-2 p-2 md:p-10 border-4 border-slate-400 rounded-2xl md:hover:scale-110 md:hover:bg-slate-50 ease-in duration-200">
      <div className="mr-5 md:mx-auto md:mb-10">{content.image}</div>
      <div className="my-auto text-2xl md:text-4xl font-bold md:text-center uppercase">
        {content.title}
      </div>
    </div>
  );
}
