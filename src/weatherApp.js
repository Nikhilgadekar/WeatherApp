import React, { useState } from 'react';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };
    console.log(weather);
    return (
        <div className="max-w-sm mt-8">
            <input
                type="text"
                placeholder="Enter city name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                onClick={fetchWeather}
            >
                Get Weather
            </button>
            {weather && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">{weather.name}</h2>
                    <p className="text-gray-700">Temperature: {weather.main.temp}°C</p>
                    <p className="text-gray-700">Description: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
