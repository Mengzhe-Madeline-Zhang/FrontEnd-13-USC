import Comment from './product_comments';
import Button from '@mui/material/Button';
import {Product}from '../../Redux/product.slice';
import { Dialog, IconButton, Box} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { OpenDetail, getDetailStatus } from "../../Redux/showdetailpage.slice";
import { useAppDispatch, useAppSeletor } from "../../Redux/store.hook";

// type DetailPropsType={
//     product:Product,
// }

export default function ProductDetails(
    props: any
    // detail: Product
    ) {

    const showDetail = useAppSeletor(getDetailStatus);
  const dispatch = useAppDispatch();

    const handleOpenCart = (showornot: boolean) => {
        dispatch(OpenDetail(showornot));
      };

    const reviewSubmitHandler = () => {

    }


    return (
        <>
        <Dialog
        open={showDetail}
        fullScreen
        >
            
<Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
  
>
            <IconButton  onClick={() => handleOpenCart(showDetail)}>
            <CloseIcon />
          </IconButton>
          </Box>

        <div className='product-detail-page'>
            <div className='product-detail-container'>
                <div className='product-detail-thumbnail'>
                    <img 
                    src="/images/bag_01.png"
                    // {product.image} 
                    alt="" />
                </div>
                <div className='product-details'>
                    <div className='product-detail-title-container'><p className='product-detail-title'>Big Pink Bag
              
                        </p></div>
                    <div className='product-details-description-flex'>
                        <div className='product-detail-description-container'>
                            <p className='product-detail-description'>
                                Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>   
                        </div>
                        <div className='product-detail-price-container'>
                            <p className='product-detail-price'>Price: $299.99
                            {/* {product.price} */}
                            </p>    
                        </div>
                    </div>
                    <div>
                        <Button 
                        variant="contained"
                        sx={{ marginRight: '0.2rem'}}
                        >
                            Add to Cart
                        </Button>
                        <Button 
                        sx={{ marginLeft: '0.2rem'}}
                        variant="contained">
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <p className='product-detail-reviews'>Reviews</p>
                <p>No Reviews Yet</p>
                <Comment />
            </div>
            <div className='product-detail-footer'></div>
        </div>
        </Dialog>
        </>
    )
}