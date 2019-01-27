import React from "react";
import Header from "../components/Header";
import "../styles/main.css";

export default props => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};
