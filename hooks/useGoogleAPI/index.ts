import { useCallback } from "react";

const useGoogleAPI = () => {
  const getPlaceNameByCoords = useCallback(
    async ({ lat, lng }: globalThis.google.maps.LatLngLiteral) => {
      const geocoder = new globalThis.google.maps.Geocoder();
      const result = await geocoder.geocode({
        location: { lat, lng },
      });
      const firstResult = result?.results[0];
      return {
        desktop: firstResult?.formatted_address,
        mobile:
          firstResult.address_components[2].long_name +
          ", " +
          firstResult.address_components[3].long_name,
      };
    },
    []
  );

  return { getPlaceNameByCoords };
};

export default useGoogleAPI;
