import { createSlice } from '@reduxjs/toolkit';
import { getColis ,createColis,deleteColis} from '../actions/colisActions';




const initialState = {
  colisData: [],
  loading: false,
  error: null,
};
const colisSlice = createSlice({
    name: 'colis',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getColis.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getColis.fulfilled, (state, action) => {
          state.loading = false;
          state.colisData = action.payload;
        })
        .addCase(getColis.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(createColis.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createColis.fulfilled, (state, action) => {
          state.loading = false;
          state.colisData.push(action.payload); // Assuming the payload contains the new colis object
      })
      .addCase(createColis.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
      })
        .addCase(deleteColis.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
          .addCase(deleteColis.fulfilled, (state, action) => {
            state.loading = false;
            // Remove the deleted colis from the state
            state.colisData = state.colisData.filter((colis) => colis.id !== action.payload.id);
        })
          .addCase(deleteColis.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    },
  });
export default colisSlice.reducer;


