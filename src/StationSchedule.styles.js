import styled from 'styled-components';
import Table from '@material-ui/core/Table';

export const StyledTable = styled(Table)`

  background-color: #252839;

  .MuiTableCell-head {
    color: #ffdf00;
    font-weight: bold;
  }
  
  .MuiTableCell-body {
    color: white;
  }

  .MuiTableCell-root {
    border-bottom: 1px solid rgb(0 0 0 / 0.25);
  }
`;
