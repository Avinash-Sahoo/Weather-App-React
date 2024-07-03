import { createContext, useContext, useState } from "react";
import {getWeatherByLocation , getWeatherBylongitude} from "../api/weather"
const WeatherContext = createContext(null)
export const WeatherProvider = (props)=>{
    const [data, setData]=useState(null)
    const [searchCity,setSearchCity]=useState("")
    const fetchdata= async(searchCity)=>{
        const response = await getWeatherByLocation(searchCity);
        setData(response)
        }
    const fetchDataBylatitude = ()=>{
        navigator.geolocation.getCurrentPosition(async(position)=>{
          const response = await getWeatherBylongitude(position.coords.latitude,position.coords.longitude)
          setData(response);
        })
    }
    return(
        <WeatherContext.Provider value={{data , searchCity , setSearchCity , fetchdata , setData , fetchDataBylatitude}}>{props.children}</WeatherContext.Provider>
    )
}


 export const useWeather=()=>{
    return useContext(WeatherContext);
} 