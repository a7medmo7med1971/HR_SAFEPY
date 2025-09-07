import Image from 'next/image'
import header from "@/assets/hr/Service/inner-4.jpg";
import img5 from "@/assets/hr/Service/s-5.jpg"; // صورة التوظيف

export const metadata = {
  title: "التوظيف | HRSafePay",
  description:
    "HRSafePay توفر حلول توظيف مبتكرة تساعدك على اختيار الكفاءات المناسبة لنجاح شركتك من خلال عمليات دقيقة واحترافية.",
  openGraph: {
    title: "خدمات التوظيف مع HRSafePay",
    description:
      "عمليات توظيف احترافية لاختيار أفضل الكفاءات وضمان ملاءمتهم لثقافة وأهداف شركتك.",
    url: "https://hrsafepay.com/staffing",
    images: [
      {
        url: "/assets/hr/Service/s-5.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات التوظيف - HRSafePay",
      },
    ],
    locale: "ar_EG",
    type: "article",
  },
};

export default function Staffing() {
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
            خدمات التوظيف مع HRSafePay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            نوفر لك أفضل الكفاءات من خلال عمليات توظيف مبنية على معايير احترافية.
          </p>
        </div>
      </header>

      {/* المحتوى */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900">
            لماذا التوظيف مع HRSafePay؟
          </h2>
          <p className="text-gray-600 leading-relaxed">
            عملية التوظيف ليست مجرد ملء شواغر، بل هي اختيار العنصر البشري القادر 
            على دفع شركتك نحو النجاح. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            في HRSafePay نعتمد على استراتيجيات توظيف متكاملة تشمل تحليل احتياجات الوظائف، 
            إعداد وصف وظيفي دقيق، جذب أفضل المرشحين، وإجراء مقابلات احترافية تضمن اختيار الأنسب.
          </p>
          <p className="text-gray-600 leading-relaxed">
            نضمن لك فريق عمل متكامل يتوافق مع أهداف شركتك وثقافتها، مما يساهم في تعزيز النمو والإنتاجية.
          </p>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={img5}
            alt="خدمات التوظيف - HRSafePay"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>
    </>
  );
}
