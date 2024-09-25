"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

const PercentageCircle = ({ value }: { value: number }) => {
  return (
    <div style={{ width: 62, height: 62 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor: "#fbc322 ",
          textColor: "white",
          textSize: "14px",
        })}
        className=" border-primary-yellow"
      />
    </div>
  );
};

export default PercentageCircle;
