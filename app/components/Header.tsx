import { useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <div className="logo">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
            >
              Home
            </Link>
          </div>
          <div className="links ml-auto">
            <Link
              href="/about"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              About
            </Link>
            <Link
              href="/about/team"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              About Team
            </Link>
            <Link
              href="/code/repos"
              className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            >
              Code
            </Link>
          </div>
        </div>
      </nav>
    </header>
    // <header className="bg-gray-800 py-4">
    //   <div className="container mx-auto flex justify-center">
    // <div className="logo">
    //   <Link href="/">Logo</Link>
    // </div>
    // <div className="links ml-auto">
    //   <Link href="/about">About</Link>
    //   <Link href="/about/team">About Team </Link>
    //   <Link href="/code/repos">Code</Link>
    // </div>
    //   </div>
    // </header>
  );
};

export default Header;
