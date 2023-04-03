import { Button } from "@mui/material";
import React from "react";
import "./Result.css";

const Result = ({ temp, desc, image, setTemp }) => {
  return (
    <>
      <div className="result">
        <div className="result__box">
          <h1>Temp:{temp}°C</h1>
          <p>{desc}</p>
          <img src={image} alt="icon" />
          <br />
          <Button variant="contained" onClick={() => setTemp("")}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default Result;
