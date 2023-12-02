import { renderHook } from "@testing-library/react";
import useGetUserCoords from ".";

describe("useGetUserCoords Hook", () => {
  it("Succeed with returning coordinates", () => {
    const mockCoordinate = {
      latitude: 123.456,
      longitude: 654.321,
    };

    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
        Promise.resolve(
          success({
            coords: mockCoordinate,
          })
        )
      ),
    };
    (global as any).navigator.geolocation = mockGeolocation;

    const { result } = renderHook(() => useGetUserCoords());

    expect(result.current.location).toStrictEqual(mockCoordinate);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
  });

  it("Failed with throwing error", () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn().mockImplementationOnce(() => {
        throw new Error();
      }),
    };

    (global as any).navigator.geolocation = mockGeolocation;

    const { result } = renderHook(() => useGetUserCoords());

    expect(result?.current?.location).toBe(undefined);
    expect(result?.current?.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });
});
