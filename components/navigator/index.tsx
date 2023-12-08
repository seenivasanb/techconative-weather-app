/* eslint-disable tailwindcss/no-custom-classname */
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
import { CoordsType, PlaceType } from "@/types/hooks";
import "./index.scss";
import Place from "./place";

const Navigator = () => {
  const { coords } = useGetUserCoords();
  const { setURLCoords } = useURLCoords();
  const { getPlaceNameByCoords } = useGoogleAPI();
  const [place, setPlace] = useState<PlaceType>();
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
      <DialogTrigger className="dialog__trigger">
        <div className="dialog__location">
          <div className="line-clamp-1">
            <Place place={place} />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="dialog__content">
        <DialogHeader className="dialog__header">
          <DialogTitle className="dialog__title">
            <div className="dialog__location__title">
              <Place place={place} />
            </div>
            <DialogClose asChild>
              <Button
                onClick={handleSetURLCoords}
                className="dialog__close-button group"
              >
                <span className="dialog__close-button__text">Get Weather</span>
              </Button>
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
