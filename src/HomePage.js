import React from "react";

import { StyledContainer } from './HomePage.styles';

import { Autosuggest } from './Autosuggest';
import { StationSchedule } from './StationSchedule';
import { ErrorMessages } from "./ErrorMessages";

const HomePage = () => {

  // const error = 'Example error';

  return (
    <StyledContainer maxWidth="sm">
      <h1>Live departures</h1>    
      <ErrorMessages />
      <Autosuggest />
      <StationSchedule />
    </StyledContainer>
  );
}

export default HomePage;