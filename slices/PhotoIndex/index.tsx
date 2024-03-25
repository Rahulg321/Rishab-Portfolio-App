import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      Placeholder component for photo_index (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PhotoIndex;
