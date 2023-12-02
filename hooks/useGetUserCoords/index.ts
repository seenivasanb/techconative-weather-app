import { LocationType } from "@/types/hooks";
import { useEffect, useState } from "react";

const useGetUserCoords = () => {
  const [location, setLocation] = useState<LocationType>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords;
          setLocation({ latitude, longitude });
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { location, isLoading };
};

export default useGetUserCoords;
