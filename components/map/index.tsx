import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { CoordsType } from "@/types/hooks";

type MapProps = {
  coords: CoordsType;
  onSetCurrentPlace: ({ mapCoords }: any) => void;
};

const Map = ({
  coords: { latitude, longitude },
  onSetCurrentPlace,
}: MapProps) => {
  const [libraries] = useState<any>(["places"]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const handleClick = useCallback(
    async (e: globalThis.google.maps.MapMouseEvent) => {
      const lat = e?.latLng?.lat();
      const lng = e?.latLng?.lng();
      onSetCurrentPlace({ lat, lng });
    },
    [onSetCurrentPlace]
  );

  if (!isLoaded) return <div>Loading....</div>;
  if (loadError) return <div>{loadError.message}</div>;

  return (
    <GoogleMap
      zoom={12}
      center={{
        lat: Number(latitude) || 123.456,
        lng: Number(longitude) || 123.456,
      }}
      mapContainerClassName="map"
      mapContainerStyle={{ width: "100%", height: "70vh", margin: "auto" }}
      onClick={(e) => handleClick(e)}
    />
  );
};

export default memo(Map);
