import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsPersonPlus, BsTelephonePlus } from 'react-icons/bs';
import { editContact } from 'redux/operations/contactsOperations';
import { isLoadingSelector } from 'redux/selectors';
import {
  FormContainer,
  Form,
  IconWrapper,
  LabelForm,
  LabelSpan,
  InputForm,
  BtnForm,
} from './ContactFormEdit.styled';
import { closeModal } from '../../redux/slices/modalSlice';

function ContactFormEdit({contact}) {
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value.replace(/(^|\s)\S/g, match => match.toUpperCase()));
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleEditContact = async (e) => {
    e.preventDefault();
  
    try {
      const patchResponse = await dispatch(editContact({ id: contact.id, name, number }));
  
      if (patchResponse.meta.requestStatus === 'fulfilled') {
        dispatch(closeModal(contact.id));
      }
      setName('');
      setNumber('');
    } catch (error) {
      console.error('Failed to edit contact:', error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleEditContact}>
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
            placeholder={contact.name}
            onChange={handleChange}
          />
        </LabelForm>
        <LabelForm>
          <IconWrapper>
            <BsTelephonePlus />
          </IconWrapper>
          <LabelSpan>Number</LabelSpan>
          <InputForm
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder={contact.number}
            onChange={handleChange}
          />
        </LabelForm>

        <BtnForm type="submit" isLoading={isLoading} disabled={isLoading}>
          Edit contact
        </BtnForm>
      </Form>
    </FormContainer>
  );
}

export default ContactFormEdit;
