import LoadingSkeletonProductCard from "@/components/LoadingSkeletonProductCard";
import ProductList from "@/components/ProductList";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `ProductIndex`.
 */
export type ProductIndexProps = SliceComponentProps<Content.ProductIndexSlice>;

/**
 * Component for "ProductIndex" Slices.
 */
const ProductIndex = ({ slice }: ProductIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space px-6"
    >
      <h2>All Products</h2>
      <div className="flex">
        <div className="basis-1/4">
          <span>Sort By</span>
        </div>
        <div className="flex-1">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <LoadingSkeletonProductCard />
                <LoadingSkeletonProductCard />
                <LoadingSkeletonProductCard />
                <LoadingSkeletonProductCard />
                <LoadingSkeletonProductCard />
                <LoadingSkeletonProductCard />
              </div>
            }
          >
            <ProductList />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default ProductIndex;
