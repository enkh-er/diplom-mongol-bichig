import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import AdminRoutes from "./adminRoutes";
import { createBrowserHistory } from "history";
import "./assets/styles/styles.min.css";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Routes />
      <AdminRoutes />
    </Router>
  );
}

export default App;
