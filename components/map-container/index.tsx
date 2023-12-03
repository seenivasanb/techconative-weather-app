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

type MapContainerProps = {
  onSetURLParams: (coords: LocationType) => void;
};

const MapContainer = ({ onSetURLParams }: MapContainerProps) => {
  const [coords, setCoords] = useState<LocationType>({});

  const handleClickSetURLParams = useCallback(() => {
    if (coords.latitude && coords.longitude) {
      onSetURLParams(coords);
    }
  }, [coords, onSetURLParams]);

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="rounded-full bg-violet-600 p-4 text-center text-white hover:bg-violet-800">
            Chennai, Tamilnadu, India
          </div>
        </DialogTrigger>
        <DialogContent className="w-full p-3">
          <DialogHeader className="w-full p-0">
            <DialogTitle className="flex w-full items-center justify-between">
              <div className=""> Choose the location</div>
              <DialogClose asChild>
                <Button onClick={handleClickSetURLParams}>Get Weather</Button>
              </DialogClose>
            </DialogTitle>
          </DialogHeader>

          <Map onSetCoords={setCoords} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapContainer;
