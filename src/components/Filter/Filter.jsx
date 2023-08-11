import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { BsSearch } from 'react-icons/bs';
import { setFilter } from 'redux/slices/filterSlice';
import { LoaderThreeDots } from '../Loader/Loader';
import { useThemeContext } from '../../hooks/ThemeContext'; 
import {
  FilterSection,
  TitleHiddenH2,
  FilterContainer,
  FilterName,
  LabelP,
  FilterInput,
  IconWrapper,
  LoaderContainer,
} from './Filter.styled';
import {
  selectFilter,
  memoizedFilteredContactsSelector,
  isLoadingSelector,
} from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(isLoadingSelector);
  const filteredContacts = useSelector(memoizedFilteredContactsSelector);

  const isEmptyFilter = filteredContacts.length === 0;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilter(filter));
  }, [filter, dispatch]);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const firstChar = filter.trim().charAt(0);

  let label = 'Find contacts by Name or Number';

  if (firstChar !== '') {
    label = isNaN(firstChar)
      ? 'Find contacts by Name'
      : 'Find contacts by Number';
  };
  
useThemeContext();

  return (
    <FilterSection>
      <TitleHiddenH2>Find contacts by Name or Number</TitleHiddenH2>
      <FilterContainer>
        <FilterName>
          <IconWrapper isEmptyFilter={isEmptyFilter}>
            <BsSearch />
          </IconWrapper>
          <LabelP>{label}</LabelP>
          <DebounceInput
            element={FilterInput}
            type="text"
            value={filter}
            debounceTimeout={500}
            onChange={onChangeFilter}
            isEmptyFilter={isEmptyFilter}
          />
        </FilterName>
        <LoaderContainer>
        {isLoading && !isEmptyFilter && <LoaderThreeDots />}
        </LoaderContainer>
      </FilterContainer>
    </FilterSection>
  );
};

export default Filter;


