import Image from "next/image";
import header from "@/assets/hr/Service/inner-3.jpg";
import img1 from "@/assets/hr/Service/s-1.jpg";
import img2 from "@/assets/hr/Service/s-2.jpg";
import img3 from "@/assets/hr/Service/s-3.jpg";
import img4 from "@/assets/hr/Service/s-4.jpg";
import img5 from "@/assets/hr/Service/s-5.jpg";
import img6 from "@/assets/hr/Service/s-6.jpg";
import Link from "next/link";


//  إضافة SEO للصفحة الرئيسية للخدمات
export const metadata = {
  title: "خدماتنا في HRSafePay | حلول الموارد البشرية",
  description:
    "اكتشف حلول HRSafePay المتكاملة: إدارة الموظفين، الرواتب، التوظيف، إدارة التغيير والمخاطر، وتوظيف القيادات لدعم نمو شركتك بثقة.",
  openGraph: {
    title: "خدماتنا في HRSafePay",
    description:
      "حلول متكاملة للموارد البشرية: إدارة رواتب، توظيف كفاءات، استشارات HR احترافية.",
    url: "https://your-domain.com/service",
    siteName: "HRSafePay",
    images: [
      {
        url: "/_next/image?url=%2Fassets%2Fhr%2FService%2Finner-3.jpg&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "HRSafePay Services",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function Service() {
  return (
    <>
      {/* هيدر */}
      <header className="relative w-full h-[20vh] md:h-[30vh] m-0 p-0">
        <Image
          src={header}
          alt="خدمات الموارد البشرية HRSafePay"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            خدماتنا في HRSafePay
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            نوفر حلول متكاملة للموارد البشرية: إدارة رواتب دقيقة، توظيف الكفاءات،
            واستشارات احترافية تساعد شركتك على النمو بثقة.
          </p>
        </div>
      </header>

      {/* قسم الخدمات */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
          خدماتنا
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* إدارة الموظفين */}
          <Card
            img={img1}
            title="إدارة الموظفين"
            desc="نساعدك في تنظيم وإدارة فريق العمل بكفاءة لضمان بيئة عمل مثمرة ومستدامة."
            link="/peopleManagement"
          />

          {/* إدارة المخاطر */}
          <Card
            img={img2}
            title="إدارة المخاطر"
            desc="حلول متكاملة لتقليل المخاطر وضمان الامتثال وحماية شركتك من التحديات."
            link="/riskManagement"
          />

          {/* إدارة التغيير */}
          <Card
            img={img3}
            title="إدارة التغيير"
            desc="ندعم مؤسستك في عمليات التحول لضمان التكيف السلس وتحقيق أهدافك."
            link="/changeManagement"
          />

          {/* إدارة الرواتب */}
          <Card
            img={img4}
            title="إدارة الرواتب"
            desc="أنظمة دقيقة وآمنة لإدارة الرواتب، لضمان الشفافية والدقة في كل عملية دفع."
            link="/payroll"
          />

          {/* التوظيف */}
          <Card
            img={img5}
            title="التوظيف"
            desc="نوفر لك أفضل الكفاءات من خلال عمليات اختيار وتوظيف مبنية على أسس احترافية."
            link="/staffing"
          />

          {/* توظيف القيادات */}
          <Card
            img={img6}
            title="توظيف القيادات"
            desc="نساعدك في إيجاد القيادات المناسبة لنجاح شركتك ونموها على المدى البعيد."
            link="/leadershipHiring"
          />
        </div>
      </section>
    </>
  );
}

// ✅ كارت خدمة مع SEO Alt
function Card({ img, title, desc, link }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <div className="relative w-full h-52">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 space-y-4 text-center">
        <h3 className="text-xl font-semibold text-indigo-900">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
        <Link
          href={link}
          className="inline-block text-blue-600 hover:text-indigo-800 font-medium transition"
        >
          اقرأ المزيد →
        </Link>
      </div>
    </div>
  );
}
