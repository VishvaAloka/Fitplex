import React from "react";
import { plansData } from "../data/plansData.js";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="plans-container bg-[#3e3e3e]">
      <div className="programs-header " style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span className>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/*plans card*/}
      <div className="plans ">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            <div className="text-[#fff]">{plan.icon}</div>
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
