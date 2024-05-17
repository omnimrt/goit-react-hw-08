import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header>
        <AppBar />
      </header>
      <main className={css.main}>{children}</main>
    </div>
  );
};

export default Layout;
