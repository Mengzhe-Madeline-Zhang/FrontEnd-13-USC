import { RootState } from './store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// export type Show {
//   showCart: boolean;
// }

const initialState: boolean = false;

const showCartSlice = createSlice({
    name:'showCart',
    initialState,
    reducers:{
        OpenCart:(state, action: PayloadAction<boolean>)=>{
            // return [action.payload, ...state]
            return state=!action.payload;
            // state.push(action.payload)
        }
    }
})

export const {OpenCart} = showCartSlice.actions;
export const getCartStatus = (state: RootState)=> state.showCart;
export default showCartSlice.reducer;