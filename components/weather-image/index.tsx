/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import "./index.scss";

const WeatherImage = ({ main }: any) => {
  return (
    <div>
      <div className="main-image dizzle" />
    </div>
  );
};

export default WeatherImage;
