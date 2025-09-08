"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { IoMdContact } from "react-icons/io";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-2000 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-indigo-950/95 backdrop-blur-md shadow-lg"
            : "bg-indigo-950"
        } dark:bg-gray-900 dark:border-gray-700`}
        aria-label="القائمة الرئيسية"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="الصفحة الرئيسية HR SafePay"
              onClick={closeMobileMenu}
            >
              <span className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                HR SAFEPAY
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8" dir="rtl">
                <Link
                  href="/"
                  className="text-white hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                >
                  الرئيسية
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/about"
                  className="text-white hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                >
                  عن HR SafePay
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Desktop Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={toggleDropdown}
                    className="text-white hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1 relative group"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    خدمات الموارد البشرية
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  <div
                    className={`absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 origin-top-right ${
                      isDropdownOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="py-2">
                      {[
                        { href: "/service", text: "خدمات HRSafepay" },
                        { href: "/peopleManagement", text: "خدمات الموظفين" },
                        { href: "/changeManagement", text: "إدارة التغيير" },
                        { href: "/riskManagement", text: "خدمات المخاطر" },
                        { href: "/payroll", text: "خدمات الرواتب" },
                        { href: "/staffing", text: "خدمات التوظيف" },
                        { href: "/leadershipHiring", text: "توظيف القيادات" },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                          onClick={closeDropdown}
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contactus"
                  className="text-white hover:text-amber-400 px-3 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-2 relative group"
                >
                  <IoMdContact className="text-lg" />
                  تواصل معنا
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-950 transition-all duration-300"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute top-1.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-4.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-2 pt-2 pb-6 space-y-1 bg-indigo-900/50 backdrop-blur-sm rounded-lg mt-2" dir="rtl">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-white hover:bg-indigo-800 hover:text-amber-400 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                الرئيسية
              </Link>

              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-white hover:bg-indigo-800 hover:text-amber-400 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                عن HR SafePay
              </Link>

              {/* Mobile Dropdown */}
              <div className="space-y-1">
                <button
                  onClick={toggleDropdown}
                  className="w-full text-right px-4 py-3 text-base font-medium text-white hover:bg-indigo-800 hover:text-amber-400 rounded-lg transition-all duration-200 flex items-center justify-between"
                >
                  <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  خدمات الموارد البشرية
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="bg-indigo-800/30 rounded-lg ml-4 mt-1">
                    {[
                      { href: "/service", text: "خدمات HRSafepay" },
                      { href: "/peopleManagement", text: "خدمات الموظفين" },
                      { href: "/changeManagement", text: "إدارة التغيير" },
                      { href: "/riskManagement", text: "خدمات المخاطر" },
                      { href: "/payroll", text: "خدمات الرواتب" },
                      { href: "/staffing", text: "خدمات التوظيف" },
                      { href: "/leadershipHiring", text: "توظيف القيادات" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-indigo-700 hover:text-amber-300 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contactus"
                className="flex items-center gap-2 px-4 py-3 text-base font-medium text-white hover:bg-indigo-800 hover:text-amber-400 rounded-lg transition-all duration-200"
                onClick={closeMobileMenu}
              >
                <IoMdContact className="text-xl" />
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}