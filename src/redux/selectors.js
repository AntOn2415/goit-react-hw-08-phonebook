import { createSelector } from '@reduxjs/toolkit';

export const contactsSelector = state => state.contacts.items;


const memoizedContactsSelector = createSelector(contactsSelector, contacts =>
  [...contacts].sort((a, b) => a.name.localeCompare(b.name))
);

export const isLoadingSelector = state => state.contacts.isLoading;

export const errorSelector = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const memoizedFilteredContactsSelector = createSelector(
  [memoizedContactsSelector, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.trim().toLowerCase();
    
    if (normalizedFilter.length === 1) {
      const filteredByFirstChar = contacts.filter(
        contact => contact.name.charAt(0).toUpperCase() === normalizedFilter.toUpperCase()
      );

      return filteredByFirstChar.sort((a, b) => a.name.localeCompare(b.name));
    }

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter)
    );
  }
);

export const uniqueFirstLettersContactsSelector = createSelector(
  [memoizedFilteredContactsSelector],
  filteredContacts => {
    const firstLetters = {};

    filteredContacts.forEach(contact => {
      const firstLetter = contact.name.charAt(0).toUpperCase();
      if (!firstLetters[firstLetter]) {
        firstLetters[firstLetter] = contact.id;
      }
    });

    return Object.values(firstLetters);
  }
);

