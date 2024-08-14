import React from "react";
import iconkanan from "../assets/img/images/bahan/vestsatu.png";
import Product from "../pages/Product";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 d-flex">
      <div className="hero-left " data-aos="fade-right">
        <h2>PRODUK TERBARU</h2>
        <div>
          <marquee behavior="scroll" direction="right" width="300">
            6094 PLATE CARRIER
          </marquee>
        </div>
        <div className="hero-latest-btn">
          <button className="btn-hero">Lihat Disini</button>
        </div>
      </div>
      <div className="hero-right" data-aos="fade-left">
        <img src={iconkanan} alt="icon" />
      </div>
    </div>
  );
};

export default HeroComp;
