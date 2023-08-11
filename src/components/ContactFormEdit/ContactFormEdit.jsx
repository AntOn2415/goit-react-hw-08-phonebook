import { useState, useEffect } from 'react';
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
import { useThemeContext } from '../../hooks/ThemeContext'; 

function ContactFormEdit({ contact, onCloseModal }) {

  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [isModified, setIsModified] = useState(false);

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

  const handleEditContact = async e => {
    e.preventDefault();

    try {
      const editedName = name.trim() === '' ? contact.name : name;
      const editedNumber = number.trim() === '' ? contact.number : number;

      const patchResponse = await dispatch(
        editContact({ id: contact.id, name: editedName, number: editedNumber })
      );

      if (patchResponse.meta.requestStatus === 'fulfilled') {
        onCloseModal();
      }

      setIsModified(false);
    } catch (error) {
      console.error('Failed to edit contact:', error);
    }
  };

  useEffect(() => {
    if (contact.name !== name || contact.number !== number) {
      setIsModified(true);
    } else {
      setIsModified(false);
    }
  }, [contact, name, number]);

  const isButtonDisabled = name.trim() === '' && number.trim() === '';

  useThemeContext();
  
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
            placeholder={contact.number}
            onChange={handleChange}
          />
        </LabelForm>

        <BtnForm
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || !isModified || isButtonDisabled}
        >
          Edit contact
        </BtnForm>
      </Form>
    </FormContainer>
  );
}

export default ContactFormEdit;
