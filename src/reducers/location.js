const defaultState = {
  city: 'Kyiv',
  region: 'Kyiv',
  country: 'UA',
};

const location = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_LOCATION': {
      return {
        ...state,
        city: payload.city,
      };
    }
    default: {
      return state;
    }
  }
};

export default location;
