"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useGetUserCoords from "@/hooks/useGetUserCoords";
import Map from "../map";
import { Button } from "../ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import useGoogleAPI from "@/hooks/useGoogleAPI";
import useURLCoords from "@/hooks/useURLCoords";
import { CoordsType } from "@/types/hooks";

const Navigator = () => {
  const { coords } = useGetUserCoords();
  const { setURLCoords } = useURLCoords();
  const { getPlaceNameByCoords } = useGoogleAPI();
  const [place, setPlace] = useState("");
  const [currentCoords, setCurrentCoords] = useState<CoordsType | null>(null);
  const selectedCoords = useRef<CoordsType | null>(null);

  const setCurrentPlace = useCallback(
    async (latLng: globalThis.google.maps.LatLngLiteral) => {
      const place = await getPlaceNameByCoords(latLng);
      setPlace(place);
      selectedCoords.current = {
        latitude: latLng.lat.toString(),
        longitude: latLng.lng.toString(),
      };
    },
    [getPlaceNameByCoords]
  );

  const handleSetURLCoords = useCallback(() => {
    const selected = selectedCoords.current;
    if (selected) {
      setCurrentCoords(selected);
      setURLCoords(selected);
      selectedCoords.current = null;
    }
  }, [setURLCoords]);
  const handleOpenChange = useCallback(() => {
    if (selectedCoords) {
      handleSetURLCoords();
    }
  }, [handleSetURLCoords]);

  useEffect(() => {
    setURLCoords(coords);
  }, [coords, setCurrentPlace, setURLCoords]);

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger className="w-full">
        <div className="rounded-full bg-violet-600 p-4 text-center text-white hover:bg-violet-800">
          <div className="line-clamp-1">{place || "Choose the location"}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-6xl p-3">
        <DialogHeader className="w-full p-0">
          <DialogTitle className="flex items-center justify-between ">
            <div className="line-clamp-1 pr-4">
              {place || "Choose the location"}
            </div>
            <DialogClose asChild>
              <Button onClick={handleSetURLCoords}>Get Weather</Button>
            </DialogClose>
          </DialogTitle>
        </DialogHeader>

        <Map
          coords={currentCoords || coords}
          onSetCurrentPlace={setCurrentPlace}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Navigator;
