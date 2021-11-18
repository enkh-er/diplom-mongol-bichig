import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import Layout from "./components/layouts/layout";
import { Home } from "./pages/Home";
import Durem from "./pages/Durem";
import News from "./pages/News";
// import NotFound from "./Pages/NotFound";
import RouteWithLayout from "./RouteWithLayout";

const Routes = () => {
  //   const ctx = useContext(GlobalContext);
  return (
    <BrowserRouter>
      <Switch>
        <RouteWithLayout component={Home} exact layout={Layout} path="/" />
        <RouteWithLayout component={Durem} layout={Layout} path="/durem" />
        <RouteWithLayout component={Durem} layout={Layout} path="/durem/:id" />
        <RouteWithLayout
          component={News}
          layout={Layout}
          path="/medee-medeelel"
        />
        <RouteWithLayout
          component={News}
          layout={Layout}
          path="/medee-medeelel/:link"
        />

        {/* <RouteWithLayout component={Home} exact layout={Layout} path="/home" /> */}

        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
