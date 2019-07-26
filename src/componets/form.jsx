import React, { Component } from "react";
import "./from.css";
class Form extends Component {
  render() {
    return (
      <div className="middle">
        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="city..." />
          <input type="text" name="country" placeholder="country..." />
          <button className="btn btn1">GET WEATHER</button>
        </form>
      </div>
    );
  }
}

export default Form;
