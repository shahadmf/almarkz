import React from "react";
import "../styles/Pricing.scss";

const Pricing = () => {
  const handleClick = () => {
    window.open(
      "https://ws1hw6v5baf.typeform.com/almarkz",
      "noopener noreferrer"
    );
  };

  return (
    <div className="Pricing" id="pricing">
      <h1>الباقات</h1>
      <div className="cards">
        <div className="card">
          <h4>الأساسي</h4>
          <p>
            <span className="price"> ٣٠ ريال</span> شهريًا
          </p>
          <p>
            تنظيم الوقت العائلي وإدارة الموارد البسيطة. مشاركة المواقع الحية
            لأفراد العائلة. دعم فني أساسي.
          </p>

          <button className="btn b1" onClick={handleClick}>
            اطلبها الآن
          </button>
        </div>
        <div className="card">
          <h4> المتقدم</h4>
          <p>
            <span className="price"> ٦٠ ريال</span> شهريًا
          </p>
          <p>
            كل ميزات الآساسي. تكامل مع خدمات سعودية محلية وأجهزة المنزل الذكي.
            خيارات تخصيص متقدمة لواجهة المستخدم وتتبع متقدم للمواقع. دعم فني
            متميز.
          </p>
          <button className="btn b2" onClick={handleClick}>
            اطلبها الآن
          </button>
        </div>
        <div className="card">
          <h4> الشامل</h4>
          <p>
            <span className="price"> ٩٠ ريال</span> شهريًا
          </p>
          <p>
            كل ميزات المتقدم. تغذية مباشرة من كاميرات المراقبة. تحليلات بيانات
            متقدمة وميزات أمان معززة. خيارات تخصيص برمجية خاصة وفقاً لاحتياجات
            العائلة.
          </p>
          <button className="btn b3" onClick={handleClick}>
            اطلبها الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
