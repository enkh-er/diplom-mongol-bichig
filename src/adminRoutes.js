import React from "react";
import { Fragment } from "react";
import { Switch } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import AdminLayout from "./components/admin/layout/adminLayout";
import Category from "./components/admin/category";
import Page from "./components/admin/page";
import NewPage from "./components/admin/page/newPage";
import Post from "./components/admin/post";
import Menu from "./components/admin/menu";
import Users from "./components/admin/users";
import CustomField from "./components/admin/customField";
import Form from "./components/admin/form";
import Admin from "./pages/Admin";
import AdminLogin from "./components/admin/auth/admin-login";
// import NotFound from "./Pages/NotFound";
import RouteWithLayout from "./RouteWithLayout";

const AdminRoutes = () => {
  //   const ctx = useContext(GlobalContext);
  return (
    <Fragment>
      <Switch>
        <RouteWithLayout
          component={Admin}
          exact
          layout={AdminLayout}
          path="/mb-admin"
        />
        <RouteWithLayout
          component={Post}
          exact
          layout={AdminLayout}
          path="/mb-admin/post"
        />
        <RouteWithLayout
          component={Category}
          exact
          layout={AdminLayout}
          path="/mb-admin/category"
        />
        <RouteWithLayout
          component={Page}
          exact
          layout={AdminLayout}
          path="/mb-admin/page"
        />
        <RouteWithLayout
          component={NewPage}
          exact
          layout={AdminLayout}
          path="/mb-admin/new-page"
        />
        <RouteWithLayout
          component={Users}
          exact
          layout={AdminLayout}
          path="/mb-admin/users"
        />
        <RouteWithLayout
          component={Menu}
          exact
          layout={AdminLayout}
          path="/mb-admin/menu"
        />
        <RouteWithLayout
          component={CustomField}
          exact
          layout={AdminLayout}
          path="/mb-admin/custom-field"
        />
        <RouteWithLayout
          component={Form}
          exact
          layout={AdminLayout}
          path="/mb-admin/form"
        />
        <RouteWithLayout
          component={AdminLogin}
          exact
          layout={NoLayout}
          path="/admin"
        />
      </Switch>
    </Fragment>
  );
};

export default AdminRoutes;

const NoLayout = (props) => {
  return <div>{props.children}</div>;
};
