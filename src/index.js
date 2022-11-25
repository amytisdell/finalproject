import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Directory from "./pages/Directory";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AddEmployeePage from "./pages/addemployee";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navigation />
      <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>
      <Route path="/directory">
        <Directory />
      </Route>
      <Route path="/add">
        <AddEmployeePage/>
      </Route>
    </Switch>
  
  </BrowserRouter>
);
