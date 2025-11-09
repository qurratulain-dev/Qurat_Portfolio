import React, { useState } from "react";
import ContactLeft from "./ContactLeft";
import ContactButton from "./ContactButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // 🔹 handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
  };
  const inputFields = [
    { name: "name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", type: "email", placeholder: "Your Email", required: true },
    { name: "subject", type: "text", placeholder: "Subject" },
    { name: "phone", type: "tel", placeholder: "Your Phone (Optional)" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-start">
        {/* 🔹 Left Side */}
        <ContactLeft />

        {/* 🔹 Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-5"
        >
          <h3 className="text-2xl font-bold text-emerald-500 mb-2">Get In Touch</h3>

          {/* Render Inputs */}
          <div className="grid md:grid-cols-2 gap-3">
            {inputFields.slice(0, 2).map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500"
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {inputFields.slice(2, 4).map((field, index) => (
              <input
                key={index}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500"
              />
            ))}
          </div>

          {/* Message Textarea */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="bg-gray-800 text-gray-200 px-3 py-2 w-full rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 resize-none"
            required
          ></textarea>

          {/* Button */}
          <ContactButton />

          {/* Success Message */}
          {submitted && (
            <p className="text-emerald-400 text-center mt-3">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
