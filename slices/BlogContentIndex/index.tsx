import BlogCard from "@/components/BlogCard";
import LoadingSkeletonProductCard from "@/components/LoadingSkeletonProductCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Suspense } from "react";

/**
 * Props for `BlogContentIndex`.
 */
export type BlogContentIndexProps =
  SliceComponentProps<Content.BlogContentIndexSlice>;

/**
 * Component for "BlogContentIndex" Slices.
 */
const BlogContentIndex = ({ slice }: BlogContentIndexProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="block-space"
    >
      <div className="big-container">
        {slice.primary.heading}
        {slice.primary.tagline}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LoadingSkeletonProductCard />
              <LoadingSkeletonProductCard />
              <LoadingSkeletonProductCard />
            </div>
          }
        >
          <BlogIndex />
        </Suspense>
      </div>
    </section>
  );
};

export default BlogContentIndex;

async function BlogIndex() {
  const client = createClient();
  const blogposts = await client.getAllByType("blogpost");
  return (
    <>
      {blogposts.map((post, index) => {
        return <BlogCard />;
      })}
    </>
  );
}
