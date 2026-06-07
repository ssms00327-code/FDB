// Weather API service functions

export interface WeatherResponse {
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

export interface ForecastResponse {
  date: string;
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'demo_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetch current weather data for a city
 */
export async function fetchCurrentWeather(city: string): Promise<WeatherResponse> {
  try {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();

    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      description: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 10) / 10,
      visibility: Math.round(data.visibility / 1000),
      pressure: data.main.pressure,
      icon: data.weather[0].icon,
      sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  } catch (error) {
    throw new Error(`Failed to fetch weather: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Fetch 5-day weather forecast for a city
 */
export async function fetchWeatherForecast(city: string): Promise<ForecastResponse[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    const dailyForecasts: ForecastResponse[] = [];
    const seenDates = new Set<string>();

    data.list.forEach((item: any) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!seenDates.has(date) && dailyForecasts.length < 5) {
        seenDates.add(date);
        dailyForecasts.push({
          date,
          temp: Math.round(item.main.temp),
          description: item.weather[0].main,
          icon: item.weather[0].icon,
          humidity: item.main.humidity,
          windSpeed: Math.round(item.wind.speed * 10) / 10,
        });
      }
    });

    return dailyForecasts;
  } catch (error) {
    throw new Error(`Failed to fetch forecast: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Get weather icon based on icon code
 */
export function getWeatherIconComponent(iconCode: string) {
  if (iconCode.includes('01')) return 'sunny';
  if (iconCode.includes('02') || iconCode.includes('03')) return 'cloudy';
  if (iconCode.includes('04')) return 'overcast';
  if (iconCode.includes('09') || iconCode.includes('10')) return 'rainy';
  if (iconCode.includes('11')) return 'thunderstorm';
  if (iconCode.includes('13')) return 'snow';
  if (iconCode.includes('50')) return 'mist';
  return 'cloud';
}

/**
 * Convert temperature between Celsius and Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}
