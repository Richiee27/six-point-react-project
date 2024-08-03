import React from "react";
import iconkanan from "../assets/img/images/bahan/vestsatu.png";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 d-flex align-items-center">
      <div className="hero-left mb-5" data-aos="fade-right">
        <h2>PRODUK TERBARU</h2>
        <div>
          <marquee behavior="scroll" direction="right" width="300">
            6094 PLATE CARRIER
          </marquee>
        </div>
        <div className="hero-latest-btn">
          <button className="btn-hero">Lihat disini</button>
        </div>
      </div>
      <div className="hero-right" data-aos="fade-left">
        <img src={iconkanan} alt="icon" />
      </div>
    </div>
  );
};

export default HeroComp;
