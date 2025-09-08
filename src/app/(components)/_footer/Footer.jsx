import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-[#0B1A3A] text-white overflow-hidden" // خلفية كحلي غامق
      role="contentinfo"
    >
      {/* Overlay اختياري لو عايز شفافية أو Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12" dir="rtl">
            {/* Company Section */}
            <section aria-labelledby="footer-company" className="lg:col-span-2">
              <div className="mb-6">
                <h2
                  id="footer-company"
                  className="text-3xl font-bold mb-4  text-amber-50 hover:text-yellow-500 transition-all trans"
                >
                  HR SafePay
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  حلول مبتكرة في إدارة الموارد البشرية والرواتب لضمان الكفاءة، الأمان، والنمو المستدام لشركتك. نحن نقدم
                  خدمات متطورة تساعد الشركات على تحقيق أهدافها بكفاءة عالية.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-indigo-950 rounded-full font-semibold hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  title="اقرأ المزيد عن HR SafePay"
                >
                  اقرأ المزيد
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
              </div>

              {/* Newsletter Subscription */}
              <div className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <h3 className="text-lg font-semibold mb-3 text-amber-400">اشترك في نشرتنا الإخبارية</h3>
                <p className="text-gray-300 text-sm mb-4">احصل على آخر التحديثات والأخبار</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                  />
                  <button className="px-6 py-2 bg-amber-500 text-indigo-950 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
                    اشترك
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Links */}
            <nav aria-labelledby="footer-links" className="space-y-6">
              <div>
                <h2 id="footer-links" className="text-xl font-semibold mb-6 text-amber-400 relative">
                  روابط سريعة
                  <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-amber-400 to-yellow-300"></span>
                </h2>
                <ul className="space-y-3">
                  {[
                    { href: "/", text: "الرئيسية" },
                    { href: "/about", text: "من نحن" },
                    { href: "/service", text: "الخدمات" },
                    { href: "/contactus", text: "تواصل معنا" },
                  ].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-amber-400">خدماتنا الرئيسية</h3>
                <ul className="space-y-2">
                  {["إدارة الرواتب", "التوظيف والاستقطاب", "الاستشارات HR", "التحول الرقمي"].map(
                    (service, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        {service}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </nav>

            {/* Contact Information */}
            <section aria-labelledby="footer-contact" className="space-y-6">
              <h2 id="footer-contact" className="text-xl font-semibold mb-6 text-amber-400 relative">
                تواصل معنا
                <span className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-amber-400 to-yellow-300"></span>
              </h2>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="mailto:info@hrsafepay.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <FaEnvelope className="text-amber-400" />
                  </div>
                  <span>info@hrsafepay.com</span>
                </a>

                <a
                  href="tel:+201001234567"
                  className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <FaPhone className="text-amber-400" />
                  </div>
                  <span>+20 100 123 4567</span>
                </a>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-amber-400" />
                  </div>
                  <span>القاهرة، مصر</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-amber-400">تابعنا</h3>
                <div className="flex gap-3">
                  {[
                    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
                    {
                      icon: FaLinkedin,
                      href: "https://linkedin.com/company/hr-safepay",
                      label: "LinkedIn",
                      color: "hover:bg-blue-700",
                    },
                    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
                    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-gray-800" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-white ${social.color} hover:border-transparent transform hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" dir="rtl">
            <div className="text-gray-400 text-sm">© {year} HR SafePay. جميع الحقوق محفوظة.</div>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-amber-400 transition-colors">
                الشروط والأحكام
              </Link>
              <Link href="/cookies" className="hover:text-amber-400 transition-colors">
                سياسة الكوكيز
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
