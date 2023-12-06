import { CoordsType } from "@/types/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useURLCoords = () => {
  const router = useRouter();
  const pathname = usePathname();

  const setURLCoords = useCallback(
    (coords: CoordsType) => {
      const params = new URLSearchParams();
      params.set("lat", `${coords?.latitude}`);
      params.set("lon", `${coords?.longitude}`);

      router.push(`${pathname}?${params}`);
    },
    [pathname, router]
  );

  const getURLCoords = useCallback(() => {
    const params = new URLSearchParams();
    return {
      latitude: params.get("lat"),
      longitude: params.get("lon"),
    };
  }, []);

  return { getURLCoords, setURLCoords };
};

export default useURLCoords;
