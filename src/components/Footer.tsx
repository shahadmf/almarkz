import React, { useState } from "react";
import Airtable from "airtable";
import "../styles/Footer.scss";

// Replace with your Airtable API key and base ID
const API_KEY =
  "patUpmjFqPlxrABDT.fbf1ac827a42c68f7855cc7364448e3a141566c389d12883a209a6227d97eec1";
const BASE_ID = "appyUS2Nmv5ZF3DIl";
const TABLE_NAME = "Email Subscription";

// Initialize Airtable
const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US"); // Outputs date in MM/DD/YYYY format

    // const subscriptionDate = new Date().toISOString();
    console.log(formattedDate);

    try {
      await base(TABLE_NAME).create([
        {
          fields: {
            Email: email,
            Date: formattedDate, // Ensure this matches your Airtable column name
          },
        },
      ]);

      alert("تم الاشتراك بنجاح!");
      setEmail(""); // Clear the form
    } catch (error) {
      console.error("Error writing to Airtable:", error);
      alert("حدث خطأ أثناء الاشتراك. حاول مرة أخرى لاحقًا.");
    }
  };
  return (
    <div className="Footer">
      <div className="Footer-text">
        <h5>احصل على إشعار عند إطلاقنا</h5>
        <p>كن على اطلاع بأحدث الأخبار والإعلانات والمقالات</p>
        <span> جميع الحقوق محفوظة للمركز</span>
      </div>
      <div className="subscription-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Example@mail.com"
            required
          />
          <button>اشترك</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
