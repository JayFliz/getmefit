import React from "react";
import PropTypes from "prop-types";
import ViewBox from "./ViewBox";

const View = ({ title, children }) => (
  <div className="w-full bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">
    <ViewBox title={title}>{children}</ViewBox>
  </div>
);

View.propTypes = {
  title: PropTypes.string.isRequired
};

export default View;
