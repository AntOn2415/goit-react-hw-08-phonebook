import Filter from '../Filter';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';
import { ContactsContainerDiv, ContentContainerDiv } from './Contacts.styled';

export default function Contacts() {

  return (
    <ContactsContainerDiv>
      <ContactForm />
      <ContentContainerDiv> 
      <Filter />
      <ContactList />
      </ContentContainerDiv>
    </ContactsContainerDiv>
  );
}
