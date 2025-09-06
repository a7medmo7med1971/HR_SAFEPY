import Image from "next/image";
import header from "@/assets/hr/Service/inner-5.jpg"; 
import MapWrapper from "../_map/MapWrapper"; // استدعاء الـ Wrapper
import ContactForm from "../_form/ContactForm";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "تواصل معنا | HRSafPay",
  description:
    "تواصل مع شركة HRSafPay للحصول على استشارة مجانية وحلول مبتكرة لإدارة الموارد البشرية.",
  openGraph: {
    title: "تواصل معنا | HRSafPay",
    description:
      "تواصل مع HRSafPay الآن واطلب استشارة مجانية أو أرسل رسالة عبر الفورم الإلكتروني.",
    url: "https://hrsafepay.com/contact",
    images: [
      {
        url: "/assets/hr/Service/inner-5.jpg",
        width: 1200,
        height: 630,
        alt: "تواصل معنا - HRSafPay",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <header className="relative w-full h-[20vh] md:h-[30vh]">
        <Image
          src={header}
          alt="تواصل معنا - HRSafPay"
          fill
          priority
          className="object-cover object-center"
        />
                <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fadeIn">
            تواصل معنا مع HRSafPay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl animate-fadeIn delay-200">
            اتصل بنا أو أرسل رسالة عبر الفورم للحصول على استشارة مجانية وحلول مبتكرة.
          </p>
        </div>
      </header>

      {/* كارتات التواصل */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all">
          <FaMapMarkerAlt className="text-4xl text-indigo-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-900 mb-2">عنواننا</h3>
          <p className="text-gray-600 mb-4">القاهرة، مصر</p>
          <a
            href="https://www.google.com/maps?q=القاهرة"
            target="_blank"
            className="text-indigo-800 font-semibold hover:underline"
          >
            عرض الموقع
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all">
          <FaEnvelope className="text-4xl text-indigo-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-900 mb-2">البريد الإلكتروني</h3>
          <p className="text-gray-600 mb-4">info@hrsafepay.com</p>
          <a
            href="mailto:info@hrsafepay.com"
            className="text-indigo-800 font-semibold hover:underline"
          >
            أرسل رسالة
          </a>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all">
          <FaPhoneAlt className="text-4xl text-indigo-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-indigo-900 mb-2">الدعم الفني</h3>
          <p className="text-gray-600 mb-4">+20 123 456 789</p>
          <a
            href="tel:+20123456789"
            className="text-indigo-800 font-semibold hover:underline"
          >
            اتصل بنا
          </a>
        </div>
      </section>

      {/* خريطة الشركة */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 text-center">
          موقعنا على الخريطة
        </h2>
        <MapWrapper /> {/* هنا بدل CompanyMap */}
      </section>

      {/* فورم التواصل */}
      <section className="px-6 md:px-20 max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6 text-center">
          راسلنا الآن
        </h2>
        <p className="text-center text-gray-500 mb-8">
          نرد عليك عادة خلال أقل من <span className="font-semibold">24 ساعة</span>
        </p>
        <ContactForm />
      </section>
    </>
  );
}
