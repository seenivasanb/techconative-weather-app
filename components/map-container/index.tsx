import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { useCallback, useState } from "react";
import Map from "../map";
import { Button } from "../ui/button";
import { LocationType } from "@/types/hooks";
import { SetCoordsType } from "@/types/component";

type MapContainerProps = {
  location: LocationType;
  onSetURLParams: (coords: LocationType) => void;
};

const MapContainer = ({ onSetURLParams, location }: MapContainerProps) => {
  const [coords, setCoords] = useState<LocationType>({
    latitude: "",
    longitude: "",
  });
  const [address, setAddress] = useState("");

  const handleClickSetURLParams = useCallback(() => {
    if (coords.latitude && coords.longitude) {
      onSetURLParams(coords);
    }
  }, [coords, onSetURLParams]);

  const handleClickSetCoords = useCallback(
    ({ coords, address }: SetCoordsType) => {
      setCoords(coords);
      setAddress(address);
    },
    []
  );

  return (
    <div className="w-[1000px]">
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="rounded-full bg-violet-600 p-4 text-center text-white hover:bg-violet-800">
            <div className="line-clamp-1">
              {address || "Choose the location"}
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-6xl p-3">
          <DialogHeader className="w-full p-0">
            <DialogTitle className="flex items-center justify-between ">
              <div className="line-clamp-1 pr-4">
                {address || "Choose the location"}
              </div>
              <DialogClose asChild>
                <Button onClick={handleClickSetURLParams}>Get Weather</Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>

          <Map location={location} onClickSetCoords={handleClickSetCoords} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapContainer;
