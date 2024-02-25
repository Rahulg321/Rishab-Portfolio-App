import {
  Content,
  ImageField,
  KeyTextField,
  NumberField,
  PrismicDocumentWithUID,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  name: KeyTextField;
  product_image: ImageField;
  product_price: NumberField;
};

const ProductCard = ({
  name,
  product_image,
  product_price,
}: ProductCardProps) => {
  return (
    <div>
      <div className="relative aspect-h-1 aspect-w-1">
        <PrismicNextImage
          field={product_image}
          className="object-cover"
          fill
          sizes=""
        />
      </div>
      <div className="flex justify-between items-center">
        <div>{name}</div>
        <div className="text-muted-foreground">{product_price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
