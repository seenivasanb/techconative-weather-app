"use server";

import Navigator from "@/components/navigator";
import Report from "@/components/report";
import { fetchWeatherReports } from "@/services/fetchReports";
import { SearchParamsTypes } from "@/types/pages";

type HomePageProps = {
  searchParams: SearchParamsTypes;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { lat, lon } = searchParams;
  const result = await fetchWeatherReports({
    latitude: lat || "",
    longitude: lon || "",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="relative -top-8 rounded-[40px] bg-white px-8 pb-3 pt-11 text-xl shadow-md">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-bold text-transparent">
          Weather Forecast App
        </span>
      </h1>

      <Report report={result} />

      <Navigator />
    </main>
  );
}
