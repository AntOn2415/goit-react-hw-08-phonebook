import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactModals: {},
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      const contactId = action.payload;
      state.contactModals[contactId] = true;
      state.isModalOpen = true;
    },
    closeModal(state, action) {
      const contactId = action.payload;
      state.contactModals[contactId] = false;
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
