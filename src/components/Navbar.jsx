"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-indigo-500 text-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold text-white  tracking-wide">
                GymSche
              </a>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link href="/" legacyBehavior>
                <a className=" hover:text-yellow-600 transition  px-3 py-2 rounded-md text-sm font-semibold">
                  {link.title}
                </a>
              </Link>
            ))}
            {/* <Link href="/" legacyBehavior>
              <a className=" hover:text-yellow-600 transition  px-3 py-2 rounded-md text-sm font-semibold">
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-yellow-600 transition 0 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="hover:text-yellow-600 transition  px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="hover:text-yellow-600 transition 0 px-3 py-2 rounded-md text-sm font-semibold">
                Login
              </a>
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-400">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link href="/" legacyBehavior>
              <a className="block text-white hover:bg-indigo-300  px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="block text-white hover:bg-indigo-300  px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
            </Link>
            <Link href="/services" legacyBehavior>
              <a className="block text-white hover:bg-indigo-300  px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="block text-white hover:bg-indigo-300 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
