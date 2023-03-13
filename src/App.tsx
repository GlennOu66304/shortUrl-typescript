import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, EditPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" Component={HomePage} />
        <Route path="/edit" Component={EditPage} />
      </Switch>
    </Router>
  );
}

export default App;
