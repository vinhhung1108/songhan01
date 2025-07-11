"use client";

import React from "react";

const marqueeText =
  "Chào mừng bạn đến với hướng dẫn thanh toán viện phí, học phí và mở thẻ tín dụng/tài khoản tại Vietinbank - Chi nhánh Sông Hàn. Chúng tôi cam kết mang đến dịch vụ tốt nhất cho bạn.";

export default function Marquee() {
  return (
    <div className="fixed bottom-0 left-0 w-full overflow-hidden py-2 bg-blue-500 bg-opacity-80 shadow-lg z-50">
      <div className="whitespace-nowrap animate-marquee text-white text-lg font-semibold px-4">
        {marqueeText}
        <span className="mx-8" aria-hidden="true">
          {marqueeText}
        </span>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
