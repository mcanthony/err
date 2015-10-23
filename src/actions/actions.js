
import * as types from './constants';

export function addName(name) {
  return {
    type: types.ADD_NAME,
    name
  };
}

export function setForm(values) {
  return {
    type: types.SET_FORM,
    values
  };
}
