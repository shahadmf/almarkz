import React from "react";
import "../styles/ContactUs.scss";

const ContactUs = () => {
  return (
    <div className="ContactUs">
      <h1>تواصل معنا</h1>
      <p>فضلًا املأ النموذج أدناه وسنتواصل معك قريبًا</p>
      <div className="form-container">
        <form action=" ">
          <div className="form-group">
            <label htmlFor="name">الاسم:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="الاسم"
              required
            />
            <label htmlFor="email">البريد الالكتروني:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="اكتب بريدك الالكتروني هنا"
              required
            />
            <label htmlFor="message">الرسالة :</label>
            <input
              type="textarea"
              name="message"
              id="message"
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
