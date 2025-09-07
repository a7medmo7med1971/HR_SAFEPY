import Image from 'next/image'
import header from "@/assets/hr/Service/inner-4.jpg";
import img6 from "@/assets/hr/Service/s-6.jpg"; // صورة توظيف القيادات

export const metadata = {
  title: "توظيف القيادات | HRSafePay",
  description:
    "HRSafePay تساعدك في اختيار القيادات المناسبة التي تقود شركتك نحو النجاح من خلال عمليات بحث وتقييم دقيقة واحترافية.",
  openGraph: {
    title: "توظيف القيادات مع HRSafePay",
    description:
      "خدمات احترافية لاختيار القادة التنفيذيين وأصحاب الخبرات الذين يساهمون في تعزيز استراتيجيات شركتك ونموها.",
    url: "https://hrsafepay.com/leadership-hiring",
    images: [
      {
        url: "/assets/hr/Service/s-6.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات توظيف القيادات - HRSafePay",
      },
    ],
    locale: "ar_EG",
    type: "article",
  },
};

export default function LeadershipHiring() {
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
            توظيف القيادات مع HRSafePay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            نساعدك في اختيار القيادات التي تقود شركتك نحو النمو والنجاح.
          </p>
        </div>
      </header>

      {/* المحتوى */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900">
            لماذا توظيف القيادات مع HRSafePay؟
          </h2>
          <p className="text-gray-600 leading-relaxed">
            اختيار القادة المناسبين يعد من أهم القرارات الاستراتيجية لأي مؤسسة. 
            فوجود قيادة فعالة يعني وجود رؤية واضحة، إدارة حكيمة، وقدرة على مواجهة التحديات.
          </p>
          <p className="text-gray-600 leading-relaxed">
            في HRSafePay نساعدك في تحديد احتياجاتك القيادية بدقة، والبحث عن أفضل المرشحين 
            أصحاب الخبرة، مع إجراء تقييمات شاملة تضمن ملاءمتهم لثقافة شركتك وأهدافها المستقبلية.
          </p>
          <p className="text-gray-600 leading-relaxed">
            هدفنا أن نضمن لك قيادة قوية وملهمة تساهم في دفع شركتك نحو النجاح المستدام.
          </p>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={img6}
            alt="خدمات توظيف القيادات - HRSafePay"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>
    </>
  );
}

