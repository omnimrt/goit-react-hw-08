import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa"; // Adjusted for a common icon
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const onUserDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <li className={css.contactItem}>
        <div className={css.userdataContainer}>
          <p className={css.userdata}>
            <FaUser />
            {user.name}
          </p>
          <p className={css.userdata}>
            <FaPhoneAlt />
            {user.number}
          </p>
        </div>
        <button
          className={css.button}
          type="button"
          onClick={() => onUserDelete(user.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
