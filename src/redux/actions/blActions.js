import BASE_URL from '../../services/apiConfig';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';



// Define the async thunk for creating a BL
export const createBl = createAsyncThunk(
  'bl/createBl',
  async ({ idUser, idColis, id, createBlDto }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/bl/${userId}/${colisId}/${destinataireId}/createbl`,
        
        createBlDto
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
  // Define the async thunk for fetching all BLs
  export const fetchBl = createAsyncThunk('bl/fetchBl', async () => {
    const response = await axios.get(`${BASE_URL}/bl`);
    return response.data;
  });
  // fecthing a bl by id
  export const fetchBlById = createAsyncThunk('bl/fetchBlById', async (id) => {
    const response = await axios.get(`${BASE_URL}/bl/${id}`);
    return response.data;
  });

  
  //deleting with an id 
  export const deleteBl = createAsyncThunk('bl/deleteBl', async (id) => {
    await axios.delete(`${BASE_URL}/bl/${id}`);
    return id; // Return the deleted BL ID if successful
  });