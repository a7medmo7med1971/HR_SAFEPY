"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        اطلب استشارة مجانية
      </h2>

      <form
        action="https://formsubmit.co/ahmed01099229118@gmail.com" // حط هنا رابط Formsubmit
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          required
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          required
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
        />
        <input
          type="text"
          name="subject"
          placeholder="الموضوع"
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
        />
        <input
          type="tel"
          name="phone"
          placeholder="رقم الهاتف"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
        />
        <textarea
          name="message"
          placeholder="رسالتك"
          required
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-3 col-span-1 md:col-span-2 h-36 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
        />
        {/* زر الإرسال ممتد أسفل الفورم */}
        <div className="col-span-1 md:col-span-2 mt-4">
          <button
            type="submit"
            className="w-full bg-indigo-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-800 transition"
          >
            أرسل الرسالة
          </button>
        </div>
      </form>
    </section>
  );
}
