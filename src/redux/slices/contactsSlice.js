import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from '../operations/contactsOperations';
import {
  handlePending,
  handleRejected,
  handleFulfilledOnFetchContacts,
  handleFulfilledOnAddContact,
  handleFulfilledOnDeleteContact,
  handleFulfilledOnEditContact,
} from './contactsHandlers';

const defaultsStatus = {
  pending: 'pending',
  rejected: 'rejected',
};

const actionFunctions = [fetchContacts, addContact, deleteContact, editContact];

const getActionFunctionsByStatus = status =>
  actionFunctions.map(el => el[status]);

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
  errorEdit: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    resetContacts: state => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.errorEdit = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledOnFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledOnAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledOnDeleteContact)
      .addCase(editContact.fulfilled, handleFulfilledOnEditContact)
      .addMatcher(
        isAnyOf(...getActionFunctionsByStatus(defaultsStatus.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionFunctionsByStatus(defaultsStatus.rejected)),
        handleRejected
      );
  },
});
export const { resetContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
