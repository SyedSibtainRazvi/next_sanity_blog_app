import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_sibtain.png";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-300 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                width={180}
                height={180}
                className="dark:filter-none filter brightness-0 dark:brightness-100"
              />
            </div>
          </Link>
          <div className="flex items-center space-x-8">
            <a
              href="https://syedsibtain.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-200 transition-colors inline-flex items-center gap-1"
              aria-label="Visit my portfolio (opens in a new tab)"
            >
              Portfolio
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
