import Image from "next/image";
import header from "@/assets/hr/Service/inner-3.jpg";
import img1 from "@/assets/hr/Service/s-1.jpg";
import img2 from "@/assets/hr/Service/s-2.jpg";
import img3 from "@/assets/hr/Service/s-3.jpg";
import img4 from "@/assets/hr/Service/s-4.jpg";
import img5 from "@/assets/hr/Service/s-5.jpg";
import img6 from "@/assets/hr/Service/s-6.jpg";
import ServiceCards from "./_ServiceCards/ServiceCards";//  استدعاء الكروت



// SEO
export const metadata = {
  title: "خدماتنا في HRSafePay | حلول الموارد البشرية",
  description:
    "اكتشف حلول HRSafePay المتكاملة: إدارة الموظفين، الرواتب، التوظيف، إدارة التغيير والمخاطر، وتوظيف القيادات لدعم نمو شركتك بثقة.",
};

export default function Service() {
  const cards = [
    {
      img: img1,
      title: "إدارة الموظفين",
      desc: "نساعدك في تنظيم وإدارة فريق العمل بكفاءة لضمان بيئة عمل مثمرة ومستدامة.",
      link: "/peopleManagement",
    },
    {
      img: img2,
      title: "إدارة المخاطر",
      desc: "حلول متكاملة لتقليل المخاطر وضمان الامتثال وحماية شركتك من التحديات.",
      link: "/riskManagement",
    },
    {
      img: img3,
      title: "إدارة التغيير",
      desc: "ندعم مؤسستك في عمليات التحول لضمان التكيف السلس وتحقيق أهدافك.",
      link: "/changeManagement",
    },
    {
      img: img4,
      title: "إدارة الرواتب",
      desc: "أنظمة دقيقة وآمنة لإدارة الرواتب، لضمان الشفافية والدقة في كل عملية دفع.",
      link: "/payroll",
    },
    {
      img: img5,
      title: "التوظيف",
      desc: "نوفر لك أفضل الكفاءات من خلال عمليات اختيار وتوظيف مبنية على أسس احترافية.",
      link: "/staffing",
    },
    {
      img: img6,
      title: "توظيف القيادات",
      desc: "نساعدك في إيجاد القيادات المناسبة لنجاح شركتك ونموها على المدى البعيد.",
      link: "/leadershipHiring",
    },
  ];

  return (
    <>
      {/* ✅ الهيرو */}
      <header className="relative w-full h-[20vh] md:h-[30vh] m-0 p-0">
        <Image
          src={header}
          alt="Cover"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            خدماتنا في HRSafePay
          </h1>
          <p className="text-lg md:text-lg max-w-lg">
            نوفر حلول متكاملة للموارد البشرية: إدارة رواتب دقيقة، توظيف الكفاءات،
            واستشارات احترافية تساعد شركتك على النمو بثقة.
          </p>
        </div>
      </header>

      {/* ✅ الكروت */}
      <ServiceCards cards={cards} />
    </>
  );
}
