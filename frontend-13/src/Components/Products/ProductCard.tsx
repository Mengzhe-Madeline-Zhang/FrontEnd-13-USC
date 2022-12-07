import { useState } from "react";
import {
  ProductBox,
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
import { addToCart } from "../../Redux/cart.slice";
import {useAppDispatch} from '../../Redux/store.hook';
import {getProductsSelector, Product} from "../../Redux/product.slice"

export default function ProductCard(

  product:Product
  ) {

  const [showOptions, setShowOptions] = useState(false);

  const dispatch = useAppDispatch();

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

 const addToCartHander = (product: Product) => dispatch(addToCart(product)); 

  return (
    <>

      <ProductBox onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions ? (
          <ProductAddToCart show={showOptions} variant="contained"
          onClick={()=>addToCartHander(product)}>
            Add to cart
          </ProductAddToCart>
        ): undefined}
        <ProductActionsWrapper show={showOptions}>
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

      </ProductBox>
      <ProductMetaWrapper>
        <Typography variant={"h6"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={"caption"}>
          ${product.price}
        </Typography>
        </ProductMetaWrapper>

      {/* <ProductDetailDialog product={product} /> */}

    </>
  );
}