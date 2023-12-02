import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import BASE_URL from '../../services/apiConfig';


// Define an async thunk to fetch colis data
export const getColis = createAsyncThunk('colis/getColis', async () => {
    try {
      const response = await axios.get(`${BASE_URL}/colis`); 
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch colis data');
    }
  });
 
  // Create an async thunk to create a colis
  export const createColis = createAsyncThunk('colis/createColis', async (colisData) => {
    try {
        const response = await axios.post(`${BASE_URL}/colis/createcoli`, colisData);
        console.log(response.data);
        return response.data; 
        // Assuming the response contains the newly created colis object
    } catch (error) {
        throw new Error('Failed to create colis');
    }
});
  export const getColisById = createAsyncThunk('colis/getColisById', async (colisId) => {
    try {
      const response = await axios.get(`${BASE_URL}/colis/${colisId}`); 
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch colis data');
    }
  });
  export const deleteColis = createAsyncThunk('colis/deleteColis', async (colisId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/colis/${colisId}`);
      return response.data;
    } catch (error) {
      throw Error('Failed to delete colis');
    }
  });