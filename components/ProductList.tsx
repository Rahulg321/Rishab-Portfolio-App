import { createClient } from "@/prismicio";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const ProductList = async () => {
  const client = createClient();
  const products = await client.getAllByType("product");
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product, index) => {
        return (
          <Link href={`/products/${product.uid}`} key={index}>
            <ProductCard
              name={product.data.name}
              product_image={product.data.image}
              product_price={product.data.price}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
