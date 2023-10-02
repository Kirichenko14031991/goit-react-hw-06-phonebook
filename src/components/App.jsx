import React from 'react';
import { MainHeader, Header, MainWrap } from './App.styled';
import ContactList from './contactList/contactList';
import Filter from './contactFilter/contactFilter';
import ContactForm from './contactForm/contactForm';

const App = () => {
  return (
    <MainWrap>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <Header>Contacts</Header>
      <Filter />
      <ContactList  />
    </MainWrap>
  );
};

export default App;
