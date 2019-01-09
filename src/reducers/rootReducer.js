const defaultState = {
  date: '01/01/2019',
  locale: 'en',
};

const rootReducer = (state = defaultState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'SET_LOCALE': {
      return {
        ...state,
        locale: data.locale,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
