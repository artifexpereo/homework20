import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Registration from "./registration/Registration";
import Authorization from "./authorization/Authorization";

const App = () => {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/authorization" className="header_element">
          Authorization
        </Link>
        <Link to="/registration" className="header_element">
          Registration
        </Link>
      </div>
      <Routes>
        <Route
          path="/registration"
          element={<Registration />}
        />
        <Route
          path="/authorization"
          element={<Authorization />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
