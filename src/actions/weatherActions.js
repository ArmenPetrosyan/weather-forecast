import getWeatherByCity from '../api/weather';

const getInstantWeather = (cityName = 'kyiv') => {
  return async (dispatch) => {
    const result = await getWeatherByCity(cityName);
    dispatch({ type: 'GET_INSTANT_WEATHER_SUCCESS', payload: { weather: result } });
  };
};

export {
  getInstantWeather,
};
