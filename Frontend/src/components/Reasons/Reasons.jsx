import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="bg-[#3e3e3e] p-12 grid grid-cols-2 gap-16">
      {/* left */}
      <div className="grid grid-cols-12 gap-5">
        <img
          src={image1}
          alt=""
          className="col-span-4 row-span-2 rounded-lg object-cover"
        />
        <img
          src={image2}
          alt=""
          className="col-span-8 rounded-lg object-cover h-full "
        />
        <img
          src={image3}
          alt=""
          className="col-span-4 rounded-lg h-full object-cover"
        />
        <img
          src={image4}
          alt=""
          className="col-span-4 rounded-lg h-full object-cover"
        />
      </div>

      {/* right */}
      <div className="flex flex-col gap-3">
        <p className="font-bold text-orange-400">SOME REASONS</p>
        <p>
          <span className="text-4xl font-bold tracking-wider mr-2">WHY</span>
          <span className="text-4xl font-bold tracking-wider">CHOOSE US?</span>
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <img src={tick} alt="" className="w-9 h-9" />
            <p>OVER 140+ EXPERT COACHS</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={tick} alt="" className="w-9 h-9" />
            <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={tick} alt="" className="w-9 h-9" />
            <p>1 FREE PROGRAM FOR NEW MEMBER</p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={tick} alt="" className="w-9 h-9" />
            <p>RELIABLE PARTNERS</p>
          </div>
        </div>

        <div>
          <p>OUR PARTNERS</p>
          <div className="flex gap-5 mt-2">
            <img src={nb} alt="" className="w-8 h-8" />
            <img src={adidas} alt="" className="w-8 h-8" />
            <img src={nike} alt="" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
