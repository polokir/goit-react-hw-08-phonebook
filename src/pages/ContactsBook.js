import { selectIsRefreshing } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/operations';
import { IsLoading, filteredContacts } from 'redux/selectors';
import { ContactText, Container, TitileContact } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

const ContactsBook = () => {
  const loader = useSelector(IsLoading);
  const filteredContactsList = useSelector(filteredContacts);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    if (!isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshing]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <TitileContact>Contacts</TitileContact>
      <Filter />
      {loader ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : (
        <ContactList />
      )}
      {!filteredContactsList.length && !loader && (
        <ContactText>No contacts</ContactText>
      )}
    </Container>
  );
};

export default ContactsBook;
