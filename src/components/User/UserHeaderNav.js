import { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useMedia from "../../Hooks/useMedia";
import { ReactComponent as MyPhotos } from "../../Assets/feed.svg";
import { ReactComponent as StatsSvg } from "../../Assets/estatisticas.svg";
import { ReactComponent as SendPhoto } from "../../Assets/adicionar.svg";
import { ReactComponent as BtnLogout } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <MyPhotos />
          {mobile && "My Photos"}
        </NavLink>
        <NavLink to="/account/stats">
          <StatsSvg />
          {mobile && "Stats"}
        </NavLink>
        <NavLink to="/account/post">
          <SendPhoto />
          {mobile && "Add Photo"}
        </NavLink>
        <button onClick={userLogout}>
          <BtnLogout />
          {mobile && "Log out"}
        </button>
      </nav>
    </>
  );
};
export default UserHeaderNav;
