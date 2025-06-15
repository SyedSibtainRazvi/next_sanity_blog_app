import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo_sibtain.png";

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

          <nav className="flex items-center space-x-6">
            <Link
              href="/motivation"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Motivation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
