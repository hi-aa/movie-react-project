import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <a class="navbar-brand" href="#">
          Top navbar
        </a> */}

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Movie
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to="/menu1"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Menu1
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
