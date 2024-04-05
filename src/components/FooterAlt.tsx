export default function FooterAlt() {
  return (
    <>
      <footer className="font-sans bg-blue-100/80 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div>
              <p className="text-left font-semibold text-gray-800 dark:text-white">
                About Us
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Home
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Who We Are
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Our Philosophy
                </p>
              </div>
            </div>

            <div>
              <p className="text-left font-semibold text-gray-800 dark:text-white">
                Legal
              </p>

              <div className="mt-5 flex flex-col items-start space-y-2">
                <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Disclosures
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Privacy Policy
                </p>
                <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  Terms & Conditions
                </p>
                {/* <p className="text-gray-600 transition-colors duration-300 hover:cursor-pointer hover:text-blue-500 hover:underline dark:text-gray-300 dark:hover:text-blue-400">
                  <a href="https://storyset.com/people" className="font-normal">
                    People illustrations by Storyset
                  </a>
                </p> */}
              </div>
            </div>
          </div>

          <hr className="my-6 h-2 border-gray-400 md:my-8 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:flex sm:items-center sm:justify-center">
              {/* <div className="flex gap-4 hover:cursor-pointer">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
                <img
                  src="https://www.svgrepo.com/show/22037/path.svg"
                  width="30"
                  height="30"
                  alt="pn"
                />
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="in"
                />
              </div> */}
            </div>
            <p className="font-sans text-start md:p-4 md:text-center md:text-lg">
              {/* © 2024 The Home Care Company. All rights reserved. */}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
