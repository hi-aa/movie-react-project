import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <a class="navbar-brand" href="#">
          Top navbar
        </a> */}

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Movie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/menu1"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Menu1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/weather"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Weather
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
