import React from "react";
import { Fragment } from "react";
import { Switch } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import Layout from "./components/layouts/layout";
import { Home } from "./pages/Home";
import Durem from "./pages/Durem";
// import NotFound from "./Pages/NotFound";
import RouteWithLayout from "./RouteWithLayout";

const Routes = () => {
  //   const ctx = useContext(GlobalContext);
  return (
    <Fragment>
      <Switch>
        <RouteWithLayout component={Home} exact layout={Layout} path="/" />
        <RouteWithLayout
          component={Durem}
          exact
          layout={Layout}
          path="/durem"
        />
        <RouteWithLayout
          component={Durem}
          exact
          layout={Layout}
          path="/durem/:id"
        />

        {/* <RouteWithLayout component={Home} exact layout={Layout} path="/home" /> */}

        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </Fragment>
  );
};

export default Routes;
