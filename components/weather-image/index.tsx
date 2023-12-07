/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import "./index.scss";
import { getThemeByWeatherName } from "@/lib/theme";

type Props = {
  climate: string;
  time: string;
};

const WeatherImage = ({ climate, time }: Props) => {
  const themeClass = climate
    ? ` weather-image--${time}-${getThemeByWeatherName(climate)}`
    : "";

  return (
    <div>
      <div className={`weather-image${themeClass}`} />
    </div>
  );
};

export default WeatherImage;
