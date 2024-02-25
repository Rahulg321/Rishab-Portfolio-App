import React from "react";
import { Skeleton } from "./ui/skeleton";

const LoadingSkeletonProductCard = () => {
  return (
    <div className="">
      <Skeleton className="h-[200px] w-[350px]" />
    </div>
  );
};

export default LoadingSkeletonProductCard;
