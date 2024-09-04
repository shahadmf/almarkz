// eslint-disable-next-line
import React from "react";
import "../styles/Why.scss";

const Why = () => {
  return (
    <div className="container" id="why">
      <h1> لماذا المركز؟</h1>
      <div className="cards">
        <div className="card">
          <div className="badge b2">
            <i className="fa-solid fa-thumbs-up fa-beat"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">سهولة الاستخدام لجميع الأعمار </h3>
            <p>
              واجهة مستخدم بديهية تتيح لكل فرد في الأسرة، صغاراً وكباراً،
              الاستخدام السهل والتفاعل مع الجداول والمواعيد دون عناء.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="badge b1">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">تفاعل عائلي مُعزز</h3>
            <p>
              اصنع مساحة للوقت العائلي القيم وشارك اللحظات المهمة بسلاسة. منصتنا
              تُسهّل التواصل وتقوي الروابط العائلية بمشاركة المعلومات والموارد
              بين أفراد الأسرة.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="badge b2">
            <i className="fa-solid fa-sitemap"></i>
          </div>
          <div className="card-body">
            <h3 className="card-title">تنظيم بلا حدود</h3>
            <p>
              ودّع الفوضى والتضارب في المواعيد مع منصة تجمع جداول العائلة بكل
              يسر وسهولة. سواءً للمدرسة، العمل، الأنشطة، أو الاجتماعات العائلية،
              كل شيء يُدار من مكان واحد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
