import { getWeatherByCity, getForecastByCity } from '../api/weather';

const getInstantWeather = (cityName = 'kyiv') => {
  return async (dispatch) => {
    dispatch({ type: 'GET_INSTANT_WEATHER_REQUEST', payload: { fetch: true } });
    let result = null;
    try {
      result = await getWeatherByCity(cityName);
    } catch (e) {
      dispatch({ type: 'GET_INSTANT_WEATHER_FAILED', payload: { weather: result, fetch: false, error: e } });
    }
    dispatch({ type: 'GET_INSTANT_WEATHER_SUCCESS', payload: { weather: result, fetch: false } });
  };
};

const getForecast = (cityName = 'kyiv') => {
  return async (dispatch) => {
    const result = await getForecastByCity(cityName);
    dispatch({ type: 'GET_FORECAST_WEATHER_SUCCESS', payload: { forecast: result } });
  };
};

export {
  getInstantWeather,
  getForecast,
};
