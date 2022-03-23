import Link from 'next/link';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import { PaginationProps } from '@/types/types';
import { getPageArray } from '@/utils/pagination';

const Pagination: React.FC<{
  pagination: PaginationProps;
  baseLink: string;
  term?: string;
}> = ({ pagination: { page, pageCount, pageSize }, baseLink, term }) => {
  const pageArray = getPageArray({ page, pageCount, pageSize });

  const prevUrl =
    baseLink + '?' + `page=${page - 1}` + (term ? `&term=${term}` : '');

  return (
    <div className="grid grid-cols-5 mt-10 pb-5 border-t-2 border-slate-400/70 pt-2">
      {page > 1 && (
        <Link href={baseLink + `page=${page - 1}`}>
          <a className="flex flex-row col-start-1 font-semibold text-slate-700 items-center">
            <MdNavigateBefore className="h-7 w-7" />
            <span className="my-auto">Previous</span>
          </a>
        </Link>
      )}
      <div className="col-start-2 col-span-3">
        <div className="flex flex-row justify-center font-semibold">
          {pageArray.map((num, index) => {
            return (
              <Link key={index} href={baseLink + `?page=${num}`}>
                <a
                  className={
                    'px-3 py-1' +
                    `${
                      num === page ? ' bg-sky-500 rounded-full text-white' : ''
                    }`
                  }
                >
                  {num}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      {page < pageCount && (
        <Link href={baseLink + `?page=${page + 1}`}>
          <a className="flex flex-row col-start-5 font-semibold text-slate-700 items-center justify-self-end">
            <span className="my-auto">Next</span>
            <MdNavigateNext className="h-7 w-7" />
          </a>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
