"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "@/assets/hr/Home/sliderHeader/case-study-banner-1.jpg";
import image2 from "@/assets/hr/Home/sliderHeader/case-study-banner-2.jpg";
import image3 from "@/assets/hr/Home/sliderHeader/case-study-banner-3.jpg";
import Link from "next/link";

export default function SliderHeader() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout;
        let delay = 4000;

        function nextTimeout() {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, delay);
        }

        slider.on("created", nextTimeout);
        slider.on("dragStarted", () => clearTimeout(timeout));
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [instanceRef]);

  const slides = [
    {
      src: image1,
      alt: "خدمات الموارد البشرية",
      desc: "حلول متكاملة لإدارة فريق عملك بكفاءة واحترافية عالية مع ضمان أفضل النتائج.",
    },
    {
      src: image2,
      alt: "حلول الرواتب",
      desc: "نظام دقيق وآمن لإدارة الرواتب وضمان الامتثال القانوني مع تقارير شاملة.",
    },
    {
      src: image3,
      alt: "التوظيف والاستشارات",
      desc: "نساعدك في اختيار أفضل الكفاءات وتقديم استشارات متخصصة لتطوير مؤسستك.",
    },
  ];

  return (
    <section className="relative w-full h-[600px] overflow-hidden max-w-[100vw] mx-auto">
      {/* Main Slider */}
      <div
        ref={sliderRef}
        className="keen-slider relative w-full h-[600px]"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="keen-slider__slide relative w-full h-[600px] flex-shrink-0"
          >
            {/* Background Image */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl mb-6 leading-tight">
                  {slide.alt}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mt-4 max-w-3xl mx-auto drop-shadow-lg leading-relaxed mb-8">
                  {slide.desc}
                </p>
                <Link
                  href={"/contactus"}
                  className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-amber-50 hover:bg-amber-400 hover:to-blue-50 text-indigo-950 rounded-xl  text-lg shadow-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaArrowRight className="text-base" />
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 z-10"
        aria-label="الشريحة السابقة"
      >
        <FaChevronLeft />
      </button>
      
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 z-10"
        aria-label="الشريحة التالية"
      >
        <FaChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-amber-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`انتقل للشريحة ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}