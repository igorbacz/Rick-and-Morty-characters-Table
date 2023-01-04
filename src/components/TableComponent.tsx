import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { NameContainer, PaginationContainer, StatusContainer, StyledImg } from "./style";
import { Box, Typography, Tooltip, Pagination } from "@mui/material";
import { Character, Theme, _DATA } from "../types";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HelpIcon from "@mui/icons-material/Help";
import usePagination from "../hooks/usePagination";
import { CharactersContext } from "../context/ContextProvider";

type Props = {
  theme: Theme;
};

export const TableComponent = ({ theme }: Props) => {
  //@ts-ignore
  const appContext: { filteredData: Character[]; setFilteredData: any; species: string; searchInput: string } = useContext(CharactersContext);
  const { filteredData, setFilteredData, species, searchInput } = appContext;

  useEffect(() => {
    setFilteredData(filteredData);
  }, [species, searchInput]);

  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const count = Math.ceil(filteredData.length / PER_PAGE);

  const _DATA = usePagination(filteredData, PER_PAGE);

  const handleChangePagination = (e, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Box>
        <Table sx={{ width: 1161, height: 457, backgroundColor: "white", boxShadow: " 0px 2px 18px 0px #DDE3EC" }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ height: 42 }}>
              <TableCell sx={{ width: "43px" }}>
                <CheckBoxOutlineBlankIcon color="secondary" />
              </TableCell>
              <TableCell align="left" sx={{ width: "100px" }}>
                <Typography variant="subtitle1">Name</Typography>
              </TableCell>
              <TableCell align="left" sx={{ width: "83px" }}>
                <Typography variant="subtitle1">Avatar</Typography>
              </TableCell>
              <TableCell align="left" sx={{ width: "40px" }}>
                <Typography variant="subtitle1">Origin</Typography>
              </TableCell>
              <TableCell align="left" sx={{ width: "83px" }}>
                <Typography variant="subtitle1">Gender</Typography>
              </TableCell>
              <TableCell align="left" sx={{ width: "83px" }}>
                <Typography variant="subtitle1">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              ? _DATA.currentData().map((item: Character) => (
                  <TableRow
                    key={item.name}
                    sx={{
                      backgroundColor: item.status === "Dead" ? "#F6F8FA" : "white",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <CheckBoxOutlineBlankIcon color="secondary" />
                    </TableCell>
                    <TableCell align="left">
                      <NameContainer>
                        <Box>
                          <Typography variant="h6">{item.name}</Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" color={theme.palette.info.light}>
                            {item.species}
                          </Typography>
                        </Box>
                      </NameContainer>
                    </TableCell>
                    <TableCell align="left">
                      <StyledImg src={item.image} alt="" />
                    </TableCell>
                    <TableCell align="left">
                      <Tooltip title={item.origin.name}>
                        <Typography variant="h5">{item.origin.name}</Typography>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="h5">{item.gender}</Typography>
                    </TableCell>
                    <TableCell align="left">
                      <StatusContainer>
                        <Box>
                          {item.status === "Alive" ? <CheckCircleOutlineIcon color="success" /> : null}
                          {item.status === "Dead" ? <ErrorOutlineIcon color="error" /> : null}
                          {item.status === "unknown" ? <HelpIcon color="secondary" /> : null}
                        </Box>
                        <Box>
                          <Typography variant="h5" color={item.status === "unknown" ? theme.palette.primary.light : theme.palette.success.light}>
                            {item.status}
                          </Typography>
                        </Box>
                      </StatusContainer>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </Box>
      <PaginationContainer>
        <Pagination count={count} page={page} color="secondary" variant="outlined" shape="rounded" onChange={handleChangePagination} />
      </PaginationContainer>
    </>
  );
};
