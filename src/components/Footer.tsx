import React from 'react'
import "../styles/Footer.scss";

const Footer = () => {
    return (
      <div className="Footer">
        <div className="Footer-text">
          <h5>احصل على إشعار عند إطلاقنا</h5>
          <p>كن على اطلاع بأحدث الأخبار والإعلانات والمقالات</p>
          <span> جميع الحقوق محفوظة للمركز</span>
            </div>
            <div className="subscription-form">
                <form>
                    <input type="text" name='email' placeholder='Example@mail.com' />
                    <button>اشترك</button>
                </form>
            </div>
      </div>
    );
}

export default Footer