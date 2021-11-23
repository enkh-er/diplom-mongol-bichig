import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import Layout from "./components/layouts/layout";
import { Home } from "./pages/Home";
import Durem from "./pages/Durem";
import News from "./pages/News";
import Surgalt from "./pages/Surgalt";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Dasgal from "./pages/Dasgal";
import SongodogBichgvvd from "./pages/SongodogBichgvvd";
import UnshihMaterialuud from "./pages/UnshihMaterialuud";
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
        <RouteWithLayout component={Surgalt} layout={Layout} path="/surgalt" />
        <RouteWithLayout
          component={About}
          layout={Layout}
          path="/bidnii-tuhai"
        />
        <RouteWithLayout
          component={Contact}
          layout={Layout}
          path="/holboo-barih"
        />
        <RouteWithLayout
          component={SongodogBichgvvd}
          layout={Layout}
          path="/songodog-bichgvvd"
        />
        <RouteWithLayout component={Dasgal} layout={Layout} path="/dasgal" />
        <RouteWithLayout
          component={UnshihMaterialuud}
          layout={Layout}
          path="/unshih-materialuud"
        />
        <RouteWithLayout
          component={Surgalt}
          layout={Layout}
          path="/surgalt/:id"
        />

        {/* <RouteWithLayout component={Home} exact layout={Layout} path="/home" /> */}

        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
