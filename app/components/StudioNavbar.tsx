import React from "react";
import Link from "next/link";
import { NavbarProps } from "sanity";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const StudioNavbar = (props: NavbarProps) => {
  return (
    <>
      <div className="hidden md:flex items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back to website</span>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </>
  );
};

export default StudioNavbar;
