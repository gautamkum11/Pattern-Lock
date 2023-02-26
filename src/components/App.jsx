// eslint-disable-next-line
import React from "react";
import Checkpattern from "./Checkpattern";
import Setpattern from "./Setpattern";
import {Route, Switch} from "react-router-dom";
import Drawpattern from "./Drawpattern";
import Forgotpattern from "./Forgotpattern";
import Resetpattern from "./Resetpattern";

function App() {

  return (
    <Switch>
      <Route exact path = "/" component = {Setpattern} />
      <Route path = "/confirm" component = {Checkpattern} />
      <Route path = "/drawpattern" component = {Drawpattern} />
      <Route path = "/forgotpattern" component = {Forgotpattern} />
      <Route path = "/resetpattern" component = {Resetpattern} />
    </Switch>
  );
}

export default App;
