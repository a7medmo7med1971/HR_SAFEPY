import React from "react";
import SliderHeader from "./(components)/_slider/Slider";
import { FaBriefcase, FaUsers, FaChartBar, FaLock } from "react-icons/fa";
import HeroSection from "./(components)/_homeCart/HeroSection";


export const metadata = {
  title: "شركة HR SafePay | حلول الموارد البشرية والرواتب",
  description:
    "شركة HR SafePay تقدم حلول مبتكرة لإدارة الموارد البشرية والرواتب، مع أنظمة أمان عالية ودقة في الحسابات. تواصل معنا الآن!",
  keywords: [
    "HR",
    "موارد بشرية",
    "إدارة الرواتب",
    "حلول التوظيف",
    "HR SafePay",
    "شركات الموارد البشرية",
  ],
  authors: [{ name: "HR SafePay" }],
  openGraph: {
    title: "شركة HR SafePay | حلول الموارد البشرية والرواتب",
    description:
      "HR SafePay تقدم حلول متكاملة لإدارة الموارد البشرية مع أمان وحماية عالية.",
    url: "https://your-domain.com",
    siteName: "HR SafePay",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // غيّرها لصورة شعارك
        width: 1200,
        height: 630,
        alt: "شركة HR SafePay",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function Home() {
  return (
    <>
      <SliderHeader />

      <HeroSection></HeroSection>
      {/* //////////////////////////////// */}

      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        {/* المميزات */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition">
            <FaBriefcase className="text-4xl text-indigo-800 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              إدارة الرواتب
            </h3>
            <p className="text-gray-600 text-sm">دعم الحسابات بدقة ووضوح</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaUsers className="text-4xl text-indigo-800 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              إدارة الموارد البشرية
            </h3>
            <p className="text-gray-600 text-sm">حلول رقمية تدعم فريقك</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaChartBar className="text-4xl text-indigo-800 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              التقارير والإحصائيات
            </h3>
            <p className="text-gray-600 text-sm">
              تقارير دقيقة تساعدك على اتخاذ القرارات
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <FaLock className="text-4xl text-indigo-800 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              أمان وحماية
            </h3>
            <p className="text-gray-600 text-sm">
              نظام مؤمن لحماية بيانات شركتك
            </p>
          </div>
        </div>

        {/* الإحصائيات */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
              99.9%
            </h3>
            <p className="text-gray-600">موثوقية النظام</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
              +50,000
            </h3>
            <p className="text-gray-600">برنامج يتم تشغيله بنجاح</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-900">
              +500
            </h3>
            <p className="text-gray-600">مؤسسة تدعم HR SafePay</p>
          </div>
        </div>
      </section>
    </>
  );
}
