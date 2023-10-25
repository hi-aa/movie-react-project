import { useEffect } from "react";
import styles from "./Home.module.css";
import { Tooltip } from "bootstrap";
function Home() {
  // tooltip initialize
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  }, []);

  return (
    <main role="main" className="container">
      <div className={styles.banner}>
        <h1>Navbar example</h1>
        <p className="lead">
          This example is a quick exercise to illustrate how the top-aligned
          navbar works. As you scroll, this navbar remains in its original
          position and moves with the rest of the page.
        </p>
        <a
          className="btn btn-lg btn-primary"
          href="../../components/navbar/"
          role="button"
        >
          View navbar docs »
        </a>

        {/* <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div> */}

        <button
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="tooltip"
          // data-bs-placement="top"
          data-bs-title="Tooltip on top"
        >
          Tooltip on top
        </button>
      </div>
    </main>
  );
}

export default Home;
