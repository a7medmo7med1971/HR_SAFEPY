import Image from "next/image";
import image from "@/assets/hr/About us/inner-2.jpg";
import image2 from "@/assets/hr/About us/about-us.jpg";
import { FaChartLine } from "react-icons/fa";   
import { FaRocket } from "react-icons/fa";      
import { FaFlag } from "react-icons/fa";        
export default function About() {
  return (
    <>
      <header className="relative w-full h-[20vh] md:h-[30vh] m-0 p-0">
        {/* صورة الكوفر */}
        <Image
          src={image}
          alt="Cover"
          fill
          priority
          className="object-cover object-center" // هنا خليتها cover مش contain
        />
        {/* Overlay شفاف */}
        <div className="absolute inset-0 bg-black/40" />

        {/* المحتوى فوق الصورة */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            مرحبًا بكم في HRSafPay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            حلول مبتكرة لإدارة الموارد البشرية وتحقيق نمو مستدام لشركتك
          </p>
        </div>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center py-16 px-6 md:px-20 max-w-6xl mx-auto">
      {/* النص */}
      <div className="space-y-6" dir="rtl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-900 leading-tight">
          نظرة عامة
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          نحن في <span className="font-semibold text-indigo-700">HR Safepay</span> 
          نقدم حلولاً مبتكرة لإدارة الموارد البشرية، بدءًا من إدارة الرواتب بشكل آمن 
          ودقيق، مرورًا بخدمات التوظيف واختيار الكفاءات، وصولًا إلى الاستشارات 
          المتخصصة التي تساعد الشركات على تحسين الأداء وتحقيق أهدافها.
        </p>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          نؤمن أن نجاح أي مؤسسة يبدأ من الاهتمام بفريق العمل، لذلك نوفر أنظمة وخدمات 
          متكاملة تدعم التطوير والنمو المستدام. دعنا نكون شريكك الاستراتيجي في بناء 
          بيئة عمل احترافية وفعّالة.
        </p>
      </div>

      {/* الصورة */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden ">
        <Image
          src={image2}
          alt="عن HR Safepay"
          fill
          className="object-contain rounded-2xl  hover:scale-105 transition-transform duration-700"
        />
      </div>
    </section>
    {/* ////////////////////////////////// */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* العنوان */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-12">
        رؤيتنا و رسالتنا
      </h2>

      {/* البطاقات */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* الاستراتيجية */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border-r-4 border-yellow-400">
          <FaChartLine className="text-indigo-700 text-4xl" />
          <h3 className="text-xl font-semibold text-gray-900">استراتيجيتنا</h3>
          <p className="text-gray-600 leading-relaxed">
            في HR Safepay نسعى إلى وضع عملائنا في قلب كل ما نقدمه، 
            عبر حلول مبتكرة في إدارة الموارد البشرية تجعل عمليات الرواتب 
            والخدمات الإدارية أكثر سهولة وأماناً.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>التركيز على العملاء.</li>
            <li>ضمان الدقة والشفافية.</li>
            <li>الابتكار المستمر.</li>
            <li>التميز في الخدمة.</li>
          </ul>
        </div>

        {/* الرسالة */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border-r-4 border-yellow-400">
          <FaRocket className="text-indigo-700 text-4xl" />
          <h3 className="text-xl font-semibold text-gray-900">رسالتنا</h3>
          <p className="text-gray-600 leading-relaxed">
            مهمتنا هي تمكين الشركات من إدارة مواردها البشرية 
            بكفاءة عالية من خلال أنظمة آمنة وموثوقة، 
            تساعد على تعزيز النمو وتطوير بيئة عمل احترافية.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>تمكين المؤسسات.</li>
            <li>تقديم حلول آمنة وذكية.</li>
            <li>تطوير بيئة عمل متميزة.</li>
            <li>المساهمة في نجاح العملاء.</li>
          </ul>
        </div>

        {/* الرؤية */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4 border-r-4 border-yellow-400">
          <FaFlag className="text-indigo-700 text-4xl" />
          <h3 className="text-xl font-semibold text-gray-900">رؤيتنا</h3>
          <p className="text-gray-600 leading-relaxed">
            أن نصبح الشريك الاستراتيجي الأول للشركات في مجال إدارة الموارد البشرية 
            في المنطقة، عبر توفير حلول رقمية متكاملة تدعم الاستدامة والابتكار.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>الريادة في حلول الموارد البشرية.</li>
            <li>بناء الثقة مع العملاء.</li>
            <li>التحول الرقمي الفعّال.</li>
            <li>دعم النمو المستدام.</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
