import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { apiLogout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(apiLogout());
  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome, {user.name}!</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
