import {  createSlice } from '@reduxjs/toolkit';
import { createBl,deleteBl,fetchBl,fetchBlById } from '../actions/blActions';

// Define the initial state
const initialState = {
    bls: [],
    loading: false,
    error: null,
  };

  const blSlice = createSlice({
    name: 'bl',
    initialState,
    reducers: {
    //
    },
    extraReducers: (builder) => {
      // Reducer for createBl
      builder.addCase(createBl.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(createBl.fulfilled, (state, action) => {
        state.loading = false;
        state.bls.push(action.payload);
      });
      builder.addCase(createBl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  
      // Reducer for fetchBl
      builder.addCase(fetchBl.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchBl.fulfilled, (state, action) => {
        state.loading = false;
        state.bls = action.payload;
      });
      builder.addCase(fetchBl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      // Reducer for fecthBl by id
      builder.addCase(fetchBlById.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchBlById.fulfilled, (state, action) => {
        state.loading = false;
        state.bls.push(action.payload);
      });
      builder.addCase(fetchBlById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      // Reducer for delete bl
  
      builder.addCase(deleteBl.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(deleteBl.fulfilled, (state, action) => {
        state.loading = false;
        state.bls = state.bls.filter((bl) => bl.id !== action.payload);
      });
      builder.addCase(deleteBl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    },
  });
  

  export default blSlice.reducer;
