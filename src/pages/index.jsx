import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import Settings from "../components/Settings";
import Login from "../components/Login";
import Home from "../components/Home";
import Profile from "../components/Profile";
import PrivateRoute from "../components/PrivateRoute";
import NotFound from "../components/NotFound";
import Status from "../components/Status";

const Index = () => (
  <Layout>
    <Status />
    <Router>
      <Home path="/" />
      <PrivateRoute path="/app/profile" component={Settings} />
      <Login path="/app/login" />
      <Profile path="/user/:userId" component={Profile} />
      <NotFound default component={NotFound} />
    </Router>
  </Layout>
);

export default Index;
