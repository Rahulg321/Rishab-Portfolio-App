import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

type GalleryImageCardProps = {
  galleryimage: ImageField;
};

const GalleryImageCard = ({ galleryimage }: GalleryImageCardProps) => {
  return (
    <div>
      GalleryImageCard
      <PrismicNextImage field={galleryimage} />
    </div>
  );
};

export default GalleryImageCard;
