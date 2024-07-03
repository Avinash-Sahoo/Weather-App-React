import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.jsx'
import { WeatherProvider } from './context/Weather.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
    
  </React.StrictMode>,
)
