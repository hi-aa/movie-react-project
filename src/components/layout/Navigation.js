import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const onSubmit = (event) => {
    event.preventDefault();

    alert("not developed")
    return false;
  }
  return (
    <div className={styles.topnav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : null)}>List</NavLink>

      <div className={styles['search-container']}>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Search movies" autoComplete="off" />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  );
}

export default Navigation;