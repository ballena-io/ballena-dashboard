import styled from "styled-components";

import { Palette } from "../../constants/Palette";

const TableContainer = styled.nav`
  position: relative;
  padding: 0 0 4rem;
`;

const Table = styled.div`
  display: table;
  width: 80%;
  max-width: 80rem;
  margin: 0 auto;
  border: none;
`;

const TableHead = styled.div`
  display: table-header-group;
  position: sticky;
  top: 0;
  background-color: ${Palette.ACCENT_BLUE};
  color: ${Palette.DARK_BLUE};
  font-weight: 700;
`;

const TableBody = styled.div`
  display: table-row-group;
  color: ${Palette.DARK_BLUE};
`;

const TableRow = styled.div`
  display: table-row;

  ${TableBody} > &:hover {
    background-color: ${Palette.LIGHT_BLUE};
  }
`;

const TableCell = styled.div`
  display: table-cell;
  padding: 1rem 2rem;
  border: none;
`;

const ContractAddress = styled.a`
  text-decoration: none;
  color: ${Palette.DARK_BLUE};

  &:hover {
    text-decoration: underline;
  }
`;

const ContractTVL = styled.span`
  font-size: 1.1rem;
`;

export {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  ContractAddress,
  ContractTVL,
};
