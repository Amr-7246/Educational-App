"use client";  
import { createSlice } from '@reduxjs/toolkit';

// * ########## Start the block of Data
interface FilterState {
    isToggle: boolean;
}

const initialState: FilterState = {
    isToggle: true,
};
// * ########## End the block of Data


// * ########## Start Data Manibulation
const filterSlice = createSlice({
  name: 'filter',
  initialState,
    reducers: {
    toggleFilter: (state) => {
        state.isToggle = !state.isToggle;
    },
    },
});
// * ########## End Data Manibulation

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;


