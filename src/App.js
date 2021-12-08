import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import React from "react";
import "./assets/css/index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
