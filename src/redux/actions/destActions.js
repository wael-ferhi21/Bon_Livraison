import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import BASE_URL from '../../services/apiConfig';
// Create an async thunk to fetch all destinataires
export const fetchDestinataires = createAsyncThunk(
    'destinataires/fetchDestinataires',
    async () => {
      try {
        const response = await axios.get(`${BASE_URL}/destinataires/getAllDest`);
        return response.data;
      } catch (error) {
        throw Error('Failed to fetch destinataires');
      }
    }
  );
    // Create an async thunk to create a dest
    export const createDestinataire = createAsyncThunk(
      'destinataires/createDestinataire',
      async (destinataireData) => {
          try {
              const response = await axios.post(`${BASE_URL}/destinataires/createDest`, destinataireData);
              return response.data; // Assuming the response contains the newly created destinataire object
          } catch (error) {
              throw new Error('Failed to create destinataire');
          }
      }
  );
  export const getDestinataireById = createAsyncThunk(
    'destinataires/getDestinataireById',
    async (id) => {
      try {
        const response = await axios.get(`${BASE_URL}/destinataires/${id}/getDestinataire`);
        return response.data;
      } catch (error) {
        throw Error('Failed to get destinataire by ID');
      }
    }
  );