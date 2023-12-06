"use client";

import useGetUserCoords from "@/hooks/useGetUserCoords";
import useSetURLCoords from "@/hooks/useSetURLCoords";
import React, { useCallback, useEffect } from "react";
import MapContainer from "../map-container";
import { LocationType } from "@/types/hooks";

const Navigator = () => {
  const { location } = useGetUserCoords();
  const { handleSetURLParams } = useSetURLCoords();

  useEffect(() => {
    if (location) {
      handleSetURLParams(location);
    }
  }, [handleSetURLParams, location]);

  const handleClickSetURLParams = useCallback(
    (coords: LocationType) => {
      handleSetURLParams(coords);
    },
    [handleSetURLParams]
  );

  return (
    <section className="flex w-full items-center justify-center">
      <MapContainer
        location={location}
        onSetURLParams={handleClickSetURLParams}
      />
    </section>
  );
};

export default Navigator;
