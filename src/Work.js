import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Work extends Component {
  render() {
    return (
      <div>
        <h2>WORK</h2>
        <h3>Past experience //</h3>
    <p>UX, digital marketing, writing, events, customer service, administrative and ops</p>
        <br />
    <h3>Tools of the trade //</h3>
    <p>Sketch app, Figma, InVision, Abstract app, Google Analytics</p>
        <br />
    <h3>What I'm learning right now</h3>
    <p>Freecodecamp.org - <Link to = "https://www.freecodecamp.org/jocelynmit"> my profile</Link></p>
      </div>
    );
  }
}
 
export default Work;