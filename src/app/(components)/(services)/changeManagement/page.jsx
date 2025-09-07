import React from 'react'
import Image from 'next/image'
import header from "@/assets/hr/Service/inner-4.jpg";
import img3 from "@/assets/hr/Service/s-3.jpg"; // صورة لإدارة التغيير

export const metadata = {
  title: "إدارة التغيير | HRSafePay",
  description:
    "HRSafePay تدعم شركتك في إدارة التغيير بفعالية، من خلال استراتيجيات واضحة تضمن تقبل الموظفين ونجاح التحولات المؤسسية.",
  openGraph: {
    title: "إدارة التغيير مع HRSafePay",
    description:
      "حلول متكاملة لمواكبة التغيرات المؤسسية: التحول الرقمي، إعادة الهيكلة، وتطوير بيئة العمل.",
    url: "https://hrsafepay.com/changeManagement",
    images: [
      {
        url: "/assets/hr/Service/s-3.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات إدارة التغيير - HRSafePay",
      },
    ],
    locale: "ar_EG",
    type: "article",
  },
};

export default function ChangeManagement() {
  return (
    <>
      {/* الهيدر */}
      <header className="relative w-full h-[20vh] md:h-[30vh] m-0 p-0">
        {/* صورة الكوفر */}
        <Image
          src={header}
          alt="Cover"
          fill
          priority
          className="object-cover object-center" // هنا خليتها cover مش contain
        />
        {/* Overlay شفاف */}
        <div className="absolute inset-0 bg-black/40" />

        {/* المحتوى فوق الصورة */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
           إدارة التغيير مع HRSafePay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
             نساعد شركتك على التكيف مع التغيرات وبناء مستقبل أكثر استقرارًا.
          </p>
        </div>
      </header>

      {/* المحتوى */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900">
            لماذا إدارة التغيير مع HRSafePay؟
          </h2>
          <p className="text-gray-600 leading-relaxed">
            التغيير أصبح ضرورة في بيئة الأعمال الحديثة، سواء كان التحول الرقمي،
            إعادة هيكلة المؤسسة، أو تطوير بيئة العمل. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            في HRSafePay نضع استراتيجيات متكاملة لإدارة التغيير تركز على الموظفين،
            لضمان تقبلهم ودعمهم للتحولات، وتقليل مقاومة التغيير داخل المؤسسة.
          </p>
          <p className="text-gray-600 leading-relaxed">
            من خلال خبراتنا، نساعد شركتك على تحقيق التوازن بين الأهداف الاستراتيجية
            واحتياجات فريق العمل، مما يضمن انتقالًا سلسًا ونموًا مستدامًا.
          </p>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={img3}
            alt="خدمات إدارة التغيير - HRSafePay"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>
    </>
  );
}
