"use client";

export default function Loading() {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700"
      role="status"
      aria-live="polite"
    >
      {/* اللوجو الدائري (Circular Progress) */}
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-gray-200 rounded-full" />
        <div className="absolute w-full h-full border-4 border-indigo-900 rounded-full border-t-transparent animate-spin" />
      </div>

      {/* اسم الشركة */}
      <h1 className="mt-6 text-2xl font-bold text-indigo-900 animate-fadeIn">
        HRSafePay
      </h1>



      {/* النص الصغير */}
      <p className="mt-4 text-sm text-gray-500 animate-pulse">
        جاري التحميل...
      </p>


    </div>
  );
}
