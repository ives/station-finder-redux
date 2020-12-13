import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

export const StationSchedule = () => {

  const stationCode = useSelector(state => state.root.stationCode );

  useEffect(
    () => {
      console.log('Station code changed', stationCode)
    }, [stationCode]
  );

  return (
    <>
      {stationCode && <h2>Details for {stationCode}</h2>}
    </>
  );
};
