"use client"
import React from "react";

const Workexperience = ({company_name, start , end , description , jobTitle , jobLocation }:{
    company_name?: string;
    start?: string ;
    end?: string;
    description? : string;
    jobTitle?:string;
    jobLocation? :string;
}) => {
  return (
    <div>
      <ul className="exp-list">
        
        <li>
          <div className="exp-date">
            <i className="ti-bookmark"></i>
            <span> {start}</span>{" - "}<span>{end}</span>
          </div>
          <div className="exp-content flex flex-col">
            <h4 className=" flex flex-col">
              {company_name}<span className="text-slate-100">{jobTitle}</span>
            </h4>
            <span>{jobLocation}</span>
            <p>
              {description}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Workexperience;
