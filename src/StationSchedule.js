import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeparturesData } from "./store/actions/";

import { StyledTable } from "./StationSchedule.styles";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const StationSchedule = () => {

  const dispatch = useDispatch();
  const stationCode = useSelector((state) => state.root.stationCode);
  const options = useSelector((state) => state.root.departuresData);

  useEffect(() => {
    dispatch(getDeparturesData(stationCode));
  }, [stationCode, dispatch]);

  if (!options) {
    return null;
  }

  const { station_name, departures } = options;

  const rows =
    departures && departures.length > 0
      ? departures.map(
          ({
            expected_arrival_time,
            platform,
            destination_name,
            train_uid,
          }) => (
            <TableRow key={train_uid}>
              <TableCell>{expected_arrival_time}</TableCell>
              <TableCell>{destination_name}</TableCell>
              <TableCell>{platform}</TableCell>
            </TableRow>
          )
        )
      : [];

  return (
    <>
      {station_name && rows.length > 0 && <h2>Details for {station_name}:</h2>}

      {rows.length > 0 && (<StyledTable size="small">
        <TableHead>
          <TableRow>
            <TableCell>Due</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Platform</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows}</TableBody>
      </StyledTable>)}

      {station_name && rows.length === 0 && <p>No data available right now.</p>}
    </>
  );
};
