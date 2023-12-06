import { CoordsType } from "@/types/hooks";
import { useEffect, useState } from "react";

const useGetUserCoords = () => {
  const [coords, setCoords] = useState<CoordsType>({
    latitude: "",
    longitude: "",
  });
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          setCoords({
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          });
        });
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { coords, isLoading, isError };
};

export default useGetUserCoords;
