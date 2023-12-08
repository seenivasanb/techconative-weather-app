/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import MatricIcon, { MatricIconProps } from "../matric-icon";

type Props = {
  name: string;
  value: number | string;
  unit: string;
  icon: MatricIconProps["name"];
};

const Matric = ({ name, value, unit, icon }: Props) => {
  return (
    <div className="report__metric">
      <div className="md:hidden">
        <MatricIcon name={icon} size={38} />
      </div>

      <div className="hidden md:block">
        <MatricIcon name={icon} />
      </div>

      <div>
        <p className="report__metric__value">
          {value}
          {unit === "deg" ? (
            "°"
          ) : (
            <span className="report__metric__unit"> {unit}</span>
          )}
        </p>
        <span className="report__metric__name">{name}</span>
      </div>
    </div>
  );
};

export default Matric;
