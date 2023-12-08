import { renderHook } from "@testing-library/react";
import useGoogleAPI from "../../../hooks/useGoogleAPI";

const setupGoogleMock = (callback: () => void) => {
  const google = {
    maps: {
      Geocoder: class {
        public async geocode() {
          return callback();
        }
      },
    },
  };
  (global as any).window.google = google;
};

describe("useGoogleAPI Hook", () => {
  it("successfully got the results for correct coords", async () => {
    const mockResults = {
      results: [
        {
          address_components: [
            {
              long_name: "89",
              short_name: "89",
              types: ["street_number"],
            },
            {
              long_name: "Radha Nagar Main Road",
              short_name: "Radha Nagar Main Rd",
              types: ["route"],
            },
            {
              long_name: "Srinivasapuram",
              short_name: "Srinivasapuram",
              types: ["political", "sublocality", "sublocality_level_2"],
            },
            {
              long_name: "Chromepet",
              short_name: "Chromepet",
              types: ["political", "sublocality", "sublocality_level_1"],
            },
            {
              long_name: "Chennai",
              short_name: "Chennai",
              types: ["locality", "political"],
            },
            {
              long_name: "Chengalpattu",
              short_name: "Chengalpattu",
              types: ["administrative_area_level_3", "political"],
            },
            {
              long_name: "Tamil Nadu",
              short_name: "TN",
              types: ["administrative_area_level_1", "political"],
            },
            {
              long_name: "India",
              short_name: "IN",
              types: ["country", "political"],
            },
            {
              long_name: "600044",
              short_name: "600044",
              types: ["postal_code"],
            },
          ],
          formatted_address:
            "89, Radha Nagar Main Rd, Srinivasapuram, Chromepet, Chennai, Tamil Nadu 600044, India",
        },
      ],
    };
    const successCallback = () => {
      return Promise.resolve(mockResults);
    };
    setupGoogleMock(successCallback);
    const { result } = renderHook(() => useGoogleAPI());

    const coords = {
      lat: 12.951420299592261,
      lng: 80.14702516733398,
    };
    const expectedResults = {
      desktop:
        "89, Radha Nagar Main Rd, Srinivasapuram, Chromepet, Chennai, Tamil Nadu 600044, India",
      mobile: "Srinivasapuram, Chromepet",
    };

    const results = await result.current.getPlaceNameByCoords(coords);

    expect(results).toStrictEqual(expectedResults);
  });

  it("failed to get place by wrong coords", async () => {
    const failureCallback = () => {
      return Promise.reject(new Error());
    };
    setupGoogleMock(failureCallback);
    const { result } = renderHook(() => useGoogleAPI());
    const coords = {
      lat: 12.951420299592261,
      lng: 80.14702516733398,
    };

    const results = await result.current.getPlaceNameByCoords(coords);

    expect(results.error).toEqual("Unable to get the place");
    expect(results.status).toBe(400);
  });
});
