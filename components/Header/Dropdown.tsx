import Link from 'next/link';
import { CgSmartphoneChip, CgChevronDown } from 'react-icons/cg';
import { FiCode, FiMail, FiUser } from 'react-icons/fi';
import { Menu, Transition } from '@headlessui/react';

import path from '@/utils/path';
import { DropdownProps } from '@/types/types';

const Dropdown: React.FC<DropdownProps> = ({ route }) => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className="inline-flex justify-center -translate-x-3 md:translate-x-0 md:px-4 py-2 text-4xl font-bold text-slate-600 md:hover:text-slate-50 uppercase ease-in duration-100">
              <div className="hidden md:inline-block">
                {route === '/'
                  ? 'homepage'
                  : route === '/404'
                  ? null
                  : route.split('/')[1]}
              </div>
              <CgChevronDown className="md:mx-2 my-auto bg-slate-100 md:bg-transparent rounded-full md:h-10 md:w-10" />
            </Menu.Button>
            {open && (
              <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute bg-slate-50/90 font-semibold rounded-md -right-20 md:left-0 mt-2 w-48 md:w-64 py-5 text-slate-900"
                >
                  <Menu.Item>
                    <Link href={path.home}>
                      <a className="block px-4 py-2 text-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-300 hover:text-slate-50">
                        <div className="flex flex-row justify-start">
                          <CgSmartphoneChip
                            size={20}
                            className="mr-2 my-auto"
                          />
                          <span>Homepage</span>
                        </div>
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href={path.profile}>
                      <a className="block px-4 py-2 text-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-300 hover:text-slate-50">
                        <div className="flex flex-row justify-start">
                          <FiUser size={20} className="mr-2 my-auto" />
                          <span>Profile</span>
                        </div>
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href={path.projects}>
                      <a className="block px-4 py-2 text-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-300 hover:text-slate-50">
                        <div className="flex flex-row justify-start">
                          <FiCode size={20} className="mr-2 my-auto" />
                          <span>Projects</span>
                        </div>
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href={path.contacts}>
                      <a className="block px-4 py-2 text-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-300 hover:text-slate-50">
                        <div className="flex flex-row justify-start">
                          <FiMail size={20} className="mr-2 my-auto" />
                          <span>Contacts</span>
                        </div>
                      </a>
                    </Link>
                  </Menu.Item>
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
