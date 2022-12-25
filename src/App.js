import "./App.css";
import "./css/Main.scss";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Gift from "./pages/Gift";
function App() {
  return (
    <div className="container">
      <div className="gnb">
        {" "}
        <ul>
          <li>
            {" "}
            <Link to="/Letter">Letter</Link>
          </li>
          <li>
            {" "}
            <Link to="/Gift">Gift</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/Writing">Writing a Letter</Link>
          </li>
          <li>
            <Link to="/Camera">Camera</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
