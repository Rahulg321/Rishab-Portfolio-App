import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import CartSheet from "@/components/cart-sheet";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=""
    >
      <h1 className="text-red-400">{slice.primary.heading}</h1>
      <h3>{slice.primary.tagline}</h3>
      <CartSheet />
    </section>
  );
};

export default Hero;
