import { fromJS } from 'immutable';

import {
  
  SHOW_LEFT_NAV
} from 'containers/constants';


const initialState = fromJS({
    leftNav: false
    
});

function main(state = initialState, action) {
  switch (action.type) {
    case SHOW_LEFT_NAV:
      return state.set("leftNav",!state.get("leftNav"));
    default:
      return state;
  }
}

export default main;
