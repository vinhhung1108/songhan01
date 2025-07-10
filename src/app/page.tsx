"use client";

import { useState } from "react";

type Selected =
  | "payment-hospital"
  | "payment-tuition"
  | "open-credit-card"
  | null;

export default function Page() {
  const [selected, setSelected] = useState<Selected>(null);
  const [formData, setFormData] = useState({
    cccd: "",
    issueDate: "",
    expiryDate: "",
    birthDate: "",
    fullName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (option: Selected) => {
    setSelected(option);
    setSubmitted(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gửi formData cho cán bộ quản lý
    setSubmitted(true);
  };

  return <div></div>;
}
