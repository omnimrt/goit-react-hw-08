import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <div>
      <ul className={css.contactList}>
        {Array.isArray(filteredContacts) &&
          filteredContacts.map((user) => {
            return <Contact key={user.id} user={user} />;
          })}
      </ul>
    </div>
  );
};

export default ContactList;
