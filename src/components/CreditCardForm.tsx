interface CreditCardFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CreditCardForm({ onSubmit }: CreditCardFormProps) {
  return (
    <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-xl">
      <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-4 text-center">
        Mở thẻ tín dụng/Tài khoản
      </h3>
      <form
        onSubmit={onSubmit}
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
  );
}
