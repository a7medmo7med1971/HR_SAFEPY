import Image from 'next/image'
import header from "@/assets/hr/Service/inner-4.jpg";
import img2 from "@/assets/hr/Service/s-4.jpg"; // صورة لإدارة الرواتب

export const metadata = {
  title: "إدارة الرواتب | HRSafePay",
  description:
    "حلول HRSafePay لإدارة الرواتب تضمن الدقة، السرعة، والشفافية في صرف الرواتب والمكافآت، مع التوافق الكامل مع القوانين المحلية.",
  openGraph: {
    title: "إدارة الرواتب مع HRSafePay",
    description:
      "أنظمة متطورة لصرف الرواتب، حساب الضرائب، وضمان حقوق الموظفين بكفاءة واحترافية.",
    url: "https://hrsafepay.com/payroll",
    images: [
      {
        url: "/assets/hr/Service/s-2.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات إدارة الرواتب - HRSafePay",
      },
    ],
    locale: "ar_EG",
    type: "article",
  },
};

export default function Payroll() {
  return (
    <>
      {/* الهيدر */}
      <header className="relative w-full h-[20vh] md:h-[30vh] m-0 p-0">
        <Image
          src={header}
          alt="Cover"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            إدارة الرواتب مع HRSafePay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            أنظمة دقيقة لصرف الرواتب والمكافآت بمرونة وسرعة.
          </p>
        </div>
      </header>

      {/* المحتوى */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900">
            لماذا إدارة الرواتب مع HRSafePay؟
          </h2>
          <p className="text-gray-600 leading-relaxed">
            الرواتب هي أحد أهم عناصر رضا الموظفين وثقتهم بالشركة. في HRSafePay
            نقدم أنظمة متطورة تضمن دقة عالية في حساب الرواتب، الضرائب، والمكافآت.
          </p>
          <p className="text-gray-600 leading-relaxed">
            حلولنا توفر وقت وجهد الإدارة، تقلل من الأخطاء البشرية، وتدعم
            الامتثال الكامل للقوانين المحلية واللوائح الضريبية.
          </p>
          <p className="text-gray-600 leading-relaxed">
            مع HRSafePay، نضمن لك عملية دفع سلسة، شفافة، وسريعة، تعزز من رضا
            موظفيك وثقتهم في مؤسستك.
          </p>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={img2}
            alt="خدمات إدارة الرواتب - HRSafePay"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>
    </>
  );
}
