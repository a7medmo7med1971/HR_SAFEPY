import React from 'react'
import SliderHeader from './(components)/_slider/Slider'
import image from "@/assets/hr/Home/hrsafepay.png"
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import Link from 'next/link'
  import { FaBriefcase, FaUsers, FaChartBar, FaLock } from "react-icons/fa";



export default function Home() {
  return   <>
      <SliderHeader />
    



      {/* *********** */}
      <section className="grid md:grid-cols-2 gap-10 md:gap-16 items-center justify-center py-12 px-4 md:px-20 max-w-6xl mx-auto">
        {/* النص */}
        <div className="space-y-6 md:text-right">
          <h2 className="text-3xl md:text-5xl font-extrabold text-indigo-900 leading-snug">
            مرحبًا بكم في <br />
            <span className="text-blue-600">شركة HRSafPay</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            نحن في HRSafPay نقدم حلولاً مبتكرة لإدارة الموارد البشرية، بدءًا من
            إدارة الرواتب بشكل آمن ودقيق، مرورًا بخدمات التوظيف واختيار
            الكفاءات، وصولًا إلى الاستشارات المتخصصة التي تساعد الشركات على
            تحسين الأداء وتحقيق أهدافها.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            نؤمن أن نجاح أي مؤسسة يبدأ من الاهتمام بفريق العمل، لذلك نوفر أنظمة
            وخدمات متكاملة تدعم التطوير والنمو المستدام. دعنا نكون شريكك
            الاستراتيجي في بناء بيئة عمل احترافية وفعّالة.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href={"/contactus"}
              aria-label="تواصل معنا عبر شركة HR SafePay"
              className="mt-6 px-6 md:px-8 py-2 md:py-3 flex items-center gap-2 bg-blue-600 hover:bg-indigo-800 text-white rounded-lg shadow-lg transition duration-300"
            >
              <FaArrowRight className="text-sm" aria-hidden="true" />
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* الصورة */}
        <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mx-auto">
          <Image
            src={image}
            alt="شركة HR SafePay - حلول الموارد البشرية والرواتب"
            fill
            priority
            className="object-cover hover:scale-130 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>


      {/* //////////////////////////////// */}
      {/* Section المميزات */}
<section className="py-16 px-6 md:px-20 max-w-7xl mx-auto">
  {/* المميزات */}
  <div className="grid md:grid-cols-4 gap-6 mb-12 text-center">
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition">
      <FaBriefcase className="text-4xl text-indigo-800 mx-auto mb-4" />
      <h3 className="text-lg font-bold text-indigo-900 mb-2">إدارة الرواتب</h3>
      <p className="text-gray-600 text-sm">
        دعم الحسابات بدقة ووضوح
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <FaUsers className="text-4xl text-indigo-800 mx-auto mb-4" />
      <h3 className="text-lg font-bold text-indigo-900 mb-2">إدارة الموارد البشرية</h3>
      <p className="text-gray-600 text-sm">
        حلول رقمية تدعم فريقك
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <FaChartBar className="text-4xl text-indigo-800 mx-auto mb-4" />
      <h3 className="text-lg font-bold text-indigo-900 mb-2">التقارير والإحصائيات</h3>
      <p className="text-gray-600 text-sm">
        تقارير دقيقة تساعدك على اتخاذ القرارات
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <FaLock className="text-4xl text-indigo-800 mx-auto mb-4" />
      <h3 className="text-lg font-bold text-indigo-900 mb-2">أمان وحماية</h3>
      <p className="text-gray-600 text-sm">
        نظام مؤمن لحماية بيانات شركتك
      </p>
    </div>
  </div>

  {/* الإحصائيات */}
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-900">99.9%</h3>
      <p className="text-gray-600">موثوقية النظام</p>
    </div>
    <div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-900">+50,000</h3>
      <p className="text-gray-600">برنامج يتم تشغيله بنجاح</p>
    </div>
    <div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-indigo-900">+500</h3>
      <p className="text-gray-600">مؤسسة تدعم HR SafePay</p>
    </div>
  </div>
</section>

    </>
}
