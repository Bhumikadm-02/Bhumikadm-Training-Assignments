import React, { useState, useEffect } from 'react';

const WeatherWidget = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = 'f86f73bebd0c9988cacc8b6cc9d771ae';
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&apiKey="f86f73bebd0c9988cacc8b6cc9d771ae"';
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    };
    fetchWeather();
  }, [location]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const weatherDescription = weatherData.weather[0].description;
  const temperature = Math.round(weatherData.main.temp - 273.15); // Convert from Kelvin to Celsius
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;

  return (
    <div class="weather-widget">
      <h2>Current weather for {location}</h2>
      <p>Description: {weatherDescription}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Wind speed: {windSpeed} m/s</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
};

export default WeatherWidget;