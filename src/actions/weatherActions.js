import getWeatherByCity from '../api/weather';

const getInstantWeather = (cityName) => {
  console.log("getInstantWeather");
  return async (dispatch) => {
    const result = await getWeatherByCity('kyiv');
    console.log(result);
    dispatch({ type: 'GET_INSTANT_WEATHER_SUCCESS', payload: { weather: result } });
  };
};

export {
  getInstantWeather,
};
