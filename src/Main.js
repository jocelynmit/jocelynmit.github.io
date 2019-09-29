import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import About from "./About";
  import Why from "./Why";
  import Work from "./Work";
  import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">About</NavLink></li>
            <li><NavLink to="/why">Why</NavLink></li>
            <li><NavLink to="/work">Work</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={About}/>
            <Route path="/why" component={Why}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
    </HashRouter>

    );
  }
}
 
export default Main;