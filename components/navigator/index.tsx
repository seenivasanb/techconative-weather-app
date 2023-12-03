"use client";

import useGetUserCoords from "@/hooks/useGetUserCoords";
import useSetURLCoords from "@/hooks/useSetURLCoords";
import React, { useEffect } from "react";

const Navigator = () => {
  const { location, isLoading, isError } = useGetUserCoords();
  const { handleSetURLParams } = useSetURLCoords();

  useEffect(() => {
    if (location) {
      handleSetURLParams(location);
    }
  }, [handleSetURLParams, location]);

  if (isLoading) {
    return <h2>Fetching the user geolocation ...</h2>;
  }

  if (isError) {
    return <h2>Failed to get user location! Try later!</h2>;
  }

  if (location) {
    return (
      <div>
        <h2>{JSON.stringify(location, null, 2)}</h2>
      </div>
    );
  }

  return <h2>Please enable the location access in your browser!</h2>;
};

export default Navigator;
