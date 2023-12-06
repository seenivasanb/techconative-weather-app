import React, { memo, useCallback, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { SetCoordsType } from "@/types/component";
import { LocationType } from "@/types/hooks";
import { useSearchParams } from "next/navigation";

type MapProps = {
  location: LocationType;
  onClickSetCoords: ({ coords, address }: SetCoordsType) => void;
};

const Map = ({ onClickSetCoords }: MapProps) => {
  const searchParams = useSearchParams();
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lon");
  const [libraries] = useState<any>(["places"]);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const getLocation = async ({
    lat,
    lng,
  }: globalThis.google.maps.LatLngLiteral) => {
    const geocoder = new globalThis.google.maps.Geocoder();
    const result = await geocoder.geocode({
      location: { lat, lng },
    });
    return result.results[0];
  };

  const handleClick = useCallback(
    async (e: globalThis.google.maps.MapMouseEvent) => {
      const lat = e?.latLng?.lat();
      const lng = e?.latLng?.lng();

      if (lat && lng) {
        const result = await getLocation({ lat, lng });
        onClickSetCoords({
          coords: {
            latitude: lat.toString(),
            longitude: lng.toString(),
          },
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
        center={{
          lat: Number(latitude) || 9.6518,
          lng: Number(longitude) || 9.6518,
        }}
        mapContainerClassName="map"
        mapContainerStyle={{ width: "100%", height: "70vh", margin: "auto" }}
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

export default memo(Map);
