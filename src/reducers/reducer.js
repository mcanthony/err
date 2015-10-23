
import * as types from '../actions/constants';

const inititalState = {
  form: {
    name: ''
  },
  names: [
    { name: 'Jack Bauer' },
    { name: 'Tom Brady' },
    { name: 'Paul Scholes' },
    { name: 'tuommii' }
  ]
};

function names(state = inititalState, action) {
  switch (action.type) {
  case types.ADD_NAME:
    return Object.assign({}, state, {
      names: [
        ...state.names,
        action.name
      ]
    });
  case types.SET_FORM:
    return Object.assign({}, state, {
      form: action.values
    });
  default:
    return state;
  }
}

export default names;
