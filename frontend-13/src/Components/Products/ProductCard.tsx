import { useState } from "react";
import {
  Product,
  ProductImage,
  ProductMetaWrapper,
} from "../../styles/products";
import { Stack, Tooltip, Typography } from "@mui/material";

type ProductType = {
    id: number
    name: string
    price: number
    description: string
    image: string
}

export default function ProductCard({ id, name, price, description, image}: ProductType) {

  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={image} />
        <ProductMetaWrapper>
        <Typography variant={"h6"} lineHeight={2}>
          {name}
        </Typography>
        <Typography variant={"caption"}>
          ${price}
        </Typography>
      </ProductMetaWrapper>
      </Product>

    </>
  );
}