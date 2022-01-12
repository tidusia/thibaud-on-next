import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ROUTES from "../../data/routes";

const menuOpenClassName = "absolute top-0 inset-x-0 md:hidden z-40";
const menuCloseClassName = "hidden";

const Nav = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow shrink-0 lg:grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href={ROUTES.home.href}>
                <a className="text-2xl tracking-tight leading-10 font-extrabold">
                  Thibaud Duthoit
                </a>
              </Link>
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setOpen(true)}
                  aria-label="Ouvrir le menu de navigation mobile"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block pl-6">
            {[ROUTES.blog, ROUTES.contact].map((route) => (
              <Link key={route.href} href={route.href}>
                <a
                  className={`mx-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${
                    router.pathname === route.href
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {route.text}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className={open ? menuOpenClassName : menuCloseClassName}>
        <div className="shadow-md">
          <div className="p-2 bg-gray-900 shadow-xs overflow-hidden">
            <div className="pl-2 pr-4 pt-4 flex items-center justify-between">
              <Link href={ROUTES.home.href}>
                <a className="text-2xl tracking-tight leading-10 font-extrabold text-white">
                  Thibaud Duthoit
                </a>
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu de navigation mobile"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {[ROUTES.blog, ROUTES.contact].map((route) => (
                <Link href={route.href} key={route.href}>
                  <a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    {route.text}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
