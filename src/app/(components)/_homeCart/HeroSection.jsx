"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "@/assets/hr/Home/hrsafepay.png" // غيره لو عندك صورة تانية

export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center justify-center py-12 px-4 md:px-20 max-w-6xl mx-auto">
      {/* النص */}
      <div className="space-y-6 md:text-right" data-aos="fade-right">
        <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-900 leading-snug">
          مرحبًا بكم في <br />
          <span className="text-blue-600">شركة HRSafePay</span>
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          نحن في HRSafePay نقدم حلولاً مبتكرة لإدارة الموارد البشرية، بدءًا من
          إدارة الرواتب بشكل آمن ودقيق، مرورًا بخدمات التوظيف واختيار
          الكفاءات، وصولًا إلى الاستشارات المتخصصة التي تساعد الشركات على
          تحسين الأداء وتحقيق أهدافها.
        </p>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          نؤمن أن نجاح أي مؤسسة يبدأ من الاهتمام بفريق العمل، لذلك نوفر أنظمة
          وخدمات متكاملة تدعم التطوير والنمو المستدام. دعنا نكون شريكك
          الاستراتيجي في بناء بيئة عمل احترافية وفعّالة.
        </p>
        <div className="flex justify-center md:justify-start" data-aos="zoom-in" data-aos-delay="600">
          <Link
            href={"/contactus"}
            aria-label="تواصل معنا عبر شركة HR SafePay"
            className="mt-6 px-6 md:px-8 py-2 md:py-3 flex items-center gap-2 bg-blue-600 hover:bg-indigo-800 text-white rounded-lg shadow-lg transition duration-300"
          >
            <FaArrowRight className="text-sm" aria-hidden="true" />
            تواصل معنا
          </Link>
        </div>
      </div>

      {/* الصورة */}
      <div
        className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mx-auto"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <Image
          src={image}
          alt="شركة HR SafePay - حلول الموارد البشرية والرواتب"
          fill
          priority
          className="object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
