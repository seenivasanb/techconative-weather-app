import WeatherImage from "@/components/weather-image";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Weather Image Component", () => {
  beforeEach(() => render(<WeatherImage climate="clouds" time="day" />));

  it("renders component", () => {
    const containerElement = screen.getByTestId("weather-image-container");
    expect(containerElement).toBeInTheDocument();
  });

  it("renders background element has expected classname", () => {
    const backgroundElement = screen.getByTestId("weather-image--day-clouds");
    expect(backgroundElement).toBeInTheDocument();
  });
});
