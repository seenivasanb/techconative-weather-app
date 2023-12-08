/* eslint-disable tailwindcss/no-custom-classname */

import React, { memo } from "react";
import WeatherImage from "../weather-image";
import { getCurrentDate, getTimeOfDay } from "@/lib/date";
import "./index.scss";
import BgOverlay from "./bg-overlay";
import Matric from "./matric";

const Report = ({ report }: any) => {
  // console.log(report);
  const temp = Math.round(Number(report?.main?.temp));
  const max = Math.round(Number(report?.main?.temp_max));
  const min = Math.round(Number(report?.main?.temp_min));
  const description = report?.weather && report?.weather[0]?.description;
  const feelsLike = Math.round(Number(report?.main?.feels_like));
  const humidity = report?.main?.humidity;
  const pressure = report?.main?.pressure;
  const name = report?.name;
  const speed = report?.wind?.speed;
  const direction = report?.wind?.deg;

  const currentDate = getCurrentDate();
  const visibility = report?.visibility && report.visibility / 1000;
  const time = getTimeOfDay();

  return (
    <section className="report">
      <BgOverlay theme={description} />
      {report?.weather ? (
        <div>
          <div className="report__main">
            <div className="report__left">
              <div className="report__left__header">
                <h2 className="report__left__place">{name}</h2>
                <p className="report__left__date">{currentDate}</p>
              </div>
              <div className="report__left__image">
                <WeatherImage climate={description} time={time} />
              </div>
            </div>
            <div className="report__right">
              <h2 className="report__right__climate">
                {time}, {description}
              </h2>
              <div className="report__right__temperature">
                <h2 className="report__right__temp">
                  {temp}
                  <span className="report__right__deg" />
                </h2>
              </div>
              <div className="report__right__max-min">
                <p className="">Max: {max}&deg;</p>
                <p className="">Min: {min}&deg;</p>
              </div>
            </div>
          </div>

          <div className="report__metrics">
            <Matric
              value={feelsLike}
              name="feels like"
              unit="&deg;"
              icon="theremo-meter"
            />

            <Matric
              value={humidity}
              name="humidity"
              unit="&deg;"
              icon="percent"
            />

            <Matric
              value={pressure}
              name="pressure"
              unit="hpa"
              icon="speed-meter"
            />

            <Matric value={speed} name="wind speed" unit="km/h" icon="air" />

            <Matric
              value={direction}
              name="direction"
              unit="&deg;"
              icon="fan-direction"
            />

            <Matric value={visibility} name="visibility" unit="km" icon="eye" />
          </div>
        </div>
      ) : (
        <div className="report__not-available">
          <h3 className="report__not-available__header">
            No Reports Available!
          </h3>
          <p className="report__not-available__text">
            Choose any location in the map to get the weather report
          </p>
        </div>
      )}
    </section>
  );
};

export default memo(Report);
