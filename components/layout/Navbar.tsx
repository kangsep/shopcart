"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import CategoryDropdown from "./CategoryDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [openCategory, setOpenCategory] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* logo */}
        <Link href="/" className="text-2xl font-bold text-green-700">
          Shopcart
        </Link>

        {/* desktop menu */}
        <nav className="hidden md:flex items-center gap-8 relative"> 
          <div className="relative">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="group flex items-center gap-2 pb-1"
              aria-expanded={openCategory}
            >
              <span className="relative inline-block">
                <span className="inline-block transition-colors duration-200">
                  Category
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
              </span>
              {openCategory ? ( 
                <FaChevronUp size={12} className={openCategory ? "text-blue-500 transition-colors duration-200" : "transition-colors duration-200"} />
              ) : (
                <FaChevronDown size={12} className="transition-colors duration-200 group-hover:text-blue-500" />
              )}
            </button>

            {openCategory && <CategoryDropdown />}
          </div>

          <Link className="hover:text-gray-500" href="#">
            Deals
          </Link>
          <Link className="hover:text-gray-500" href="#">
            What's New
          </Link>
          <Link className="hover:text-gray-500" href="#">
            Delivery
          </Link>
        </nav>

        {/* search and account */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center border rounded-full px-4 py-2 w-[250px] hover:border-blue-300 transition-colors duration-200 focus-within:border-blue-500">
            <input
              className="outline-none w-full text-sm" 
              placeholder="Search Product"  
            />
            <FaSearch />
          </div>

          <Link href="#" className="flex items-center gap-2">
            <FaUser />
            Account
          </Link>

          <Link href="#" className="flex items-center gap-2">
            <FaShoppingCart />
            Cart
          </Link>
        </div>

        {/* mobile menu (need fix, later) */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <FaBars />
        </button>
      </div>

      {mobileMenu && (
        <MobileMenu openCategory={openCategory} />
      )}
    </div>
  );
}