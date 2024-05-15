import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  // const dispatch = useDispatch();
  const { user } = useSelector(selectUser);
  console.log(user);
  return (
    <div>
      <p>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </div>
  );
};

export default UserMenu;
