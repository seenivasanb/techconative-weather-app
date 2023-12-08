import { PiThermometerThin } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import { MdOutlineAir } from "react-icons/md";
import { FaNfcDirectional } from "react-icons/fa6";
import { VscEye } from "react-icons/vsc";
import { CiPercent } from "react-icons/ci";

import React from "react";

export type MatricIconProps = {
  name:
    | "theremo-meter"
    | "speed-meter"
    | "air"
    | "fan-direction"
    | "eye"
    | "percent";
  size?: number;
};

const MatricIcon = ({ name, size = 60 }: MatricIconProps) => {
  if (name === "theremo-meter") {
    return <PiThermometerThin size={size} />;
  } else if (name === "speed-meter") {
    return <SlSpeedometer size={size} />;
  } else if (name === "air") {
    return <MdOutlineAir size={size} />;
  } else if (name === "fan-direction") {
    return <FaNfcDirectional size={size} />;
  } else if (name === "eye") {
    return <VscEye size={size} />;
  } else if (name === "percent") {
    return <CiPercent size={size} />;
  }
};

export default MatricIcon;
