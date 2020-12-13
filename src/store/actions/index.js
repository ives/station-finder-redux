import { createAction } from "@reduxjs/toolkit";

const actionTypes = {
  SET_STATION_CODE: "SET_STATION_CODE",
};

export const setStationCode = createAction(actionTypes.SET_STATION_CODE);
