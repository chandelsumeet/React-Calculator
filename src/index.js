import React from "react";
import ReactDom from "react-dom";
import AppComponent from "./app";
import Calculator from "./calculator";
function Greeting() {
  return <AppComponent />;
}
ReactDom.render(<Calculator />, document.getElementById("root"));
