/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import React, { memo } from "react";
import WeatherImage from "../weather-image";
import { getCurrentDate } from "@/lib/date";
import { PiThermometerThin } from "react-icons/pi";
import { SlSpeedometer } from "react-icons/sl";
import { MdOutlineAir } from "react-icons/md";
import { FaNfcDirectional } from "react-icons/fa6";
import { VscEye } from "react-icons/vsc";
import { CiPercent } from "react-icons/ci";
import "./index.scss";

const Report = ({ report }: any) => {
  const main = report?.weather && report?.weather[0]?.main;
  const temp = Math.round(Number(report?.main?.temp));
  const max = Math.round(Number(report?.main?.temp_max));
  const min = Math.round(Number(report?.main?.temp_min));
  const description = report?.weather && report?.weather[0]?.description;
  const feelsLike = Math.round(Number(report?.main?.feels_like));
  const humidity = report?.main?.humidity;
  const pressure = report?.main?.pressure;
  const name = report?.name;
  const wind = report?.wind;
  const currentDate = getCurrentDate();
  const visibility = report?.visibility && report.visibility / 1000;

  return (
    <section className="report">
      <div className="report__bg-overlay" />
      {report?.weather ? (
        <div>
          <div className="report__main">
            <div className="report__left">
              <div className="report__left__header">
                <h2 className="report__left__place">{name}</h2>
                <p className="text-xs">{currentDate}</p>
              </div>
              <div className="report__left__image">
                <WeatherImage main={main} />
              </div>
            </div>
            <div className="report__right">
              <h2 className="report__right__climate">{description}</h2>
              <div className="report__right__temperature">
                <span className="report__right__deg" />
                <h2 className="report__right__temp">{temp}</h2>
              </div>
              <div className="report__right__max-min">
                <p className="">Max: {max}&deg;</p>
                <p className="">Min: {min}&deg;</p>
              </div>
            </div>
          </div>

          <div className="report__metrics">
            <div className="report__metric">
              <PiThermometerThin size={42} className="mt-1" />
              <div>
                <p className="report__metric__value">{feelsLike}&deg;</p>
                <span className="report__metric__name">feels like</span>
              </div>
            </div>

            <div className="report__metric">
              <CiPercent size={48} />
              <div>
                <p className="report__metric__value">
                  {humidity}
                  <span className="text-sm">%</span>
                </p>
                <span className="report__metric__name">humidity</span>
              </div>
            </div>

            <div className="report__metric">
              <SlSpeedometer size={36} className="mt-2" />
              <div>
                <p className="report__metric__value">
                  {pressure}
                  <span className="text-sm">hpa</span>
                </p>
                <span className="report__metric__name">pressure</span>
              </div>
            </div>

            <div className="report__metric">
              <MdOutlineAir size={36} />
              <div>
                <p className="report__metric__value">
                  {Math.round(Number(wind?.speed))}
                  <span className="text-sm">km/h</span>
                </p>
                <span className="report__metric__name">wind speed</span>
              </div>
            </div>

            <div className="report__metric">
              <FaNfcDirectional size={36} />
              <div>
                <p className="report__metric__value">{wind?.deg}&deg;</p>
                <span className="report__metric__name">direction</span>
              </div>
            </div>

            <div className="report__metric">
              <VscEye size={36} />
              <div>
                <p className="report__metric__value">
                  {visibility}
                  <span className="text-sm">km</span>
                </p>
                <span className="report__metric__name">visibility</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-10 text-center">
          <h3 className="mb-4 text-2xl font-bold">No Reports Available!</h3>
          <p className="text-sm">
            Choose any location in the map to get the weather report
          </p>
        </div>
      )}
    </section>
  );
};

export default memo(Report);
