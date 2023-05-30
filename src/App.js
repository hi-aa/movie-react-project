import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./routes/Home";
import Detail from "./routes/Movie/Detail";
import List from "./routes/Movie/List";
import Navigation from "./components/layout/Navigation";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState(''); // 검색어
  const [search, onSearch] = useState(1); // 동일한 검색어로 검색 재실행되도록 하기 위해 추가함

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={styles.App}>
        <Navigation setQuery={setQuery} onSearch={onSearch} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies">
            <Route path="" element={<List query={query} search={search} />} />
            <Route path=":id" element={<Detail />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
