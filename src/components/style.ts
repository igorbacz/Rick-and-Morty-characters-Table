import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 63px;
  height: 100vw;
`;
export const SearchBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 328px;
  height: 94px;
  padding-top: 55px;
  gap: 20px;
`;
export const HeaderBox = styled(Box)`
  font-family: Oswald;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  font-color: #1a2328;
`;
export const InputsBox = styled(Box)`
  gap: 44px;
  display: flex;
`;
export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;
export const StatusContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;

export const NameContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const SearchBoxWrapper = styled(Box)`
  width: 1161px;
  padding-bottom: 25px;
`;
export const PaginationContainer = styled(Box)`
  width: 1161px;
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;
