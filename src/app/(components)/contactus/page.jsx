import Image from "next/image";
import header from "@/assets/hr/Service/inner-5.jpg"; // صورة الهيدر للتواصل
import CompanyMap from "../_map/CompanyMap";
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
      <header className="relative w-full h-[20vh] md:h-[30vh] m-0 p-0">
        <Image
          src={header}
          alt="تواصل معنا - HRSafPay"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            تواصل معنا مع HRSafPay
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            اتصل بنا أو أرسل رسالة عبر الفورم للحصول على استشارة مجانية وحلول مبتكرة.
          </p>
        </div>
      </header>

      {/* كارتات التواصل */}
      <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-gray-100 shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
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

        <div className="bg-gray-100 shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
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

        <div className="bg-gray-100 shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">
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
      <CompanyMap />

      {/* فورم التواصل */}
      <ContactForm />
    </>
  );
}
