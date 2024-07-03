import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  if (!weather.data) {
    return (
      <>
        <div class="container2">
          <div class="loading-wave">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
          </div>
        </div>
      </>
    );
  } 
  else if (weather.data.error) {
    return <h1>{weather.data.error.message}</h1>;
  }
  return (
    <div className="box">
      <img src={weather.data.current.condition.icon} alt="Weather" />
      <h2>{`Temp ${weather.data.current.temp_c}°C`}</h2>
      <h3>{`${weather.data.location.name} , ${weather.data.location.region}`}</h3>
      <h3>{weather.data.location.country}</h3>
      <h4 className="data">
        Humidity :<span>{` ${weather.data.current.humidity}% `}</span>
      </h4>
      <h4>
        Wind :<span>{` ${weather.data.current.wind_kph} km/h `}</span>
      </h4>
      <h4>
        Cloud :<span>{` ${weather.data.current.cloud}% `}</span>
      </h4>
    </div>
  );
};

export default Card;
