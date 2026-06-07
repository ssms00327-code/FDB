import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge, Search } from 'lucide-react';
import { fetchCurrentWeather, fetchWeatherForecast } from '../services/weatherService';

interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  icon: string;
  sunrise: string;
  sunset: string;
}

interface ForecastData {
  date: string;
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

export default function WeatherDashboard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchCity, setSearchCity] = useState('London');

  useEffect(() => {
    fetchWeatherData(searchCity);
  }, []);

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const weatherData = await fetchCurrentWeather(city);
      setWeather(weatherData);

      const forecastData = await fetchWeatherForecast(city);
      setForecast(forecastData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity.trim()) {
      fetchWeatherData(searchCity);
    }
  };

  const getWeatherIcon = (iconCode: string) => {
    if (iconCode.includes('01')) return <Sun className="w-16 h-16 text-yellow-400" />;
    if (iconCode.includes('02') || iconCode.includes('03')) return <Cloud className="w-16 h-16 text-gray-400" />;
    if (iconCode.includes('04')) return <Cloud className="w-16 h-16 text-gray-500" />;
    if (iconCode.includes('09') || iconCode.includes('10')) return <CloudRain className="w-16 h-16 text-blue-400" />;
    if (iconCode.includes('11')) return <CloudRain className="w-16 h-16 text-purple-400" />;
    return <Cloud className="w-16 h-16 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
      {/* Header */}
      <header className="bg-black bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="w-8 h-8 text-white" />
            <h1 className="text-4xl font-bold text-white">Weather Dashboard</h1>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Search for a city..."
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white border-opacity-30 focus:outline-none focus:border-white focus:bg-opacity-30 transition"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg border border-white border-opacity-30 transition flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </form>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500 bg-opacity-80 text-white px-6 py-4 rounded-lg mb-6 backdrop-blur-sm">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        {weather && (
          <>
            {/* Current Weather */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white border-opacity-30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center">
                  <h2 className="text-white text-5xl font-bold mb-2">
                    {weather.city}, {weather.country}
                  </h2>
                  <p className="text-white text-xl opacity-90 mb-6">{weather.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-7xl font-bold text-white">{weather.temperature}</span>
                    <span className="text-4xl text-white ml-2">°C</span>
                  </div>
                  <p className="text-white opacity-75 mt-2">
                    Feels like {weather.feelsLike}°C
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  {getWeatherIcon(weather.icon)}
                </div>
              </div>

              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white border-opacity-20">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplets className="w-5 h-5 text-blue-200" />
                    <span className="text-white opacity-75 text-sm">Humidity</span>
                  </div>
                  <p className="text-white text-2xl font-bold">{weather.humidity}%</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Wind className="w-5 h-5 text-blue-200" />
                    <span className="text-white opacity-75 text-sm">Wind Speed</span>
                  </div>
                  <p className="text-white text-2xl font-bold">{weather.windSpeed} m/s</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-200" />
                    <span className="text-white opacity-75 text-sm">Visibility</span>
                  </div>
                  <p className="text-white text-2xl font-bold">{weather.visibility} km</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Gauge className="w-5 h-5 text-blue-200" />
                    <span className="text-white opacity-75 text-sm">Pressure</span>
                  </div>
                  <p className="text-white text-2xl font-bold">{weather.pressure} hPa</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-5 h-5 text-orange-200" />
                    <span className="text-white opacity-75 text-sm">Sunrise</span>
                  </div>
                  <p className="text-white text-lg font-bold">{weather.sunrise}</p>
                </div>

                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="w-5 h-5 text-purple-200" />
                    <span className="text-white opacity-75 text-sm">Sunset</span>
                  </div>
                  <p className="text-white text-lg font-bold">{weather.sunset}</p>
                </div>
              </div>
            </div>

            {/* 5-Day Forecast */}
            {forecast.length > 0 && (
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">5-Day Forecast</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {forecast.map((day, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-30 transition"
                    >
                      <p className="text-white font-semibold mb-4">{day.date}</p>
                      <div className="flex justify-center mb-4">
                        {getWeatherIcon(day.icon)}
                      </div>
                      <div className="text-center mb-4">
                        <p className="text-white text-3xl font-bold">{day.temp}°</p>
                        <p className="text-white opacity-75 text-sm">{day.description}</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-white opacity-75">
                          <span>Humidity:</span>
                          <span className="font-semibold">{day.humidity}%</span>
                        </div>
                        <div className="flex justify-between text-white opacity-75">
                          <span>Wind:</span>
                          <span className="font-semibold">{day.windSpeed} m/s</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {!weather && !loading && !error && (
          <div className="text-center py-12">
            <Cloud className="w-16 h-16 text-white opacity-50 mx-auto mb-4" />
            <p className="text-white text-lg">Search for a city to see weather information</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white border-opacity-20 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-white opacity-75">
          <p>Weather data provided by OpenWeatherMap API</p>
          <p className="text-sm mt-2">© 2026 Weather Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
