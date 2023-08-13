import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from '@react-hook/media-query';
import { BsPersonPlus } from 'react-icons/bs';
import { addContact } from 'redux/operations/contactsOperations';
import { isLoadingSelector } from 'redux/selectors';
import { useThemeContext } from '../../hooks/ThemeContext';
import {
  TitleHiddenH2,
  FormContainer,
  Form,
  IconWrapper,
  LabelForm,
  LabelSpan,
  InputForm,
  StyledPhoneInput,
  BtnForm,
} from './ContactForm.styled';

import RecentlyAddedContacts from '../RecentlyAddedContacts';

function ContactForm() {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value.replace(/(^|\s)\S/g, match => match.toUpperCase()));
    }
  };

  const handleAddContact = e => {
    e.preventDefault();

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const isButtonDisabled = name.trim() === '' || number === '';

  useThemeContext();

  return (
    <section>
      <TitleHiddenH2>Add contact</TitleHiddenH2>
      <FormContainer>
        <Form onSubmit={handleAddContact}>
          <LabelForm>
            <IconWrapper>
              <BsPersonPlus />
            </IconWrapper>
            <LabelSpan>Name</LabelSpan>
            <InputForm
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-ЯґҐєЄіІїЇ]+(([' \-][a-zA-Zа-яА-ЯґҐєЄіІїЇ ])?[a-zA-Zа-яА-ЯґҐєЄіІїЇ]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              onChange={handleChange}
            />
          </LabelForm>
          <LabelForm>
            <LabelSpan>Number</LabelSpan>
            <StyledPhoneInput
              defaultCountry="UA"
              placeholder="Enter phone number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={setNumber}
            />
          </LabelForm>

          <BtnForm
            type="submit"
            isLoading={isLoading}
            disabled={isLoading || isButtonDisabled}
          >
            Add contact
          </BtnForm>
        </Form>

        {isLargeScreen && <RecentlyAddedContacts />}
      </FormContainer>
    </section>
  );
}

export default ContactForm;
