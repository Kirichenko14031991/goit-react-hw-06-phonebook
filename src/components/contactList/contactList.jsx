import { useSelector,  } from 'react-redux';
import ContactItem from '../contactItem/contactItem';
import { ListContainer } from './contactList.styled';


const ContactList = () => {
  
  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
 

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name && contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ListContainer>
      {filteredContacts.map( contact =>  (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
         
        />
      ))}
    </ListContainer>
  );
};
export default ContactList;
