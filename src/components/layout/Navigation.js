import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navigation({setQuery, onSearch}) {
  // submit
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(cnt => ++cnt);
  }
  const onCheckEnter = (e) => {
    if(e.key === 'Enter') {
      onSubmit(e);
    }
  }

  return (
    <div className={styles.topnav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null)}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => (isActive ? styles.active : null)}>List</NavLink>

      <div className={styles['search-container']}>
        <form onSubmit={onSubmit} onKeyDown={onCheckEnter}>
          <input type="text"
            onChange={e => setQuery(e.target.value)}
            placeholder="Search Movie Title, Actor, Director"
            autoComplete="off" />
          <button onClick={onSubmit}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  );
}

export default Navigation;