import React from "react";
import "../styles/Benefits.scss";

const Benefits = () => {
  const image1 = require("../assets/Frame 7.png");
  const image2 = require("../assets/Frame 8.png");
  const image3 = require("../assets/Frame 9.png");
  const image4 = require("../assets/Frame 6.png");

  return (
    <div className="Benefits">
      <h1>المزايا</h1>
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <img
              src={image1}
              alt="مختلف الخدمات السعودية المحلية وأشهر خدمات التقويم العالمية"
            />
          </div>
          <div className="card-content">
            <h2>تحكم كامل في منزلك الذكي</h2>
            <p>
              حوّل منزلك إلى واحة ذكية مع إمكانية دمج جميع أجهزتك وخدماتك الذكية
              على لوحة التحكم العائلية. من إضاءة المنزل، أنظمة التبريد، إلى
              التحكم بالأجهزة الصوتية وأجهزة الاستشعار، كل شيء تحت سيطرتك بنقرة
              واحدة. ولزيادة الأمان، يمكن دمج تغذية كاميرات المراقبة CCTV،
              لتوفير رؤية شاملة ولحظية لمنزلك، سواء كنت في العمل أو في رحلة، مما
              يمنحك راحة البال التامة والتحكم الكامل بأمان منزلك.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>موقع عائلتك وممتلكاتك بين يديك</h2>
            <p>
              ابق على اطلاع دائم بأمان مع خاصية تتبع مواقع أفراد عائلتك
              والممتلكات الأسرية. تمتع بالسكينة الذهنية عبر مشاركة المواقع الحية
              لأحبائك – بموافقتهم – وتتبع الأطفال بأمان إذا كانوا يرتدون أجهزة
              التتبع. كما يمكنك مراقبة الطرود والتسليمات، وحتى تتبع السيارة
              العائلية لمعرفة متى وإلى أين يقودها السائق. نظامنا المتقدم يوفر لك
              الشفافية والتحكم لضمان راحة بالك وتنظيم أمورك اليومية بسلاسة.
            </p>
          </div>
          <div className="card-image">
            <img src={image2} alt="b12" />
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img src={image3} alt="b12" />
          </div>
          <div className="card-content">
            <h2>واجهة مستخدم صديقة لجميع الأعمار</h2>
            <p>
              صُممت منصتنا مع مراعاة الجميع، لضمان تجربة سلسة لكافة أفراد
              العائلة، بما في ذلك كبار السن والأطفال. واجهة المستخدم لدينا قابلة
              للتخصيص بالكامل، مما يتيح لك ضبط النصوص لتكون أكبر حجمًا، وتبسيط
              العرض للمعلومات الأساسية، وتوفير تجربة تفاعلية مباشرة وواضحة. سواء
              كنت تفضل واجهة بسيطة للغاية أو مليئة بالميزات، منصتنا تضمن لك
              ولعائلتك الراحة والفعالية في الاستخدام. 
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2>تكامل تام مع منصات محلية وعالمية</h2>
            <p>
              اجعل حياتك أكثر تناغمًا مع منصتنا التي تتيح لك الربط السلس مع
              مختلف الخدمات السعودية المحلية وأشهر خدمات التقويم العالمية. سواء
              كانت مواعيدك مع الأطباء، الأنشطة المدرسية، أو حجوزات السفر، كل ذلك
              يمكن تنسيقه بسهولة. مع التكامل الذكي لمنصتنا، لا حاجة للإدخال
              اليدوي المتكرر - فقط قم بالربط مرة واحدة ودع منصتنا تعتني بالباقي.
            </p>
          </div>
          <div className="card-image">
            <img src={image4} alt="b12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;