import logo from "../../../assets/logo.svg";
import defaultStudent from "../../../assets/profile/defaultStudent.png";
import defaultAdmin from "../../../assets/profile/defaultAdmin.png";
import { AppBarProps, AppBar } from "@material-ui/core";
import styles from "./styles.module.scss";
import { routes } from "../../../routes/RootRouter";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import { LoginRoute } from "../../../routes/routes";

interface Props extends AppBarProps {
  children?: React.ReactNode;
}

const role = localStorage.getItem("user");

const Navbar = (props: Props) => {
  const location = useLocation();
  const logOut = () => {
    localStorage.setItem('user','');
    window.location.href = LoginRoute;
  };

  return (
    <AppBar className={styles.navbar}>
      <img src={logo} className={styles.logo} alt="" />

      <div className={styles.navItems}>
        {routes.slice(0, 2).map((route) => (
          <>
            <Link className={styles.navItem} to={route.path}>
              {route.title}
              <div
                className={
                  location.pathname === route.path
                    ? styles.navItemActive
                    : styles.navItemUnactive
                }
              />
            </Link>
          </>
        ))}

        <img
          src={role === "ROLE_STUDENT" ? defaultStudent : defaultAdmin}
          className={styles.image}
          alt=""
        />

        <div className={styles.topFix}>
          <div className={styles.logOut}>
            <Button onClick={logOut} buttonstyle={"primary"}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
