"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceCards({ cards }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12"
        data-aos="fade-up"
      >
        خدماتنا
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                       transition duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 200} // كل كارت يتأخر شوية
          >
            {/* صورة الكارت */}
            <div className="relative w-full h-52">
              <Image src={card.img} alt={card.title} fill className="object-cover" />
            </div>

            {/* محتوى الكارت */}
            <div className="p-6 space-y-4 text-center">
              <h3 className="text-xl font-semibold text-indigo-900">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
              <Link
                href={card.link}
                className="inline-block text-blue-600 hover:text-indigo-800 font-medium transition"
              >
                اقرأ المزيد →
              </Link>
            </div>
          </div>
        ))}
      </div>

              <div className="text-center mt-20" data-aos="fade-up">
          <div className="bg-blue-950 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج استشارة مجانية؟</h3>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                فريقنا من الخبراء جاهز لمساعدتك في اختيار الحل الأمثل لاحتياجاتك
              </p>
              <Link
                href="/contactus" 
                className="inline-flex items-center gap-3 bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                احجز استشارتك الآن
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}
