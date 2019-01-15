const defaultState = {
  date: '01/01/2019',
  locale: 'en',
  queries: [],
};

const root = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_LOCALE': {
      return {
        ...state,
        locale: payload.locale,
      };
    }
    case 'ADD_QUERY': {
      return {
        ...state,
        queries: [payload.query, ...state.queries],
      };
    }
    default: {
      return state;
    }
  }
};

export default root;
