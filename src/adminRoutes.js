import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
// import GlobalContext from "./Contexts/GlobalContext";
import AdminLayout from "./components/admin/layout/adminLayout";
import Category from "./components/admin/category";
import Post from "./components/admin/post";
import NewPost from "./components/admin/post/newPost";
import UpdatePost from "./components/admin/post/updatePost";
import NewCF from "./components/admin/customField/newCF";
import Menu from "./components/admin/menu";
import Users from "./components/admin/users";
import CustomField from "./components/admin/customField";
import Hicheelvvd from "./components/admin/hicheel/hicheelvvd";
import HicheelNemeh from "./components/admin/hicheel/hicheelNemeh";
import Admin from "./pages/Admin";
import AdminLogin from "./components/admin/auth/admin-login";
import RouteWithLayout from "./RouteWithLayout";
import Exercise from "./components/admin/execises";
import NewExercise from "./components/admin/execises/newExercise";

const AdminRoutes = () => {
  //   const ctx = useContext(GlobalContext);
  return (
    <BrowserRouter>
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
          component={UpdatePost}
          exact
          layout={AdminLayout}
          path="/mb-admin/update-post/:id"
        />
        <RouteWithLayout
          component={NewPost}
          exact
          layout={AdminLayout}
          path="/mb-admin/new-post"
        />
        <RouteWithLayout
          component={NewCF}
          exact
          layout={AdminLayout}
          path="/mb-admin/new-cf"
        />

        <RouteWithLayout
          component={Hicheelvvd}
          exact
          layout={AdminLayout}
          path="/mb-admin/hicheelvvd"
        />
        <RouteWithLayout
          component={HicheelNemeh}
          exact
          layout={AdminLayout}
          path="/mb-admin/new-hicheel"
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
          component={Exercise}
          exact
          layout={AdminLayout}
          path="/mb-admin/exercise"
        />

        <RouteWithLayout
          component={NewExercise}
          exact
          layout={AdminLayout}
          path="/mb-admin/new-exercise"
        />

        <RouteWithLayout
          component={AdminLogin}
          exact
          layout={NoLayout}
          path="/admin"
        />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default AdminRoutes;

const NoLayout = (props) => {
  return <div>{props.children}</div>;
};
