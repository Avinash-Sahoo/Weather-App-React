
const url = "https://api.weatherapi.com/v1/current.json?key=01d067adf76a479198264757240307"

export const getWeatherByLocation = async(city)=>{
    const response = await fetch(`${url}&q=${city}&aqi=yes`)
    return await response.json();
}
export const getWeatherBylongitude = async(lat , lon)=>{
    const response = await fetch(`${url}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
}