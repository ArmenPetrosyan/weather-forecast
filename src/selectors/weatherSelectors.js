const getCurrentTemperature = state => Math.round(state.weather.main.temp);
const getCurrentWind = state => Math.round(state.weather.wind.speed);
const getCurrentPressure = state => Math.round(state.weather.main.pressure);

export {
  getCurrentTemperature,
  getCurrentWind,
  getCurrentPressure,
};
