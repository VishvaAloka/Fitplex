import React from "react";
import "./Programs.css";
import { programsData } from "../../components/data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs bg-[#3e3e3e]" id="programs">
      {/* header*/}
      <div className="programs-header ">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category w-[360px] ml-[-10px]" key={program.heading}>
            {program.image}
            <span>{program.heading}</span>
            <span className="w-[300px]">{program.details}</span>
            <div className="join-now ">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
