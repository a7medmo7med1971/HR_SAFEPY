"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // يخليها smooth
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-gray-900 text-white transition-all duration-300 hover:bg-indigo-800 z-50 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="الرجوع لأعلى الصفحة"
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
}
