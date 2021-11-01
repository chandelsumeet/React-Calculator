import React from "react";
import response from "./data";
import InfoComponent from "./info";

const AppComponent = () => {
  return (
    <section>
      {response.map((info) => {
        return <InfoComponent key={info.id} info={info} />;
      })}
    </section>
  );
};

export default AppComponent;
