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
    </section>
  );
}
