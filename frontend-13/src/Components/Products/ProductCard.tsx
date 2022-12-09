import { useState, useEffect, useCallback } from "react";
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
import {useAppDispatch, useAppSeletor} from '../../Redux/store.hook';
import {getProductsSelector, Product} from "../../Redux/product.slice";
import { OpenDetail, getDetailStatus } from "../../Redux/showdetailpage.slice";
import ProductDetails from "../product_pages/product_detail";
import {Link} from 'react-router-dom';

export default function ProductCard( product:Product ) {

  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useAppDispatch();
  const handleOpenDetail = (showornot:boolean)=>{dispatch(OpenDetail(showornot))};
  const show = useAppSeletor( getDetailStatus);


  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

const addToCartHander = (product: Product) => dispatch(addToCart(product)); 
// const [detailProduct, setDetailProduct] = useState<Product>({
//   id: 0,
//   name: '',
//   price: 0,
//   description: '',
//   image: ''
// }
// );

// useEffect(() => {
//   setDetailProduct(
//     prevProduct=>(
//       {
//         ...prevProduct,
//         ...product
//       }
//     )
// )}, []);

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
            onClick={()=>{handleOpenDetail(show);}}>
        
              <Tooltip placement="left" title="Full view">
              {/* <Link to={'/${product.id}'}> */}
                <FitScreenIcon color="primary" />
                {/* </Link> */}
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
    
      
        <ProductDetails/>

    </>
  );
}