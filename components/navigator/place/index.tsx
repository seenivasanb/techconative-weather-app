import { PlaceType } from "@/types/hooks";
import React from "react";

type PlaceProps = {
  place?: PlaceType;
};

const Place = ({ place }: PlaceProps) => {
  return (
    <>
      <span className="hidden md:block">
        {place?.desktop || "Choose the location"}
      </span>
      <span className="md:hidden">
        {place?.mobile || "Choose the location"}
      </span>
    </>
  );
};

export default Place;
