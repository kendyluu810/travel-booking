import { Dialog, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Fragment, useState } from "react";
import { menuItems } from "./Navbar";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
        aria-label="Open menu"
      >
        <Menu />
      </button>
      {/* --- Mobile Menu --- */}
      <Transition appear show={isMobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          {/* Panel */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full max-w-xs transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end items-center">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="mt-6">
                    <nav className="flex flex-col space-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          className="text-gray-700 hover:bg-gray-100 p-2 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
