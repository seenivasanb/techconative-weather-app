/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import "./index.scss";
import { getThemeByWeatherName } from "@/lib/theme";

type Props = {
  climate: string;
  time: string;
};

const WeatherImage = ({ climate, time }: Props) => {
  const themeClass = ` weather-image--${time}-${getThemeByWeatherName(
    climate
  )}`;

  return (
    <div data-testid="weather-image-container">
      <div
        data-testid={`${themeClass}`}
        className={`weather-image${themeClass}`}
      />
    </div>
  );
};

export default WeatherImage;
