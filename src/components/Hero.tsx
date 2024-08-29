import React from "react";
import "../styles/Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background-image">
        <div className="hero-content">
          <h3> أسرتك متصلة، حياتك مرتبة</h3>
          <h1>مركز القيادة لحياة عائلتك المزدحمة</h1>
          <h4>
            جمّع كل جداولكم ومواردكم العائلية في مكان واحد، بسلاسة ويسر، لتدير
            منزلك الذكي بكفاءة أكبر
          </h4>
          <button className="start-button">
            انشئ مركزك حالاً
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
