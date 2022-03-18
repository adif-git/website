import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/projects/search?term=${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <div className="relative w-72">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          className="bg-slate-300/80 drop-shadow-sm w-72 h-10 px-5 pr-10 rounded-full text-md focus:outline-none focus:ring focus:border-slate-800"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={
            router.query.term !== undefined
              ? router.query.term.toString()
              : 'Search projects...'
          }
        />

        <AiOutlineSearch className="absolute right-0 inset-y-0 h-10 text-slate-800 mr-4" />
      </form>
    </div>
  );
};

export default Search;
