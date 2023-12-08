/* eslint-disable tailwindcss/no-custom-classname */
import React, { memo } from "react";
import "./index.scss";
import { getThemeByWeatherName } from "@/lib/theme";

type Props = {
  climate: string;
  time: string;
};

const BgOverlay = ({ climate, time }: Props) => {
  const themeClass = climate
    ? `${time}-${getThemeByWeatherName(climate)}`
    : "default";

  return (
    <div className={`report__bg-overlay report__bg-overlay--${themeClass}`} />
  );
};

export default memo(BgOverlay);
