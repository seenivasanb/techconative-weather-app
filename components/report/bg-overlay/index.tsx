/* eslint-disable tailwindcss/no-custom-classname */
import React, { memo } from "react";
import "./index.scss";
import { getThemeByWeatherName } from "@/lib/theme";

type Props = {
  theme?: string;
};

const BgOverlay = ({ theme }: Props) => {
  const themeClass = theme
    ? ` report__bg-overlay--${getThemeByWeatherName(theme)}`
    : "";
  return <div className={`report__bg-overlay${themeClass}`} />;
};

export default memo(BgOverlay);
