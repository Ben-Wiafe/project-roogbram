import { Fragment } from "react";
import { Disclosure,} from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Log from "../../assets/logo.png";


export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
              <div className="flex-shrink-0 flex items-center" id="home">
                <img
                    className="hidden lg:block h-12 w-25"
                    src={Log}
                    alt="Workflow"
                  />
                  
                  <img
                    className="block lg:hidden h-8 w-21 h-10"
                    src={Log}
                    alt="Workflow"
                  />
               
                </div>
                <div className="pl-72 sm:px-80 mr-2 flex items-center md:hidden">
                  
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
               
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#home"
                    className=" text-gray-500 inline-flex items-center px-1 pt-1  text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="mailto:paakow46@yahoo.com"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    AEC
                  </a>
                  <a
                    href="#footer"
                    
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About Us
                  </a>
                  <a
                    href="#Contact"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a 
                  href="#downloads"
                    
                    className="relative inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2  hidden lg:block md:block sm:hidden"
                  >
                    Download
                    </a>
                </div>
                <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  </button>
                  {/* Profile dropdown
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu> */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="http://localhost:3000/#"
                className=" block pl-3 ml-2 pr-4 py-2 text-gray-500 text-base font-medium sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="mailto:paakow46@yahoo.com"
                className="border-transparent text-gray-500 hover:bg-yellow-100
hover:border-gray-300 hover:text-yellow-700 block pl-3 pr-4 py-2 border-l-4 text-base
font-medium sm:pl-5 sm:pr-6"
              >
                AEC
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#Contact"
                className="border-transparent text-gray-500 hover:bg-yellow-100
hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base
font-medium sm:pl-5 sm:pr-6"
              >
                Contact Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#footer"
                className="border-transparent text-gray-500 hover:bg-yellow-100
hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base
font-medium sm:pl-5 sm:pr-6"
              >
                About Us
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 sm:px-6">
                <div className="flex-shrink-0">
                  <span className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-300 shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Downloads
                  </span>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="https://www.apple.com/services/"
                  target="_blank"
                  className="block px-4 py-2 text-base font-medium text-gray-500
hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
              
                  App Store
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  target="_blank"
                  href="https://play.google.com/store/search?q=ulearner"
                  className="block px-4 py-2 text-base font-medium text-gray-500
                  hover:text-gray-800 hover:bg-gray-100 sm:px-6"
                >
                  Google Play Store
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
