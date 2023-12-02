import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk to fetch all destinataires
export const fetchDestinataires = createAsyncThunk(
  'destinataires/fetchDestinataires',
  async () => {
    try {
      const response = await axios.get('/destinataires/getAllDest');
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch destinataires');
    }
  }
);

// Create a slice
const destSlice = createSlice({
  name: 'destinataires',
  initialState: {
    destinataires: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDestinataires.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinataires.fulfilled, (state, action) => {
        state.loading = false;
        state.destinataires = action.payload;
      })
      .addCase(fetchDestinataires.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDestinataires.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDestinataires.fulfilled, (state, action) => {
        state.loading = false;
        state.destinataires = action.payload;
      })
      .addCase(fetchDestinataires.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createDestinataire.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDestinataire.fulfilled, (state, action) => {
        state.loading = false;
        state.destinataires.push(action.payload); // Assuming the payload contains the new destinataire object
    })
    .addCase(createDestinataire.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
  },
});

export default destSlice.reducer;
