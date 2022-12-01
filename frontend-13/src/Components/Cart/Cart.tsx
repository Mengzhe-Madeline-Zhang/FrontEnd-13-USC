import { Drawer } from "@mui/material";
import {Colors} from "../../styles/theme";
import {CartItemType} from "../Home/Home";
import CartItem from "./CartItem";

type Props = {
    cartOpen:boolean;
    setCartOpen:(cartOpen: boolean)=>void;
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
  };

const Cart: React.FC<Props>=({cartOpen, setCartOpen, cartItems, addToCart, removeFromCart})=>{

    const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

return(
    <Drawer open={cartOpen} onClose={() => setCartOpen(false)}
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
    {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Drawer>
)
  
}
export default Cart;