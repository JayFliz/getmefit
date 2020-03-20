import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Settings from "../components/Settings"
import Login from "../components/Login"
import Profile from "../components/Profile"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <Layout>
    <Status />
    <Router>
      <PrivateRoute path="/app/profile" component={Settings} />
      <Profile path="/user/:userId" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
