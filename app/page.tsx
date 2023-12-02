import Navigator from "@/components/navigator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-3xl">Weather Forecast App</h1>

      <section className="flex rounded-lg bg-white p-10 shadow-md">
        <Navigator />
      </section>
    </main>
  );
}
