import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../../services/apiConfig';

export const generatePdf = createAsyncThunk(
  'pdf/generatePdf',
  async ({ idDest, idUser, idColis }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/pdf/${idDest}/${idUser}/${idColis}/createpdf`
      );
      return response.data; // Assuming the response contains the PDF data
    } catch (error) {
      throw new Error('Failed to generate PDF');
    }
  }
);
