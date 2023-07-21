import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);

      const existingNameContact = response.data.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingNameContact) {
        throw new Error(
          `Sorry. A contact with the name ${name} already exists.`
        );
      }

      const existingPhoneContact = response.data.find(
        contact => contact.phone === number
      );

      if (existingPhoneContact) {
        throw new Error(
          `Sorry. A contact with the phone number ${number} already exists.`
        );
      }

      const createResponse = await axios.post('/contacts', { name, number });
      return createResponse.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
