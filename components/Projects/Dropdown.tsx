import Link from 'next/link';
import { AiFillCaretDown } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';

import path from '@/utils/path';
import { CategoriesProps } from '@/types/types';

const dropdownStyles =
  'block px-4 py-2 text-sm md:text-lg hover:bg-slate-600 hover:text-slate-100 ease-in duration-100';

const Dropdown: React.FC<{ categories: CategoriesProps }> = ({
  categories,
}) => {
  const { asPath } = useRouter();
  const categoryPath = asPath.split('/')[3];

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className="h-10 w-44 md:w-56 inline-flex justify-between px-4 py-1 text-sm md:text-lg font-semibold text-slate-100 bg-slate-700/80 hover:bg-slate-700/100 rounded-md  drop-shadow-md ease-in duration-100">
              <div className="inline-block mr-1 my-auto capitalize">
                {categoryPath === undefined
                  ? 'All'
                  : categoryPath.replace('-', ' ')}
              </div>
              <AiFillCaretDown className="w-5 h-5 my-auto" />
            </Menu.Button>
            {open && (
              <Transition show={open}>
                <Menu.Items
                  static
                  className="origin-top-right absolute bg-slate-300/80 font-semibold rounded-md left-0 mt-2 w-44 md:w-56 py-2 text-slate-800 z-10 drop-shadow-lg"
                >
                  <Menu.Item>
                    <Link href={path.projects}>
                      <a className={dropdownStyles}>All</a>
                    </Link>
                  </Menu.Item>
                  {categories.map((category, index) => {
                    return (
                      <Menu.Item key={index}>
                        <Link
                          href={`/projects/category/${category.attributes.slug}`}
                        >
                          <a className={dropdownStyles}>
                            {category.attributes.name}
                          </a>
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              </Transition>
            )}
          </>
        )}
      </Menu>
    </>
  );
};

export default Dropdown;
