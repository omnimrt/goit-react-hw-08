import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectIsLoading } from "../../redux/contacts/selectors";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContacts = contacts.filter(
  //   (contact) =>
  //     contact.name &&
  //     contact.name.toLowerCase().includes((filter || "").toLowerCase())
  // );

  const onAddUser = (formData) => {
    dispatch(addContact(formData));
  };

  // const onUserDelete = (id) => {
  //   dispatch(deleteContact(id));
  // };

  const onChangeFilter = (event) => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <br />
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onChangeFilter={onChangeFilter} />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
