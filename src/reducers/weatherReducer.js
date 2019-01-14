const defaultState = {
  weather: null,
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
