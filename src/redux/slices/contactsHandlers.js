import { toast } from 'react-toastify';

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledOnFetchContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

export const handleFulfilledOnAddContact = (state, { payload }) => {
  const { id, name, number } = payload;

  state.isLoading = false;
  state.error = null;
  state.items.push({ id, name, number });
  toast.success(`Contact ${name} : ${number} added successfully`);
};

export const handleFulfilledOnDeleteContact = (state, { payload }) => {
  const { id, name, number } = payload;
  const updatedItems = state.items.filter(contact => contact.id !== id);
  toast.success(`Contact ${name} : ${number} deleted successfully`);
  return {
    ...state,
    isLoading: false,
    items: updatedItems,
  };
};

