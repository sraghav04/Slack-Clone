import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Sidebar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
