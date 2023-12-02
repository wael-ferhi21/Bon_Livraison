import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import BASE_URL from '../../services/apiConfig';


  // Async Thunks for login and registration

  export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await axios.post(`${BASE_URL}/api/login`, { email, password }, config);
  
      // Assuming the response contains necessary user and token data
      const { token, user } = response.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('userId', user.id); // Store userId in localStorage
  
      return response.data;
    } catch (error) {
      // Error handling logic
      return rejectWithValue(error.response.data.message || 'Login failed');
    }
  });
  
  

  
  export const registerUser = createAsyncThunk('auth/registerUser', async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/register`, userData);
      return response.data; // Assuming the response contains necessary user and token data
    } catch (error) {
      return rejectWithValue(error.response.data); // Use rejectWithValue to handle rejection with custom data
    }
  });
  