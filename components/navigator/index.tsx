"use client";

import useGetUserCoords from "@/hooks/useGetUserCoords";
import React from "react";

const Navigator = () => {
  const { location, isLoading, isError } = useGetUserCoords();

  if (isLoading) {
    return <h2>Fetching the user geolocation ...</h2>;
  }

  if (isError) {
    return <h2>Failed to get user location! Try later!</h2>;
  }

  if (location) {
    return <h2>{JSON.stringify(location, null, 2)}</h2>;
  }

  return <h2>Please enable the location access in your browser!</h2>;
};

export default Navigator;
