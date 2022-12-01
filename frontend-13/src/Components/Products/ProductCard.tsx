import { useState } from "react";
import {
  Product,
  ProductImage,
  ProductMetaWrapper,
  ProductFavButton,
  ProductActionButton,
  ProductAddToCart,
  ProductActionsWrapper
} from "../../styles/products";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
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
      {/* <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={image} />
        <ProductMetaWrapper>
        <Typography variant={"h6"} lineHeight={2}>
          {name}
        </Typography>
        <Typography variant={"caption"}>
          ${price}
        </Typography>
        </ProductMetaWrapper>
        <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
      
      </Product> */}



      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart show={showOptions} variant="contained">
            Add to cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper shows={showOptions}>
          <Stack direction={"column"}>
            <ProductActionButton>
              <Tooltip placement="left" title="share this product">
                <ShareIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
            <ProductActionButton 
            // onClick={() => showProductDetailDialog()}
            >
              <Tooltip placement="left" title="Full view">
                <FitScreenIcon color="primary" />
              </Tooltip>
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>

      </Product>
      <ProductMetaWrapper>
        <Typography variant={"h6"} lineHeight={2}>
          {name}
        </Typography>
        <Typography variant={"caption"}>
          ${price}
        </Typography>
        </ProductMetaWrapper>

      {/* <ProductDetailDialog product={product} /> */}

    </>
  );
}