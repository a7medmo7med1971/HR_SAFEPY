import Image from 'next/image'
import header from "@/assets/hr/Service/inner-4.jpg";
import img1 from "@/assets/hr/Service/s-1.jpg"; // صورة إدارة الموظفين


export const metadata = {
  title: "إدارة الموظفين | HRSafPay",
  description:
    "تعرف على دور HRSafPay في تنظيم وإدارة الموظفين بكفاءة من خلال أنظمة حديثة تضمن الإنتاجية، الشفافية، ورضا فريق العمل.",
  openGraph: {
    title: "إدارة الموظفين مع HRSafPay",
    description:
      "حلول متكاملة لإدارة الموظفين: متابعة الأداء، تنظيم الحضور والانصراف، وتطوير بيئة عمل احترافية.",
    url: "https://hrsafepay.com/peopleManagement",
    images: [
      {
        url: "/assets/hr/Service/s-1.jpg",
        width: 1200,
        height: 630,
        alt: "خدمات إدارة الموظفين - HRSafPay",
      },
    ],
    locale: "ar_EG",
    type: "article",
  },
};

export default function Peoplemanagement() {
  return <>
      
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            إدارة الموظفين مع HRSafPay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            نظم حديثة لإدارة الموظفين بذكاء وكفاءة تدعم نجاح شركتك.
          </p>
        </div>
      </header>

      {/* المحتوى */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-2xl md:text-4xl font-bold text-indigo-900">
            لماذا إدارة الموظفين مع HRSafPay؟
          </h2>
          <p className="text-gray-600 leading-relaxed">
            في HRSafPay نؤمن أن الموظفين هم أساس نجاح أي مؤسسة. لذلك نوفر حلولاً
            متكاملة لإدارة الموظفين بشكل يضمن الكفاءة والشفافية. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            من خلال أنظمتنا، يمكنك متابعة حضور وانصراف الموظفين، تنظيم سجلاتهم،
            تقييم الأداء بشكل دوري، وتقديم تقارير دقيقة تساعد الإدارة في اتخاذ
            قرارات أفضل.
          </p>
          <p className="text-gray-600 leading-relaxed">
            نحن نساعدك على خلق بيئة عمل محفزة تعزز من رضا الموظفين وترفع من
            إنتاجية المؤسسة، مع ضمان الالتزام الكامل بالقوانين واللوائح.
          </p>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={img1}
            alt="خدمات إدارة الموظفين - HRSafPay"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>
    
  </>
  
}
