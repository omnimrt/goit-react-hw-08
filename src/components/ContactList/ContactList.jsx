import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";

const ContactList = ({ users, onUserDelete }) => {
  const filteredContacts = useSelector(selectNameFilter);
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
