import "./globals.css";
import { Tajawal } from "next/font/google";
import Navbar from "./(components)/_navbar/Navbar";
import Footer from "./(components)/_footer/Footer";
import BackToTopButton from "./(components)/BackToTopButton";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
});

export const metadata = {
  title: "HR SafePay | حلول الموارد البشرية",
  description: "خدمات متكاملة للرواتب، التوظيف، والاستشارات للشركات.",
  keywords: ["HR", "رواتب", "التوظيف", "استشارات", "SafePay"],
  openGraph: {
    title: "HR SafePay",
    description: "حلول HR احترافية للشركات.",
    url: "https://hrsafepay.com",
    siteName: "HR SafePay",
    images: [
      {
        url: "https://hrsafepay.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "HR SafePay",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-50 text-gray-800 font-sans overflow-x-hidden">
        <Navbar />
       <main >{children}</main>
        <BackToTopButton /> {/* زرار الرجوع لأعلى */}
        <Footer className="mt-5" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HR SafePay",
              url: "https://hrsafepay.com",
              logo: "https://hrsafepay.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+20-100-123-4567",
                  contactType: "customer service",
                  areaServed: "EG",
                  availableLanguage: ["ar", "en"],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
