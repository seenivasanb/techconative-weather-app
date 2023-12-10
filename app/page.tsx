"use server";

import Navigator from "@/components/navigator";
import Report from "@/components/report";
import { fetchWeatherReports } from "@/services/fetchReports";
import { SearchParamsTypes } from "@/types/pages";

type HomePageProps = {
  searchParams: SearchParamsTypes;
};

export default async function Home(props: HomePageProps) {
  const result: any = await fetchWeatherReports({
    latitude: props?.searchParams?.lat || "",
    longitude: props?.searchParams?.lon || "",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1
        id="home-header"
        className="relative -top-8 rounded-[40px] bg-white px-12 pb-3 pt-11 text-4xl shadow-md"
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-bold text-transparent">
          Weather Forecast App
        </span>
      </h1>

      {result?.error ? (
        <h3>Unable to fetch the reports! Try Later!</h3>
      ) : (
        <Report report={result} />
      )}

      <Navigator />
    </main>
  );
}
