import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Log in | Register
          </Link>
        )}
      </nav>
    </header>
  );
};
export default Header;
