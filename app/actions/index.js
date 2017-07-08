import {SHOW_LEFT_NAV} from 'containers/constants' 

export function showLeftNav(payload) {
  return {
    type: SHOW_LEFT_NAV,
    leftNav : payload
  };
}
