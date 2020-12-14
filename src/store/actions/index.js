import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from '../../services/restAPI';

const actionTypes = {
  SET_STATION_CODE: "SET_STATION_CODE",
  GET_DEPARTURES_DATA: "GET_DEPARTURES_DATA",
};

export const setStationCode = createAction(actionTypes.SET_STATION_CODE);

export const getDeparturesData = createAsyncThunk(
  actionTypes.GET_DEPARTURES_DATA,
  async (stationCode, thunkAPI) => {
    const response = await fetchData(`http://savills-techtest-nwapi.eba-eammdiqd.eu-west-2.elasticbeanstalk.com/stations/${stationCode}`);
    return response.data;
  }
);
