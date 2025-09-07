"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdContact } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // dropdown state
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu state

  return (
    <nav
      className="bg-indigo-950 dark:bg-gray-900 dark:border-gray-700"
      aria-label="القائمة الرئيسية"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="الصفحة الرئيسية HR SafePay"
        >
          <span className="text-2xl font-bold text-white"> HR SAFEPAY</span>
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          type="button"
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-controls="main-menu"
          aria-expanded={mobileOpen}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
          text-gray-300 rounded-lg md:hidden hover:bg-indigo-800 focus:outline-none  "
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          id="main-menu"
          className={`${mobileOpen ? "block" : "hidden"} transform transition-all duration-300 w-full md:block md:w-auto `}
        >
          <ul
            className="flex flex-col md:flex-row items-center md:gap-8 gap-3 mt-4 md:mt-0 text-white font-medium"
            dir="rtl"
          >
            <li>
              <Link
                href="/"
                className="hover:text-amber-400 transition-colors"
                aria-current="page"
              >
                الرئيسية
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-amber-400 transition-colors"
              >
                عن HR SafePay
              </Link>
            </li>
{/* Dropdown */}
<li className="relative">
  <button
    id="services-menu-button"
    onClick={() => setIsOpen(!isOpen)}
    aria-haspopup="true"
    aria-expanded={isOpen}
    aria-controls="services-menu"
    className="flex items-center gap-1 hover:text-amber-400 transition-colors"
  >
    خدمات الموارد البشرية
    <svg
      className={`w-3 h-3 transform transition-transform duration-300 ${
        isOpen ? "rotate-180" : "rotate-0"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  <ul
    id="services-menu"
    aria-labelledby="services-menu-button"
    className={`absolute right-0 mt-2 w-52 bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden z-20 transform transition-all duration-300 origin-top 
      ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
  >
    <li>
      <Link
        href="/service"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)} // يقفل بعد الضغط
      >
        خدمات HRSafepay
      </Link>
    </li>
    <li>
      <Link
        href="/peopleManagement"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)}
      >
        خدمات الموظفين
      </Link>
    </li>
    <li>
      <Link
        href="/changeManagement"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)}
      >
        إدارة التغيير
      </Link>
    </li>
    <li>
      <Link
        href="/riskManagement"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)}
      >
        خدمات المخاطر
      </Link>
    </li>
    <li>
      <Link
        href="/payroll"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)}
      >
        خدمات الرواتب
      </Link>
    </li>
    <li>
      <Link
        href="/recruitment"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)}
      >
        خدمات التوظيف
      </Link>
    </li>
    <li>
      <Link
        href="/leadershipHiring"
        className="block px-4 py-2 hover:bg-indigo-50"
        onClick={() => setIsOpen(false)}
      >
        توظيف القيادات
      </Link>
    </li>
  </ul>
</li>



            <li>
              <Link
                href="/contactus"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                تواصل معنا
                <IoMdContact className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
