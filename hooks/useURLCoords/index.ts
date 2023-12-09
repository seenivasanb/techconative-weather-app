import { CoordsType } from "@/types/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const useURLCoords = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setURLCoords = useCallback(
    (coords: CoordsType) => {
      const params = new URLSearchParams(searchParams);
      params.set("lat", `${coords?.latitude}`);
      params.set("lon", `${coords?.longitude}`);

      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );
  return { setURLCoords };
};

export default useURLCoords;
