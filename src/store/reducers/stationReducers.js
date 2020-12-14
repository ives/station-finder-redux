export const stationCodeReducer = (state, action) => {
  state.stationCode = action.payload;
}

export const stationDeparturesReducerFulfilled = (state, action) => {
  state.departuresData = action.payload;
}

export const stationDeparturesReducerRejected = (state, action) => {
  state.fetchError = action.error;
}
