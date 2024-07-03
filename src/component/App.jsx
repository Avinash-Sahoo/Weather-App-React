import { useEffect } from "react";
import "../stylesheet/App.css";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import { useWeather } from "../context/Weather";

function App() {
  const weather = useWeather();
  useEffect(() => {
    weather.fetchDataBylatitude();
  }, []);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <Input />
      <Button value="Search" />
      <Card />
    </div>
  );
}

export default App;
