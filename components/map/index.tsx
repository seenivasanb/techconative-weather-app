import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { SetCoordsType } from "@/types/component";

type MapProps = {
  onClickSetCoords: ({ coords, address }: SetCoordsType) => void;
};

const Map = ({ onClickSetCoords }: MapProps) => {
  const [libraries] = useState<any>(["places"]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const getLocation = async ({ lat, lng }: any) => {
    const geocoder = new globalThis.google.maps.Geocoder();
    const result = await geocoder.geocode({
      location: { lat, lng },
    });
    return await result.results[0];
  };

  const handleClick = useCallback(
    async (e: globalThis.google.maps.MapMouseEvent) => {
      const latitude = e?.latLng?.lat();
      const longitude = e?.latLng?.lng();

      if (latitude && longitude) {
        const result = await getLocation({ lat: latitude, lng: longitude });
        onClickSetCoords({
          coords: { latitude, longitude },
          address: result.formatted_address,
        });
      }
    },
    [onClickSetCoords]
  );

  if (!isLoaded) return <div>Loading....</div>;

  if (loadError) return <div>{loadError.message}</div>;

  return (
    <div className="cursor-pointer">
      <GoogleMap
        zoom={12}
        center={{ lat: 12.9755397, lng: 80.2206438 }}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "70vh", margin: "auto" }}
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default memo(Map);
