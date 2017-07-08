// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';
import { fromJS } from 'immutable';
export type counterStateType = {
  counter: number
};

type actionType = {
  type: string
};
const initialState = fromJS({
    "submitObj":{
        "isCurrentCarrierVerizon": "N",
        "contractWithCurrentCarrier": "N",
        "currentdeviceTradeIn": "N"
    },
    
});
export default function counter(state=initialState, action: actionType) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
