import React from "react";

import { StyledContainer } from './HomePage.styles';

import { Autosuggest } from './Autosuggest';
import { StationSchedule } from './StationSchedule';

import { Error } from "./Error";

const HomePage = () => {

  const error = 'Example error';

  return (
    <StyledContainer maxWidth="sm">

      <h1>Live departures</h1>
      
      {error && <Error message={error} />}

      <Autosuggest />
      <StationSchedule />
      
    </StyledContainer>
  );
}

export default HomePage;