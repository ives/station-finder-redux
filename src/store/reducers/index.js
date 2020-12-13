import { createReducer } from '@reduxjs/toolkit';

import defaultState from '../default-state';
import { setStationCode } from '../actions';
import {stationCodeReducer} from './stationReducers';

const actionsMap = {
  [setStationCode]: stationCodeReducer,
  // [getDetails]: stationDetailsReducer
};

export const rootReducer = createReducer(defaultState, actionsMap);