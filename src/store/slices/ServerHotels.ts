
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Hotel } from '../types/index';

// export const fetchHotels = createAsyncThunk('hotels/fetchHotels', async () => {
//     const response = await axios.get<Hotel[]>('http://localhost:5000/api/hotels');
//     return response.data;
// });

// interface HotelsState {
//     hotels: Hotel[];
//     loading: boolean;
//     error: string | null;
// }

// const initialState: HotelsState = {
//     hotels: [],
//     loading: false,
//     error: null,
// };

// const hotelsSlice = createSlice({
//     name: 'hotels',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchHotels.pending, (state) => {
//             state.loading = true;
//             state.error = null;
//         });
//         builder.addCase(fetchHotels.fulfilled, (state, action) => {
//             state.loading = false;
//             state.hotels = action.payload;
//         });
//         builder.addCase(fetchHotels.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message || 'Error fetching hotels';
//         });
// },
// });

// export default hotelsSlice.reducer;
