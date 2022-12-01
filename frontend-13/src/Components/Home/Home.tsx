import { useState } from 'react';
import { Typography, Link, Container,Box } from "@mui/material";
import Banner from "./Banner";
import Promotions from "./Promotions";
import Products from "../Products/Products";
import Footer from "./Footer";
import Cart from "../Cart/Cart";

export type CartItemType = {
  id: number;
  name: string;
  price: number;
  // category: string;
  description: string;
  image: string;
  amount: number;
};


function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const getTotalItems = (items: CartItemType[]) =>
  items.reduce((ack: number, item) => ack + item.amount, 0);

const handleAddToCart = (clickedItem: CartItemType) => {
  setCartItems(prev => {
    // 1. Is the item already added in the cart?
    const isItemInCart = prev.find(item => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map(item =>
        item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
    }
    // First time the item is added
    return [...prev, { ...clickedItem, amount: 1 }];
  });
};

const handleRemoveFromCart = (id: number) => {
  setCartItems(prev =>
    prev.reduce((ack, item) => {
      if (item.id === id) {
        if (item.amount === 1) return ack;
        return [...ack, { ...item, amount: item.amount - 1 }];
      } else {
        return [...ack, item];
      }
    }, [] as CartItemType[])
  );
};



  return (
    <div>
       <Promotions/>
      <Banner/>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Trending Products</Typography>
            </Box>
      <Products/>
      <Footer/>
      <Cart
       cartOpen={cartOpen}
       setCartOpen={setCartOpen}
       cartItems={cartItems}
       addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart}
      />
    </div>
  );
}

export default Home;