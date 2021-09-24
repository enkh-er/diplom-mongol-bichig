import React from "react";
import { Fragment } from "react";
import { Switch } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import Layout from "./components/layouts/layout";
import AdminLayout from "./components/admin/layout/adminLayout";
import { Home } from "./pages/Home";
import Admin from "./pages/Admin";
import AdminLogin from "./components/admin/auth/admin-login";
// import NotFound from "./Pages/NotFound";
import RouteWithLayout from "./RouteWithLayout";

const Routes = () => {
  //   const ctx = useContext(GlobalContext);
  return (
    <Fragment>
      <Switch>
        <RouteWithLayout component={Home} exact layout={Layout} path="/" />
        <RouteWithLayout
          component={Admin}
          exact
          layout={AdminLayout}
          path="/admin-home"
        />
        <RouteWithLayout
          component={AdminLogin}
          exact
          layout={NoLayout}
          path="/admin"
        />
        {/* <RouteWithLayout component={Home} exact layout={Layout} path="/home" /> */}

        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </Fragment>
  );
};

export default Routes;

const NoLayout = (props) => {
  return <div>{props.children}</div>;
};
