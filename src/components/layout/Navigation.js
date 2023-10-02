import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navigation({ setQuery }) {
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e) => {
    setQuery(keyword);
  };

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
        List
      </NavLink>
      <NavLink
        to="/menu1"
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Menu1
      </NavLink>

      <div className={styles["search-container"]}>
        <form onKeyDown={onSubmit}>
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Movie Title, Actor, Director"
            autoComplete="off"
          />
          <button onClick={onSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Navigation;
