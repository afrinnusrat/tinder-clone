import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am Chat page</h1>
          </Route>
          <Route path="/">
            <h1>I am Home page</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* Tinder Cards */
}
{
  /* Button below tinder cards */
}
{
  /* Chars screen */
}
{
  /* Individual chat screen */
}
