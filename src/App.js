import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import AdminRoutes from "./adminRoutes";
import { createBrowserHistory } from "history";
import "./assets/styles/styles.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import moduleName from "module";

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
