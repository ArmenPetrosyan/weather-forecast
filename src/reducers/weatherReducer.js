const defaultState = {
  main: {
    temp: 0,
    pressure: 0,
  },
  wind: {
    speed: 0,
  },
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
    default: {
      return state;
    }
  }
};

export default weatherReducer;
