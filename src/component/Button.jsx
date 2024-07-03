import React from "react";
import { useWeather } from "../context/Weather";

const Button = (props) => {
  const weather = useWeather();
  if (!weather.searchCity) {
    return <button className="btn">{props.value}</button>;
  }
  return (
    <button className="btn" onClick={() => weather.fetchdata(weather.searchCity)}>{props.value}</button>
  );
};

export default Button;
