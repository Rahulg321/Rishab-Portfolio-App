import React from "react";
import LoadingSpinner from "@/components/loadingSpinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center text-7xl">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
