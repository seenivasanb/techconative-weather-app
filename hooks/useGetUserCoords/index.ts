import { LocationType } from "@/types/hooks";
import { useEffect, useState } from "react";

const useGetUserCoords = () => {
  const [location, setLocation] = useState<LocationType>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
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
