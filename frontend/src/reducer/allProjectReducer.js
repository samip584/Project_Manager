import * as allProjectAction from '../action/allProjectAction';

const INITIAL_STATE = {
  projects : [],
};

function allProjectReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case allProjectAction.SET_PROJECTS:
      return {
        ...state,
        projects : action.payload,
      };

    default:
      return state;
  }
}

export default allProjectReducer;