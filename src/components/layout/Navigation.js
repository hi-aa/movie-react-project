import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { searchState } from "../../atom/main-atom";

function Navigation() {
  const setSearch = useSetRecoilState(searchState);
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e) => {
    setSearch(keyword);
    e.preventDefault();
  };

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      onSubmit(e);
    }
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
        Movie
      </NavLink>
      <NavLink
        to="/menu1"
        className={({ isActive }) => (isActive ? styles.active : null)}
      >
        Menu1
      </NavLink>

      <div className={styles["search-container"]}>
        <form onKeyDown={onCheckEnter}>
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
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
