"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-4xl text-indigo-800 mx-auto mb-4" />,
      title: "عنواننا",
      text: "القاهرة، مصر",
      link: "https://www.google.com/maps?q=القاهرة",
      linkText: "عرض الموقع",
    },
    {
      icon: <FaEnvelope className="text-4xl text-indigo-800 mx-auto mb-4" />,
      title: "البريد الإلكتروني",
      text: "info@hrsafepay.com",
      link: "mailto:info@hrsafepay.com",
      linkText: "أرسل رسالة",
    },
    {
      icon: <FaPhoneAlt className="text-4xl text-indigo-800 mx-auto mb-4" />,
      title: "الدعم الفني",
      text: "+20 123 456 789",
      link: "tel:+20123456789",
      linkText: "اتصل بنا",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white shadow-lg rounded-xl p-8 text-center transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl "
          data-aos="fade-up"
          data-aos-delay={i * 200}
        >
          {card.icon}
          <h3 className="text-xl font-bold text-indigo-900 mb-2 transition-colors hover:text-indigo-700">
            {card.title}
          </h3>
          <p className="text-gray-600 mb-4 transition-colors hover:text-gray-800">
            {card.text}
          </p>
          <a
            href={card.link}
            target="_blank"
            className="text-indigo-800 font-semibold hover:text-indigo-600 hover:underline transition-colors"
          >
            {card.linkText}
          </a>
        </div>
      ))}
    </section>
  );
}
