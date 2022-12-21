import { RootState } from './store';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: boolean = false;

const showDetailSlice = createSlice({
    name:'showDetail',
    initialState,
    reducers:{
        OpenDetail:(state, action: PayloadAction<boolean>)=>{
            return state=!action.payload;
        }
    }
})

export const {OpenDetail} = showDetailSlice.actions;
export const getDetailStatus = (state: RootState)=> state.showDetail;
export default showDetailSlice.reducer;
//export{}