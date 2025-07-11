import { NextRequest, NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Tạo transporter SMTP (ví dụ dùng Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // email gửi
        pass: process.env.EMAIL_PASS, // mật khẩu ứng dụng hoặc mật khẩu email
      },
    });

    // Cấu hình email gửi đi
    const mailOptions = {
      from: `"Kiosk Hỗ Trợ" <${process.env.EMAIL_USER}>`,
      to: process.env.MANAGER_EMAIL, // email cán bộ quản lý nhận
      subject: "Thông tin mở thẻ tín dụng/tài khoản mới",
      html: `
        <h2>Thông tin đăng ký mở thẻ tín dụng/tài khoản</h2>
        <ul>
          <li><strong>Số CCCD:</strong> ${data.cccd}</li>
          <li><strong>Ngày cấp:</strong> ${data.issueDate}</li>
          <li><strong>Ngày hết hạn:</strong> ${data.expiryDate}</li>
          <li><strong>Ngày sinh:</strong> ${data.birthDate}</li>
          <li><strong>Họ tên:</strong> ${data.fullName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Số điện thoại:</strong> ${data.phone}</li>
        </ul>
      `,
    };

    // Gửi email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Thông tin đã được gửi thành công!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Gửi email thất bại, vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
