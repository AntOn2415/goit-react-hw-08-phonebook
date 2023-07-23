import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { BsSearch } from 'react-icons/bs';
import { setFilter } from 'redux/slices/filterSlice';
import {
  FilterSection,
  FilterContainer,
  FilterName,
  LabelP,
  FilterInput,
  IconWrapper,
} from './Filter.styled';
import {
  selectFilter,
  memoizedFilteredContactsSelector,
} from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(memoizedFilteredContactsSelector);

  const isEmptyFilter = filteredContacts.length === 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(filter));
  }, [filter, dispatch]);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterSection>
      <FilterContainer>
      <FilterName>
      <IconWrapper isEmptyFilter={isEmptyFilter}>
        <BsSearch />
      </IconWrapper>
      <LabelP>Find contacts by Name</LabelP>
      <DebounceInput
        element={FilterInput}
        type="text"
        value={filter}
        debounceTimeout={500}
        onChange={onChangeFilter}
        isEmptyFilter={isEmptyFilter}
      />
    </FilterName>
    </FilterContainer>
    </FilterSection>
    
    
  );
};

export default Filter;
