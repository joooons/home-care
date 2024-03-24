import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

// import icon from '../assets/home-alt-svgrepo-com.svg';

const navigation = [
  { name: "Vision", current: false, scrollto: "vision" },
  { name: "What We Do", current: false, scrollto: "what" },
  { name: "Testimonials", current: false, scrollto: "testimony" },
  { name: "Contact", current: false, scrollto: "contact" },
]

function classNames<T extends string | { [key: string]: boolean }>(
  ...classes: T[]
): string {
  return classes.filter(Boolean).join(" ")
}

export default function NavBar() {
  const handleClick = (section: string) => {
    console.log("sup")
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Disclosure as="nav" className="absolute z-10 w-full ">
      {({ open }) => (
        <>
          {/* NavBar  */}
          <div className="absolute h-24 w-full bg-gradient-to-r from-gray-900 from-0% via-dark via-50% to-gray-900 to-100% "></div>
          <div className="mx-auto max-w-7xl px-2 lg:px-6">
            <div className="relative z-10 flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-light hover:bg-white/50 focus:outline-none focus-visible:ring focus-visible:ring-purple-50/0">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 stroke-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 stroke-2"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                {/* Brand Name */}
                <div className="flex flex-shrink-0 items-center">
                  {/* <img className='h-8 w-auto' src={icon} alt='Home Care'/> */}
                  <div className="bg-gradient-to-r from-sky-400 from-5% via-sky-200 via-50% to-sky-400 to-95% bg-clip-text px-4 py-3 font-bodoni text-3xl font-medium text-transparent">
                    Age Well Care Consultants
                  </div>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden lg:ml-6 lg:block lg:py-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        className={classNames(
                          "whitespace-nowrap rounded-md px-2 py-3 font-bodoni text-xl font-medium text-light hover:bg-white/30 hover:text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handleClick(item.scrollto)}
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
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 bg-gradient-to-r from-gray-900/90 from-0% via-dark/90 via-50% to-gray-900/90 to-100% px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    "block rounded-md px-3 py-4 font-bodoni text-lg font-medium text-light hover:bg-white/30 hover:text-light"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleClick(item.scrollto)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
