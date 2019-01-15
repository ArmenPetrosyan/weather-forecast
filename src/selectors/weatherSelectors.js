import detectIconByWeatherType from '../utils/detectIcon';

const getCurrentTemperature = state => Math.round(state.weather.main.temp);
const getCurrentWind = state => Math.round(state.weather.wind.speed);
const getCurrentPressure = state => Math.round(state.weather.main.pressure);
const getWeatherIcon = (state) => {
  const weatherType = state.weather.weather[0].main;
  return detectIconByWeatherType(weatherType);
};

const getFilteredForecast = (state) => {
  const forecastFromState = state.weather.forecast.list;
  return forecastFromState.map(forecastObject => (
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
