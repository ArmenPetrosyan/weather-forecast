const getCurrentTemperature = state => Math.round(state.weather.main.temp);
const getCurrentWind = state => Math.round(state.weather.wind.speed);
const getCurrentPressure = state => Math.round(state.weather.main.pressure);
const getWeatherIcon = (state) => {
  const icon = state.weather.weather[0].main;
  switch (icon) {
    case 'Clouds':
      return 'broken-clouds-day';
    case 'Snow':
      return 'snow-day';
    case 'Clear':
      return 'clear-sky-day';
    case 'Rain':
      return 'rain-day';
    default:
      return icon;
  }
};

export {
  getCurrentTemperature,
  getCurrentWind,
  getCurrentPressure,
  getWeatherIcon,
};
