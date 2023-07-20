import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../operations/contactsOperations';
import {
  handlePending,
  handleRejected,
  handleFulfilledOnFetchContacts,
  handleFulfilledOnAddContact,
  handleFulfilledOnDeleteContact,
  handleToggleContactActions,
  handleCloseContactActions,
  handleCloseAllContactActions,
} from './contactsHandlers';

const defaultsStatus = {
  pending: 'pending',
  rejected: 'rejected',
};

const actionFunctions = [fetchContacts, addContact, deleteContact];

const getActionFunctionsByStatus = status =>
  actionFunctions.map(el => el[status]);

const contactInitialState = {
  items: [],
  isLoading: false,
  error: null,
  isActionsContainerOpen: {}, 
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    toggleContactActions: handleToggleContactActions,
    closeContactActions: handleCloseContactActions,
    closeAllContactActions: handleCloseAllContactActions,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledOnFetchContacts)
      .addCase(addContact.fulfilled, handleFulfilledOnAddContact)
      .addCase(deleteContact.fulfilled, handleFulfilledOnDeleteContact)
      .addMatcher(
        isAnyOf(...getActionFunctionsByStatus(defaultsStatus.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getActionFunctionsByStatus(defaultsStatus.rejected)),
        handleRejected
      )  
  },
});

export const contactsReducer = contactsSlice.reducer;


