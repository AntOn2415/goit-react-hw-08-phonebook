import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import  Filter  from '../components/Filter';
import ContactList  from '../components/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { isLoadingSelector } from 'redux/selectors';
import { fetchContacts } from 'redux/operations/contactsOperations';

export default function ContactsPage () {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
