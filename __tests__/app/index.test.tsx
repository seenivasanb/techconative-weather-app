import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";
import { AppRouterContextProviderMock } from "../../mocks/mock-router";
import { mockResults } from "@/mocks/mock-weather-results";

describe("Home", () => {
  const setup = async (callback: any) => {
    (global as any).fetch = jest.fn(async () =>
      Promise.resolve({
        json: () => callback(),
      })
    );

    const HomeComponent = await Home({ searchParams: { lat: "", lon: "" } });
    render(
      <AppRouterContextProviderMock router={{}}>
        {HomeComponent}
      </AppRouterContextProviderMock>
    );
  };

  it("renders a heading", async () => {
    const successCallback = jest.fn(() => Promise.resolve(mockResults));
    await setup(successCallback);

    const heading = screen.getByText("Weather Forecast App");

    const errorElement = screen.queryByText(
      "Unable to fetch the reports! Try Later!"
    );

    expect(heading).toBeInTheDocument();
    expect(errorElement).not.toBeInTheDocument();
  });

  it("renders a report component", async () => {
    const successCallback = jest.fn(() => Promise.resolve(mockResults));
    await setup(successCallback);

    const temp = screen.getByText("27");
    const place = screen.getByText("Pallāvaram");

    expect(place).toBeInTheDocument();
    expect(temp).toBeInTheDocument();
  });
});
