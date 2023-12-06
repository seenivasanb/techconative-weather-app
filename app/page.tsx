"use server";

import Navigator from "@/components/navigator";
import { fetchWeatherReports } from "@/services/useReports";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="text-3xl">Weather Forecast App</h1>
      <div className="rounded-lg bg-slate-50 p-10 shadow-md">
        <pre className="max-h-[60vh] overflow-auto">
          {result?.cod === "400"
            ? "Choose the location"
            : JSON.stringify(result, null, 1)}
        </pre>
      </div>
      <Navigator />
    </main>
  );
}
