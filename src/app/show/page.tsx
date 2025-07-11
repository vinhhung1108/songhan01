"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  HeartIcon,
  AcademicCapIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { videoConfig } from "@/config";
import VideoPlayer from "@/components/VideoPlayer";
import CreditCardForm from "@/components/CreditCardForm";
import Marquee from "@/components/Marquee";

export default function ShowPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat bg-gray-900"
      style={{ backgroundImage: "url('/background02.webp')" }}
    >
      <Head>
        <title>Hướng Dẫn Thanh Toán và Mở Thẻ</title>
        <meta
          name="description"
          content="Hướng dẫn thanh toán viện phí, học phí và mở thẻ tín dụng/tài khoản"
        />
      </Head>

      {/* Logo */}
      <div className="absolute top-6 right-6 z-10">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={120}
          height={120}
          className="drop-shadow-md"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          <button
            className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg md:text-xl font-semibold py-8 px-6 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-start space-x-2"
            onClick={() => handleOptionClick("hospital")}
          >
            <HeartIcon className="w-12 h-12 flex-shrink-0 mt-1" />
            <span className="text-left">
              Hướng dẫn
              <br />
              thanh toán viện phí
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-xl"></span>
          </button>
          <button
            className="relative bg-gradient-to-r from-green-500 to-green-700 text-white text-lg md:text-xl font-semibold py-8 px-6 rounded-xl shadow-lg hover:from-green-600 hover:to-green-800 transform hover:scale-105 transition-all duration-300 flex items-start space-x-2"
            onClick={() => handleOptionClick("school")}
          >
            <AcademicCapIcon className="w-12 h-12 flex-shrink-0 mt-1" />
            <span className="text-left">
              Hướng dẫn
              <br />
              thanh toán học phí
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-xl"></span>
          </button>
          <button
            className="relative bg-gradient-to-r from-purple-500 to-purple-700 text-white text-lg md:text-xl font-semibold py-8 px-6 rounded-xl shadow-lg hover:from-purple-600 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 flex items-start space-x-2"
            onClick={() => handleOptionClick("card")}
          >
            <CreditCardIcon className="w-12 h-12 flex-shrink-0 mt-1" />
            <span className="text-left">
              Mở thẻ
              <br />
              tín dụng/Tài khoản
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-xl"></span>
          </button>
        </div>

        {/* Content Display */}
        <div className="w-full max-w-4xl mt-2">
          {selectedOption === "hospital" && (
            <VideoPlayer
              videoId={videoConfig.hospital}
              title="Hướng dẫn thanh toán viện phí"
            />
          )}

          {selectedOption === "school" && (
            <VideoPlayer
              videoId={videoConfig.school}
              title="Hướng dẫn thanh toán học phí"
            />
          )}

          {selectedOption === "card" && (
            <CreditCardForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>
      {/* {selectedOption === null && <Marquee />} */}
      <Marquee />
    </div>
  );
}
