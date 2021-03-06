import React from "react";
import "./weather.css";
const Weather = props => {
  return (
    <div className="results">
      {props.city && props.country && (
        <p>
          Location: {props.country}, {props.city}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions:{props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
