import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon, CogIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from '@remix-run/react';

const navigation = [

  { name: 'Repair', href: '/service' },
  { name: 'iPhone', href: '/products' },
  { name: 'Mac', href: '/about' },
  { name: 'iWatch', href: '/contact' },
  { name: 'AirPods', href: '/contact' },
  { name: 'VissionPro', href: '/contact' },
  { name: 'iTV', href: '/' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold">
                <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pl-9 sm:pl-4">
                  Apple Doctor
                </p>
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href 
                        ? 'text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent' 
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-xl font-medium'
                    )}
                  >
                    <span className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent`}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <Menu as="div" className="relative">
              <div>
                <MenuButton className="inline-flex justify-center rounded-full p-2 hover:bg-purple-700 focus:outline-none">
                  <div className=" rounded-full p-1">
                    <BellIcon className="h-5 w-5 text-purple-500" aria-hidden="true" />
                  </div>
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <UserCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <CogIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/signout" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Sign Out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                location.pathname === item.href 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {item.name}
              </span>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
