// import { useSelector } from "react-redux";
// import AuthNav from "../AuthNav/AuthNav";
import AppBar from "../AppBar/AppBar";
// import UserMenu from "../UserMenu/UserMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
