import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navigation from "./components/layout/Navigation";
import routeLink from "./router";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { loadingState } from "./atom/main-atom";
import Loading from "./components/Loading";

function App() {
  const loading = useRecoilValue(loadingState);
  const [query, setQuery] = useState("");

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className={styles.App}>
          <Navigation setQuery={setQuery} />
          <Routes>
            {routeLink.map((v) => (
              <Route
                path={v.path}
                element={v.element}
                query={query}
                key={v.id}
              />
            ))}
          </Routes>
        </div>
      </Router>
      {loading > 0 && <Loading />}
    </>
  );
}

export default App;
