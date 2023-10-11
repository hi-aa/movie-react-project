import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.topnav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Movie
      </NavLink>
      <NavLink
        to="/menu1"
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Menu1
      </NavLink>
    </div>
  );
}

export default Navigation;
