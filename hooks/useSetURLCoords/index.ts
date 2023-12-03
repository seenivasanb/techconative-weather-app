import { LocationType } from "@/types/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const useSetURLCoords = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleSetURLParams = useCallback(
    (location: LocationType) => {
      const params = new URLSearchParams();

      params.set("lat", `${location?.latitude}`);
      params.set("lon", `${location?.longitude}`);

      router.push(`${pathname}?${params}`);
    },
    [pathname, router]
  );

  return { handleSetURLParams };
};

export default useSetURLCoords;
