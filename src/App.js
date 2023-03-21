import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Routes importing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Pages Auth
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

// Importing main pages
import Home from "./pages/main/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route Component={Home} exact path="/" />
          <Route Component={Login} path="/login" />
          <Route Component={Register} path="/register" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
