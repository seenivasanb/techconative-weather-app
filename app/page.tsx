import Navigator from "@/components/navigator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl">Weather Forecast App</h1>
      <Navigator />
    </main>
  );
}
