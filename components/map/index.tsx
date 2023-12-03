import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { LocationType } from "@/types/hooks";

type MapProps = {
  setCoords?: (coords: LocationType) => void;
};

const Map = ({ setCoords }: MapProps) => {
  const [libraries] = useState<any>(["places"]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const handleClick = useCallback(
    (e: globalThis.google.maps.MapMouseEvent) => {
      const coords: LocationType = {
        latitude: e?.latLng?.lat() || 0,
        longitude: e?.latLng?.lng() || 0,
      };
      if (setCoords) setCoords(coords);
    },
    [setCoords]
  );

  if (!isLoaded) return <div>Loading....</div>;

  if (loadError) return <div>{loadError.message}</div>;

  return (
    <div className="cursor-pointer">
      <GoogleMap
        zoom={12}
        center={{ lat: 12.9755397, lng: 80.2206438 }}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "500px", height: "600px", margin: "auto" }}
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default memo(Map);
