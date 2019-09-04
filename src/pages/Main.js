import React from "react";
import {Helmet} from "react-helmet";

const Main = () => {
  return(
  <div>
    <Helmet>
      <title>Me</title>
    </Helmet>
    <div className="block-content">
      <h1 >Hi there!</h1>
      <div>
        My name is Ivan, I live and study in Kyiv.<br/>

      </div>
    </div>
  </div>
  );
};

export default Main;
