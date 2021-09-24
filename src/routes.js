import React from "react";
import { Fragment } from "react";
import { Switch } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import Layout from "./components/layouts/layout";
import { Home } from "./pages/Home";
// import NotFound from "./Pages/NotFound";
import RouteWithLayout from "./RouteWithLayout";

const Routes = () => {
  //   const ctx = useContext(GlobalContext);
  return (
    <Fragment>
      <Switch>
        <RouteWithLayout component={Home} exact layout={Layout} path="/" />
        {/* <RouteWithLayout component={Home} exact layout={Layout} path="/home" /> */}

        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </Fragment>
  );
};

export default Routes;
