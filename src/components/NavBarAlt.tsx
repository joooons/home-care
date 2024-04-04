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
    <Disclosure as="nav" className="absolute z-10 w-full">
      {({ open }) => (
        <>
          <div className="absolute h-24 w-full bg-white/20"></div>

          <div className="container mx-auto px-6">
            <div className="relative z-10 flex h-24 items-center justify-between">
              <div className="focus-visible:ring-purp-50/0 relative inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-light hover:animate-pulse focus:outline-none focus-visible:ring ">
                <PhoneIcon
                  className="stroke-4 block h-8 w-8"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-1 items-center justify-center">
                {/* Brand Name */}

                <div className="font-italianno flex flex-row justify-center gap-2 bg-clip-text py-3 text-xl font-medium text-light sm:text-2xl lg:text-5xl">
                  <span className="hidden md:block">Home Care</span>
                  <SvgBird color={"#FFFFFF"}></SvgBird>
                  <span className="hidden md:block">Consultants</span>
                </div>

                {/* Desktop Menu Items */}
              </div>
              <div className="inset-y-0 left-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="focus-visible:ring-purp-50/0 relative inline-flex items-center justify-center rounded-md p-2 text-light hover:animate-pulse focus:outline-none focus-visible:ring">
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
            <div className="bg-dark pb-8">
              <ul className="flex flex-col justify-between gap-2 space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="li"
                    className={classNames(
                      "block cursor-pointer rounded-md px-3 py-4 text-2xl text-light  hover:animate-pulse hover:[text-shadow:_0px_0px_25px_rgb(255_255_255_/_70%)]"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleClick(item.scrollto)}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
