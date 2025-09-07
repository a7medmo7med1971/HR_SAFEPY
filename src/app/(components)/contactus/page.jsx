import Image from "next/image";
import header from "@/assets/hr/Service/inner-5.jpg"; 
import MapWrapper from "../_map/MapWrapper"; // استدعاء الـ Wrapper
import ContactForm from "../_form/ContactForm";
import ContactCards from "./_ContactCards/ContactCards";

export const metadata = {
  title: "تواصل معنا | HRSafePay",
  description:
    "تواصل مع شركة HRSafePay للحصول على استشارة مجانية وحلول مبتكرة لإدارة الموارد البشرية.",
  keywords: [
    "HR",
    "Payroll",
    "Cairo",
    "Egypt",
    "حلول الموارد البشرية",
    "إدارة الرواتب",
    "HRSafePay",
    "استشارات الموارد البشرية",
  ],
  alternates: {
    canonical: "https://hrsafepay.com/contact",
  },
  openGraph: {
    title: "تواصل معنا | HRSafePay",
    description:
      "تواصل مع HRSafePay الآن واطلب استشارة مجانية أو أرسل رسالة عبر الفورم الإلكتروني.",
    url: "https://hrsafepay.com/contact",
    images: [
      {
        url: "/assets/hr/Service/inner-5.jpg",
        width: 1200,
        height: 630,
        alt: "تواصل معنا - HRSafePay",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا | HRSafePay",
    description:
      "تواصل مع HRSafePay الآن واطلب استشارة مجانية أو أرسل رسالة عبر الفورم الإلكتروني.",
    images: ["/assets/hr/Service/inner-5.jpg"],
  },
};


export default function ContactPage() {
  return (
    <>
      {/* Header */}
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
          <h1 className="text-2xl md:text-5xl font-bold mb-3">
           تواصل معنا مع HRSafePay
          </h1>
          <p className="text-lg md:text-lg max-w-lg">
           اتصل بنا أو أرسل رسالة عبر الفورم للحصول على استشارة مجانية وحلول مبتكرة.
          </p>
        </div>
      </header>

      <ContactCards></ContactCards>

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
