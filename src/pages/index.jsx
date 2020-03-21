import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import View from "../components/View";
import Status from "../components/Status";

const Index = () => (
  <Layout>
    <Status />
    <View title="Get Me Fit">
      <p>
        <span role="img" aria-label="wave">
          👋
        </span>{" "}
        Hello There
        <br />
        Group Fitness Instructor & Personal Trainer Profiles
      </p>
      <br />
      <br />
      <p>
        This is the public home, and here it is a private route to start:
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
          type="button"
        >
          <Link to="/app/profile">Go to your profile</Link>
        </button>
      </p>
    </View>
  </Layout>
);

export default Index;
