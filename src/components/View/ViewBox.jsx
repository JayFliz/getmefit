import React from "react";
import PropTypes from "prop-types";

const ViewBox = ({ title, children }) => (
  <>
    <div className="w-1/3"></div>
    <div className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 md:mx-24 lg:mx-64">
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="my-4">{children}</div>
    </div>
    <div className="w-1/3"></div>
  </>
);

ViewBox.propTypes = {
  title: PropTypes.string.isRequired
};

export default ViewBox;
