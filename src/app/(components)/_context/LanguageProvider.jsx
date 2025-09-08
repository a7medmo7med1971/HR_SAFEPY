"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  // الترجمات
  const translations = {
    ar: {
      dir: "rtl",
      home: "الرئيسية",
      about: "عن HR SafePay",
      services: "خدمات الموارد البشرية",
      contact: "تواصل معنا",
      langBtn: "English",
      welcome: "مرحبًا بكم في شركة HR SafePay",
    },
    en: {
      dir: "ltr",
      home: "Home",
      about: "About HR SafePay",
      services: "HR Services",
      contact: "Contact Us",
      langBtn: "العربية",
      welcome: "Welcome to HR SafePay",
    },
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      <div dir={translations[language].dir}>{children}</div>
    </LanguageContext.Provider>
  );
}

// hook مخصص عشان نستخدمه في أي مكان
export const useLanguage = () => useContext(LanguageContext);
