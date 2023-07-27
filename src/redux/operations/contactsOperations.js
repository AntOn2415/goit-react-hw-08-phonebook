import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const res = await axios.get(`/contacts`);

      const existingNameContact = res.data.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (existingNameContact) {
        throw new Error(
          `Sorry. A contact with the name ${name} already exists.`
        );
      }

      const existingPhoneContact = res.data.find(
        contact => contact.number === number
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
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get(`/contacts`);

      const existingNameContact = res.data.find(
        contact =>
          contact.id !== data.id &&
          contact.name.toLowerCase() === data.name.toLowerCase()
      );

      if (existingNameContact) {
        throw new Error(
          `Sorry. A contact with the name ${data.name} already exists.`
        );
      }

      const existingPhoneContact = res.data.find(
        contact => contact.id !== data.id && contact.number === data.number
      );

      if (existingPhoneContact) {
        throw new Error(
          `Sorry. A contact with the phone number ${data.number} already exists.`
        );
      }

      const patchResponse = await axios.patch(`/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });

      return patchResponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
