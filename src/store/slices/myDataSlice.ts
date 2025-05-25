"use client"; 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// * ########## Start the block of Data
export interface MyDataState {
    myData: string;
    isToggle: boolean;
    name: string;
    email: string;
    isCreate: boolean;
}

const initialState: MyDataState = {
    myData: 'Hi from my data',
    isToggle: false,
    name: '',
    email: '',
    isCreate: false,
};
// * ########## End the block of Data
// * ########## Start Data Manibulation
export const myDataSlice = createSlice({
    name: 'myData',
    initialState,
    reducers: {
        setMyData: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
    },
},
});
// * ########## End Data Manibulation

export const { setMyData } = myDataSlice.actions;
export default myDataSlice.reducer;
