import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./routes/Home";
import Detail from "./routes/Movie/Detail";
import Search from "./routes/Movie/Search";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movie/:id" element={<Detail />}/>
          <Route path="/movie/search" element={<Search />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
