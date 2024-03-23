import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// import icon from '../assets/home-alt-svgrepo-com.svg';

const navigation = [
  { name: 'Mission', href: '#', current: false },
  { name: 'What We Do', href: '#', current: false },
  { name: 'Testimonials', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames<T extends string | { [key: string]: boolean }>(
  ...classes: T[]
): string {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as='nav' className='w-full absolute '>
      {({ open }) => (
        <>

          {/* NavBar  */}
          <div className='bg-gradient-to-r from-gray-900 from-5% via-dark via-50% to-gray-900 to-95% mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-20 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>

                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-light hover:bg-white/50 focus:outline-none focus-visible:ring focus-visible:ring-purple-50/0'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block stroke-2 h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block stroke-2 h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>

                {/* Brand Name */}
                <div className='flex flex-shrink-0 items-center'>
                  {/* <img className='h-8 w-auto' src={icon} alt='Home Care'/> */}
                  <div className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 from-5% via-yellow-300 via-50% to-yellow-600 to-95% px-4 py-3 text-lg font-medium font-bodoni'>
                    HOME CARE CONCIERGE
                  </div>
                </div>

                {/* Desktop Menu Items */}
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'text-light hover:bg-white/30 hover:text-white rounded-md px-2 py-3 font-medium font-bodoni whitespace-nowrap'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 bg-dark/90 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    'text-light hover:bg-white/30 hover:text-light block rounded-md px-3 py-4 text-xl font-medium font-bodoni'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
