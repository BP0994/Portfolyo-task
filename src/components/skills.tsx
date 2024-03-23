"use client";
import React from "react";

const Skills = ({
  name,
  image,
  percentage,
}: {
  name?: string;
  image?: string;
  percentage?: string;
}) => {
  return (
    <div>
      <div className="card w-40 lg:w-60 lg:h-60  image-full">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-50">{name}</h2>
          <div className="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
