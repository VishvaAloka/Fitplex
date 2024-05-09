import React from "react";
import Header from "../Header/Header";
import "../../Screens/Login&Register/root.css";
import image from "../../assets/heart.png";
import image1 from "../../assets/hero.jpg";
import Program from "../Programs/Programs";
import programsData from "../data/programsData";
import Reasons from "../Reasons/Reasons";
import Footer from "../Footer/Footer";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-[#3e3e3e] ">
      <div className="hero">
        <div className="left-h">
          <Header />
          {/*the best ad */}
          <div className="the-best-ad">
            <span>the best fitness club in the town</span>
            <div></div>
          </div>

          {/*Hero Heading*/}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Shape</span>
              <span> Your</span>
            </div>

            <span>Ideal body</span>
          </div>
          <div>
            <span className="text-[16px] tracking-widest font-semibold mb-5">
              In here we will help you to shape and build your ideal body live
              up your life to fullest
            </span>
          </div>
          {/* figures */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span>members joined</span>
            </div>
            <div>
              <span>+50</span>
              <span>fitness programs</span>
            </div>
          </div>

          {/* hero buttons*/}
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
          <div className="right-h">
            <div className="heart-rate">
              <img src={image} alt="" />
              <span>Heart Rate</span>
              <span>116 bpm</span>
            </div>

            {/* calories */}
            <div className="calories">
              <img className="hero1" src={image1} alt="" />
              <button className="btn1 w-[100px]">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
