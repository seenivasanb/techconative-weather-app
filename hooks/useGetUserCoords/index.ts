import { LocationType } from "@/types/hooks";
import { useEffect, useState } from "react";

const useGetUserCoords = () => {
  const [location, setLocation] = useState<LocationType>({
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
          setLocation({
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

  return { location, isLoading, isError };
};

export default useGetUserCoords;
