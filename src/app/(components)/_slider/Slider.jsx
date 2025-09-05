"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import image1 from "@/assets/hr/Home/sliderHeader/case-study-banner-1.jpg";
import image2 from "@/assets/hr/Home/sliderHeader/case-study-banner-2.jpg";
import image3 from "@/assets/hr/Home/sliderHeader/case-study-banner-3.jpg";
import Link from "next/link";

export default function SliderHeader() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      renderMode: "performance",
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let delay = 3000;

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
      desc: "حلول متكاملة لإدارة فريق عملك بكفاءة واحترافية.",
    },
    {
      src: image2,
      alt: "حلول الرواتب",
      desc: "نظام دقيق وآمن لإدارة الرواتب وضمان الامتثال.",
    },
    {
      src: image3,
      alt: "التوظيف والاستشارات",
      desc: "نساعدك في اختيار الكفاءات وتقديم استشارات متخصصة.",
    },
  ];

  return (
    <section
      ref={sliderRef}
      className="keen-slider relative w-full h-[500px] overflow-hidden max-w-[100vw] mx-auto"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="keen-slider__slide relative w-full h-[500px] flex-shrink-0" //عشان حتة ال reaload
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
              {slide.alt}
            </h1>
            <p className="text-white text-sm md:text-lg mt-3 max-w-2xl drop-shadow">
              {slide.desc}
            </p>
            <Link
            href={"/contactus"}
             className="mt-6 px-6 py-2 flex items-center gap-2 bg-indigo-950 hover:bg-indigo-900 text-white rounded-lg shadow-lg transition duration-300">
              <FaArrowRight className="text-sm" />
              تواصل معانا
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
