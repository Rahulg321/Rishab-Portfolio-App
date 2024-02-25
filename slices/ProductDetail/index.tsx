import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProductDetail`.
 */
export type ProductDetailProps =
  SliceComponentProps<Content.ProductDetailSlice>;

/**
 * Component for "ProductDetail" Slices.
 */
const ProductDetail = ({ slice }: ProductDetailProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for product_detail (variation: {slice.variation})
      Slices
      {slice.primary.name}
    </section>
  );
};

export default ProductDetail;
