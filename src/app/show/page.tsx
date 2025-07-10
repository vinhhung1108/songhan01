"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  HeartIcon,
  AcademicCapIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

export default function ShowPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi form ở đây (gửi API hoặc thông báo)
    alert("Thông tin đã được gửi!");
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
              Đăng ký mở thẻ
              <br />
              tín dụng/Tài khoản
            </span>
            <span className="absolute inset-0 bg-white opacity-10 rounded-xl"></span>
          </button>
        </div>

        {/* Content Display */}
        <div className="w-full max-w-4xl mt-12">
          {selectedOption === "hospital" && (
            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-4 text-center">
                Hướng dẫn thanh toán viện phí
              </h3>
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[300px] md:h-[450px] rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/sample-video-id"
                  title="Hướng dẫn thanh toán viện phí"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {selectedOption === "school" && (
            <div className="bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-4 text-center">
                Hướng dẫn thanh toán học phí
              </h3>
              <div className="relative aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[300px] md:h-[450px] rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/sample-video-id"
                  title="Hướng dẫn thanh toán học phí"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {selectedOption === "card" && (
            <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-4 text-center">
                Đăng ký mở thẻ tín dụng/Tài khoản
              </h3>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số CCCD
                  </label>
                  <input
                    name="cccd"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nhập số CCCD"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày cấp
                  </label>
                  <input
                    name="issueDate"
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày hết hạn
                  </label>
                  <input
                    name="expiryDate"
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày sinh
                  </label>
                  <input
                    name="birthDate"
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ tên
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nhập họ tên"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nhập email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                  >
                    Gửi thông tin
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
