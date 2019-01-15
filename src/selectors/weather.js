import detectIconByWeatherType from '../utils/detectIcon';

const getCurrentTemperature = state => Math.round(state.weather.main.temp);
const getCurrentWind = state => Math.round(state.weather.wind.speed);
const getCurrentPressure = state => Math.round(state.weather.main.pressure);
const getWeatherIcon = (state) => {
  const weatherType = state.weather.weather[0].main;
  return detectIconByWeatherType(weatherType);
};

/**
 * Get 5-day weather forecast list. One forecast per day
 * @param state
 * @returns {Object}
 */
const getFilteredForecast = (state) => {
  const forecast = state.weather.forecast.list;
  const filtered = forecast.filter((forecastObject) => {
    const currentDay = new Date().getDate();
    const forecastDay = new Date(forecastObject.dt * 1000).getDate();
    return (currentDay !== forecastDay) && !!forecastObject.dt_txt.match(/12:00:00/);
  });

  return filtered.map(forecastObject => (
    {
      date: new Date(forecastObject.dt * 1000),
      temperature: Math.round(forecastObject.main.temp),
      wind: Math.round(forecastObject.wind.speed),
      min: Math.round(forecastObject.main.temp_min),
      max: Math.round(forecastObject.main.temp_max),
      pressure: Math.round(forecastObject.main.pressure),
      icon: detectIconByWeatherType(forecastObject.weather[0].main),
    }
  ));
};

export {
  getCurrentTemperature,
  getCurrentWind,
  getCurrentPressure,
  getWeatherIcon,
  getFilteredForecast,
};
