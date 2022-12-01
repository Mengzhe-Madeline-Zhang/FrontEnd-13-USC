import { Drawer } from "@mui/material";
import React from "react";
import { getCartProduct, getTotalPrice, removeFromCart } from "../../Redux/cart.slice";
import { OpenCart, getCartStatus } from "../../Redux/showcart.slice";
import { useAppDispatch, useAppSeletor } from "../../Redux/store.hook";
import { ProductBox } from "../../styles/products";
import {Colors} from "../../styles/theme";
import {CartItemType} from "../Home/Home";
import CartItem from "./CartItem";

// type Props = {
//     cartOpen:boolean;
//     setCartOpen:(cartOpen: boolean)=>void;
//     cartItems: CartItemType[];
//     addToCart: (clickedItem: CartItemType) => void;
//     removeFromCart: (id: number) => void;
//   };

const Cart: React.FC=({
  // cartOpen, setCartOpen, cartItems, addToCart, removeFromCart
})=>{

    // const calculateTotal = (items: CartItemType[]) =>
    // items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  

    const cartProducts = useAppSeletor(getCartProduct);
    const totalPrice = useAppSeletor(getTotalPrice);
    const show = useAppSeletor(getCartStatus);
    const dispatch = useAppDispatch();

    const handleRemoveFromCart = (productId: number)=>dispatch(removeFromCart(productId));
    // const closeChart=() => dispatch(OpenCart);
    const handleOpenCart = (showornot:boolean)=>{dispatch(OpenCart(showornot))};

return(
  <>
  {console.log(getCartStatus)}
    <Drawer
     open={ show } 
    onClose={() => handleOpenCart(show) }
    anchor="right"
    PaperProps={{

        sx:{
            width:500,
            background: Colors.light_gray,
            borderRadius:0
        }
    }
    }
    >
      
    <h1>
        My Cart 
    </h1>
    {/* {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2> */}

      <h5>{totalPrice}</h5>
      {cartProducts.map(product=>(
        <React.Fragment key={product.id}>
        
        <span>{product.name}</span>
        <span>{product.amount}</span>
        <button onClick={()=> handleRemoveFromCart(product.id)}> Remove </button>
     
        </React.Fragment>
    
      ))}
  
        </Drawer>
        </>
)
  
}
export default Cart;