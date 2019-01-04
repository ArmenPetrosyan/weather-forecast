const defaultState = {
  date: '01/01/2019',
  name: 'John Dow',
};

const rootReducer = (state = defaultState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: data.name,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
