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

const Report = ({ report }: any) => {
  const main = report?.weather && report?.weather[0]?.main;
  const temp = Math.round(Number(report?.main?.temp));
  const max = Math.round(Number(report?.main?.temp_max));
  const min = Math.round(Number(report?.main?.temp_min));
  const description = report?.weather && report?.weather[0]?.description;
  const feelsLike = report?.main?.feels_like;
  const humidity = report?.main?.humidity;
  const pressure = report?.main?.pressure;
  const name = report?.name;
  const wind = report?.wind;
  const currentDate = getCurrentDate();
  const visibility = report?.visibility && report.visibility / 1000;

  return (
    <section className="mb-4 w-full p-4 text-white">
      <div className="fixed left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-red-300 from-40% via-red-400 to-fuchsia-950" />
      {report?.weather ? (
        <div>
          <div className="mb-2 flex flex-row justify-between">
            <div className="max-w-[150px] flex-none">
              <div className="ml-2 mt-16 text-left">
                <h2 className="line-clamp-2 text-lg font-bold capitalize">
                  {name}
                </h2>
                <p className="text-xs">{currentDate}</p>
              </div>
              <div className="mb-6 flex-1 origin-top-left">
                <WeatherImage main={main} />
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-right text-lg capitalize leading-none">
                {description}
              </h2>
              <div className="relative pr-6">
                <span className="absolute right-0 top-4 h-6 w-6 rounded-full border-[6px] border-white bg-transparent"></span>
                <h2 className="text-[130px] font-bold leading-none">{temp}</h2>
              </div>
              <div className="ml-2 flex gap-4 text-right  text-sm">
                <p className="">Max: {max} &deg;</p>
                <p className="">Min: {min} &deg;</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 gap-y-8">
            <div className="flex flex-col items-center justify-between gap-3 text-center">
              <PiThermometerThin size={48} />
              <div>
                <p className="text-lg leading-none">{feelsLike}</p>
                <span className="text-xs opacity-60">feels like</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 text-center">
              <CiPercent size={48} />
              <div>
                <p className="text-lg leading-none">{humidity}</p>
                <span className="text-xs opacity-60">humidity</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 text-center">
              <SlSpeedometer size={36} className="mt-2" />
              <div>
                <p className="text-lg leading-none">{pressure} hpa</p>
                <span className="text-xs opacity-60">pressure</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 text-center">
              <MdOutlineAir size={36} />
              <div>
                <p className="text-lg leading-none">
                  {Math.round(Number(wind?.speed))} km/h
                </p>
                <span className="text-xs opacity-60">wind speed</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 text-center">
              <FaNfcDirectional size={36} />
              <div>
                <p className="text-lg leading-none">{wind?.deg}&deg;</p>
                <span className="text-xs opacity-60">direction</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 text-center">
              <VscEye size={36} />
              <div>
                <p className="text-lg leading-none">{visibility} km</p>
                <span className="text-xs opacity-60">visibility</span>
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
