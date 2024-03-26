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
          <div className="absolute h-24 w-full bg-purple-500"></div>
          <div className="mx-auto  px-2 lg:px-6">
            <div className="relative z-10 flex h-24 items-center justify-between">
              <div className="flex flex-1 items-center justify-start lg:items-stretch lg:justify-between">
                {/* Brand Name */}
                <div className="flex flex-shrink-0 items-center">
                  {/* <img className='h-8 w-auto' src={icon} alt='Home Care'/> */}
                  <div className="bg-clip-text px-4 py-3 font-merriweather text-2xl font-medium text-transparent text-white lg:text-3xl">
                    Age Well Care Consultants
                  </div>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden lg:ml-10 lg:block lg:py-4">
                  <ul className="flex space-x-4">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        className={classNames(
                          "cursor-pointer whitespace-nowrap rounded-md px-2 py-3 font-alegreya text-xl font-medium text-light hover:bg-white/30 hover:text-white"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handleClick(item.scrollto)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-light hover:bg-white/50 focus:outline-none focus-visible:ring focus-visible:ring-purple-50/0">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-8 w-8 stroke-2"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-8 w-8 stroke-2"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Items */}
          <Disclosure.Panel className="lg:hidden">
            <ul className="flex flex-col justify-between gap-2 space-y-1 bg-black/90 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="li"
                  className={classNames(
                    "block cursor-pointer rounded-md px-3 py-4 text-2xl text-light hover:bg-white/30 hover:text-light"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleClick(item.scrollto)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
