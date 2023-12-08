import { CoordsType } from "@/types/hooks";

const BASE_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const fetchWeatherReports = async ({
  latitude,
  longitude,
}: CoordsType) => {
  try {
    const latlng = `lat=${latitude}&lon=${longitude}`;
    const response = await fetch(
      `${BASE_WEATHER_API_URL}?&units=metric&${latlng}&appid=${API_KEY}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Fetching weather report failed!", error);
    return { error: true, message: "Failed to fetch report" };
  }
};
