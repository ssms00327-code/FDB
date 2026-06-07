# Weather Services Module

This module provides utilities for fetching weather data from OpenWeatherMap API.

## Setup

1. Get your API key from https://openweathermap.org/api
2. Create a `.env.local` file in the project root:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

3. Update the WeatherDashboard component to use the environment variable instead of hardcoded key

## Environment Variables

- `VITE_WEATHER_API_KEY` - OpenWeatherMap API key (free tier supports 1000 calls/day)

## API Endpoints

### Current Weather
```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Weather Forecast
```
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric
```

## Free Tier Limitations
- 1,000 API calls per day
- Data updates every 10 minutes
- Only metric units available

## Paid Plans
For higher limits, visit: https://openweathermap.org/api#pricing
