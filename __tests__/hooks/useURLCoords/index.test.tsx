import useURLCoords from "@/hooks/useURLCoords";
import { renderHook } from "@testing-library/react";

const mockPush = jest.fn((url: string) => {
  Object.defineProperty(window, "location", {
    writable: true,
    value: {
      ...window.location,
      search: url,
    },
  });
});

jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => "/",
    useRouter: () => ({
      push: mockPush,
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => "/",
  };
});

describe("useURLCoords Hook", () => {
  it("checks updating valid url coords", () => {
    const coords = {
      latitude: "80.1287",
      longitude: "12.9734",
    };
    const { result } = renderHook(() => useURLCoords());
    result.current.setURLCoords(coords);
    const params = new URLSearchParams(window.location.search);
    expect(params.get("lat")).toBe(coords.latitude);
    expect(params.get("lon")).toBe(coords.longitude);
  });
});
