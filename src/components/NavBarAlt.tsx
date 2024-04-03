import { Disclosure } from "@headlessui/react"
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline"

import SvgBird from "./SvgBird"

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

export default function NavBarAlt() {
  const handleClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Disclosure as="nav" className="absolute z-10 w-full bg-black/30">
      {({ open }) => (
        <>
          <div className="absolute h-24 w-full"></div>

          <div className="container mx-auto px-6">
            <div className="relative z-10 flex h-24 items-center justify-between">
              <div className="focus-visible:ring-purp-50/0 relative inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-light hover:bg-white/50 focus:outline-none focus-visible:ring">
                <PhoneIcon
                  className="block h-8 w-8 stroke-1"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 items-center justify-center">
                {/* Brand Name */}
                <div className="flex flex-shrink-0 items-center">
                  <div className="flex flex-row justify-center gap-2 bg-clip-text py-3 font-merriweather text-xl font-medium text-light sm:text-2xl lg:text-3xl">
                    <span>Home Care</span>
                    <SvgBird color={"#FFFFFF"}></SvgBird>
                    <span>Consultants</span>
                  </div>
                </div>

                {/* Desktop Menu Items */}
              </div>
              <div className="inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="focus-visible:ring-purp-50/0 relative inline-flex items-center justify-center rounded-md p-2 text-light hover:bg-white/50 focus:outline-none focus-visible:ring">
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
          <Disclosure.Panel>
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
