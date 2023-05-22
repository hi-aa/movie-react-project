import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./routes/Home";
import Detail from "./routes/Movie/Detail";
import List from "./routes/Movie/List";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.App}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<Detail />}/>
          <Route path="/movie/list" element={<List />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
