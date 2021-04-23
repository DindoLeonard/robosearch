import { CHANGE_SEARCHFIELD } from "./constants.js";

const intitialState = {
  searchField: "",
};

export const searchRobots = (state = intitialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
