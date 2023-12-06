import { useCallback } from "react";

const useGoogleAPI = () => {
  const getPlaceNameByCoords = useCallback( async ({
    lat,
    lng,
  }: globalThis.google.maps.LatLngLiteral) => {
    const geocoder = new globalThis.google.maps.Geocoder();
    const result = await geocoder.geocode({
      location: { lat, lng },
    });
    return result?.results[0]?.formatted_address;
  }, []);

  return {getPlaceNameByCoords}
}

export default useGoogleAPI;