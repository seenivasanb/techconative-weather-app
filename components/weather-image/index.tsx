// import Image from "next/image";
import React from "react";
import "./index.scss";

const WeatherImage = ({ main }: any) => {
  return (
    <div>
      <div className="main-image dizzle" />
      {/* <br /> <br />
      <Image
        src="./weather-icons.svg"
        width={1000}
        height={1000}
        alt={main}
        className="border-8 border-green-500"
      /> */}
    </div>
  );
};

export default WeatherImage;
