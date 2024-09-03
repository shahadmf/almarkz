import React, { useState } from "react";
import Airtable from "airtable";
import "../styles/ContactUs.scss";

// Replace with your Airtable API key and base ID
const API_KEY =
  "patUpmjFqPlxrABDT.fbf1ac827a42c68f7855cc7364448e3a141566c389d12883a209a6227d97eec1";
const BASE_ID = "appyUS2Nmv5ZF3DIl";
const TABLE_NAME = "Contact Me";

// Initialize Airtable
const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await base(TABLE_NAME).create([
        {
          fields: {
            Name: formData.name, // Change these keys to match your Airtable column names
            Email: formData.email, // Change these keys to match your Airtable column names
            Message: formData.message, // Change these keys to match your Airtable column names
          },
        },
      ]);

      alert("تم إرسال رسالتك بنجاح!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      console.error("Error writing to Airtable:", error);
      alert("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقًا.");
    }
  };

  return (
    <div className="ContactUs">
      <h1>تواصل معنا</h1>
      <p>فضلًا املأ النموذج أدناه وسنتواصل معك قريبًا</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">الاسم:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="الاسم"
              required
            />
            <label htmlFor="email">البريد الالكتروني:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="اكتب بريدك الالكتروني هنا"
              required
            />
            <label htmlFor="message">الرسالة :</label>
            <input
              type="textarea"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="اكتب رسالتك هنا"
              required
            />
            <button type="submit">إرسال</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
