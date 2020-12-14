import { createReducer } from "@reduxjs/toolkit";

import defaultState from "../default-state";
import { setStationCode, getDeparturesData } from "../actions";
import {
  stationCodeReducer,
  stationDeparturesReducerFulfilled,
  stationDeparturesReducerRejected,
} from "./stationReducers";

const actionsMap = {
  [setStationCode]: stationCodeReducer,
  [getDeparturesData.fulfilled]: stationDeparturesReducerFulfilled,
  [getDeparturesData.rejected]: stationDeparturesReducerRejected,
};

export const rootReducer = createReducer(defaultState, actionsMap);
