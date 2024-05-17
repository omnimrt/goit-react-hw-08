import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = ({ users, onUserDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) &&
          users.map((user) => {
            return (
              <Contact key={user.id} user={user} onUserDelete={onUserDelete} />
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
