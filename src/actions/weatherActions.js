import { getWeatherByCity, getForecastByCity } from '../api/weather';

const getInstantWeather = (cityName = 'kyiv') => {
  return async (dispatch) => {
    dispatch({ type: 'GET_INSTANT_WEATHER_REQUEST', payload: { fetch: true } });
    let result = null;
    try {
      result = await getWeatherByCity(cityName);

      if (result.cod === '404') {
        dispatch({ type: 'GET_INSTANT_WEATHER_FAILED', payload: { fetch: false, error: result } });
      } else {
        dispatch({ type: 'GET_INSTANT_WEATHER_SUCCESS', payload: { weather: result, fetch: false } });
      }
    } catch (e) {
      dispatch({ type: 'GET_INSTANT_WEATHER_FAILED', payload: { fetch: false, error: e } });
    }
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
