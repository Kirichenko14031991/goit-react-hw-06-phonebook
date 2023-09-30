import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
import {
  ListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './contactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem key={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteButton onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
export default ContactItem;
