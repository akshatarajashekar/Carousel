import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../home/home";

const RouterIndex: FC = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" exact component={Home} />
    </Switch>
  </div>
);
export default RouterIndex;
