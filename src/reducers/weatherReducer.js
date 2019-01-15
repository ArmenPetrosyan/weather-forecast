const defaultState = {
  main: {
    temp: 0,
    pressure: 0,
  },
  wind: {
    speed: 0,
  },
  weather: [
    {
      main: '',
    },
  ],
  forecast: {
    list: [],
  },
  fetch: false,
  error: null,
};

const weatherReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_INSTANT_WEATHER_SUCCESS': {
      return {
        ...state,
        ...payload.weather,
      };
    }
    case 'GET_INSTANT_WEATHER_FAILED': {
      return {
        ...state,
        ...payload,
      };
    }
    case 'GET_FORECAST_WEATHER_SUCCESS': {
      return {
        ...state,
        forecast: payload.forecast,
      };
    }
    case 'GET_FORECAST_WEATHER_FAILED': {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
