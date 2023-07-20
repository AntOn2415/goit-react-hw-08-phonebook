import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



export const register = createAsyncThunk('auth/register', async credentials =>{
  try {
    const {data} = await axios.post('/users/signup', credentials);

    return data;

  } catch (error) {
    
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials =>{
  try {
    const {data} = await axios.post('/users/login', credentials);

    return data;

  } catch (error) {
    
  }
});

export const logOut = createAsyncThunk('auth/logout', async credentials =>{
  try {
    const {data} = await axios.post('/users/logout', credentials);

    return data;

  } catch (error) {
    
  }
});
const authOperations = {
  register,
  logIn,
  logOut,
};

export default authOperations;