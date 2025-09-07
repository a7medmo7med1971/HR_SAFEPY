import Image from 'next/image'
import header from "@/assets/hr/Service/inner-4.jpg";
import img2 from "@/assets/hr/Service/s-2.jpg"; // صورة إدارة المخاطر

export const metadata = {
  title: "إدارة المخاطر | HRSafePay",
  description:
    "تعرف على دور HRSafePay في إدارة المخاطر بفعالية عبر استراتيجيات حديثة تساعد شركتك على مواجهة التحديات وضمان الاستدامة.",
  openGraph: {
    title: "إدارة المخاطر مع HRSafePay",
    description:
      "حلول لإدارة المخاطر: تقييم شامل، خطط استباقية، والتزام بأفضل الممارسات العالمية لتقليل الخسائر وضمان نمو مستدام.",
    url: "https://hrsafepay.com/riskManagement",
    images: [
      {
        url: "/assets/hr/Service/s-2.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات إدارة المخاطر - HRSafePay",
      },
    ],
    locale: "ar_EG",
    type: "article",
  },
};

export default function RiskManagement() {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
         إدارة المخاطر مع HRSafePay
          </h1>
          <p className="text-lg md:text-lg max-w-lg">
         حلول عملية لحماية شركتك من المخاطر وضمان الاستقرار.
          </p>
        </div>
      </header>

      {/* المحتوى */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900">
            لماذا إدارة المخاطر مع HRSafePay؟
          </h2>
          <p className="text-gray-600 leading-relaxed">
            إدراك المخاطر هو الخطوة الأولى لحماية شركتك. نحن في HRSafePay نوفر
            استراتيجيات متكاملة لتحديد وتقييم المخاطر المحتملة التي قد تواجه
            أعمالك، سواء كانت تشغيلية أو مالية أو مرتبطة بالموارد البشرية.
          </p>
          <p className="text-gray-600 leading-relaxed">
            نعتمد على أنظمة تحليل حديثة لوضع خطط استباقية، مما يساعد في تقليل
            الخسائر وتحقيق الاستقرار التشغيلي على المدى الطويل.
          </p>
          <p className="text-gray-600 leading-relaxed">
            هدفنا هو مساعدتك على بناء بيئة عمل آمنة، مرنة، وقادرة على مواجهة
            التحديات بثقة واحترافية.
          </p>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={img2}
            alt="خدمات إدارة المخاطر - HRSafePay"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>
    </>
  );
}

