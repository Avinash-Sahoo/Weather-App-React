import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather= useWeather();
  return (
    <div className="search">
      <input className="input" placeholder="Search Any Location Weather" value={weather.searchCity} onChange={(e)=> weather.setSearchCity(e.target.value)} />
    </div>
  );
};

export default Input;
