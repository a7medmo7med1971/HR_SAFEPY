import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-indigo-950 text-white" role="contentinfo">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12" dir="rtl">
          
          {/* الشركة + الوصف */}
          <section aria-labelledby="footer-company">
            <h2 id="footer-company" className="text-2xl font-bold mb-4">
              HR SafePay
            </h2>
            <p className="text-gray-300 leading-relaxed">
              حلول مبتكرة في إدارة الموارد البشرية والرواتب لضمان
              الكفاءة، الأمان، والنمو المستدام لشركتك.
            </p>
            <Link
              href="/about"
              className="inline-block mt-4 text-indigo-300 hover:text-amber-400 transition"
              title="اقرأ المزيد عن HR SafePay"
            >
              اقرأ المزيد →
            </Link>
          </section>

          {/* روابط سريعة */}
          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className="text-lg font-semibold mb-4 border-b border-indigo-700 inline-block pb-2">
              روابط سريعة
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/" className="hover:text-amber-400 transition">الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition">من نحن</Link></li>
              <li><Link href="/service" className="hover:text-amber-400 transition">الخدمات</Link></li>
              <li><Link href="/contactus" className="hover:text-amber-400 transition">تواصل معنا</Link></li>
            </ul>
          </nav>

          {/* الخدمات */}
          <section aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-lg font-semibold mb-4 border-b border-indigo-700 inline-block pb-2">
              خدماتنا
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li>إدارة الرواتب</li>
              <li>التوظيف</li>
              <li>الاستشارات</li>
              <li>التحول الرقمي</li>
            </ul>
          </section>

          {/* تواصل معنا */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-lg font-semibold mb-4 border-b border-indigo-700 inline-block pb-2">
              تواصل معنا
            </h2>
            <ul className="space-y-3 text-gray-300">
              <li><a href="mailto:info@hrsafepay.com" className="hover:text-amber-400">📧 info@hrsafepay.com</a></li>
              <li><a href="tel:+201001234567" className="hover:text-amber-400">📞 +20 100 123 4567</a></li>
              <li>📍 القاهرة، مصر</li>
            </ul>

            {/* أيقونات سوشيال */}
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-amber-400 hover:text-indigo-950 transition">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com/company/hr-safepay" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-amber-400 hover:text-indigo-950 transition">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-amber-400 hover:text-indigo-950 transition">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-amber-400 hover:text-indigo-950 transition">
                <FaXTwitter />
              </a>
            </div>
          </section>
        </div>

        {/* حقوق النشر */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {year} HR SafePay. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
