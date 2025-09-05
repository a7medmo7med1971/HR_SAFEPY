"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700">
      
      {/* اللوجو الدائري (Circular Progress) */}
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full border-4 border-gray-200 rounded-full" />
        <div className="absolute w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin" />
      </div>

      {/* اسم الشركة */}
      <h1 className="mt-6 text-2xl font-semibold text-blue-800">
        HRSafPay
      </h1>

      {/* شريط تحميل تحت */}
      <div className="mt-6 w-40 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full w-full bg-blue-600 animate-[mui-progress_2s_ease-in-out_infinite]" />
      </div>

      {/* النص الصغير */}
      <p className="mt-4 text-sm text-gray-500">
        جاري التحميل...
      </p>

      {/* Keyframes شريط التحميل */}
      <style jsx>{`
        @keyframes mui-progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
