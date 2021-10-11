import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import AdminRoutes from "./adminRoutes";
import { createBrowserHistory } from "history";
import "./assets/styles/styles.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// const store = createStore(rootReducer, applyMiddleware(thunk));
// store.dispatch(fetchCategories());
const browserHistory = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Routes />
        <AdminRoutes />
      </Router>
    </Provider>
  );
}

export default App;
