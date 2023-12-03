"use client";

import useGetUserCoords from "@/hooks/useGetUserCoords";
import useSetURLCoords from "@/hooks/useSetURLCoords";
import React, { useCallback, useEffect } from "react";
import { LocationType } from "@/types/hooks";
import Map from "../map";

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
    <section>
      <Map setCoords={handleClickSetURLParams} />
    </section>
  );
};

export default Navigator;
