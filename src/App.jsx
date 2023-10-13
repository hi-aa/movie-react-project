import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/layout/Navigation";
import routeLink from "./router";
import { GlobalLoader } from "./api";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className={styles.App}>
          <Navigation />
          <GlobalLoader />

          <div className={styles.contents}>
            <Routes>
              {routeLink.map((v) => (
                <Route key={v.id} path={v.path} element={v.element} />
              ))}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
