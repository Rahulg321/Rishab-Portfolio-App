import GalleryImageCard from "@/components/GalleryImageCard";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
/**
 * Props for `PhotoIndex`.
 */
export type PhotoIndexProps = SliceComponentProps<Content.PhotoIndexSlice>;

/**
 * Component for "PhotoIndex" Slices.
 */
const PhotoIndex = ({ slice }: PhotoIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <div className="big-container">
        <div className="grid grid-cols-3">
          {slice.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <PrismicNextImage field={item.galleryimage} />
              </React.Fragment>
            );
          })}
          {slice.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <PrismicNextImage field={item.galleryimage} />
              </React.Fragment>
            );
          })}
          {slice.items.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <PrismicNextImage field={item.galleryimage} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhotoIndex;
