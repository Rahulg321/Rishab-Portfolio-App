import GalleryImageCard from "@/components/GalleryImageCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GalleryHero`.
 */
export type GalleryHeroProps = SliceComponentProps<Content.GalleryHeroSlice>;

/**
 * Component for "GalleryHero" Slices.
 */
const GalleryHero = ({ slice }: GalleryHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        {slice.primary.heading}
        {slice.primary.tagline}
      </div>
    </section>
  );
};

export default GalleryHero;
