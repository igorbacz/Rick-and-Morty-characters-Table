import React, { ChangeEvent, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SearchBox, HeaderBox, InputsBox, SearchBoxWrapper, PageContainer } from "./style";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Character } from "../types";
import { theme } from "../theme";
import { TableComponent } from "./TableComponent";

type Props = {
  dataConst: Character[];
};

export const SearchBar = ({ dataConst }: Props) => {
  const [searchInput, setSearchInput] = useState("");
  const [species, setSpecies] = useState("");

  const handleChangespecies = (event: any): void => {
    const target = event.target as HTMLInputElement;
    setSpecies(target.value);
  };

  const handleChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  };

  return (
    <PageContainer sx={{ backgroundColor: "secondary.light" }}>
      <SearchBoxWrapper>
        <SearchBox>
          <HeaderBox>Characters</HeaderBox>
          <InputsBox>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={handleChangeSearchInput}
              value={searchInput}
              size="small"
              color="secondary"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon color="warning" />
                  </IconButton>
                ),
              }}
              sx={{ width: "140px", borderRadius: "5px" }}
            />
            <FormControl size="small">
              <InputLabel id="demo-simple-select-label">Species</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={species}
                label="Species"
                onChange={handleChangespecies}
                size="small"
                sx={{ width: "140px", borderRadius: "5px" }}
                color="secondary"
              >
                <MenuItem value={"Human"}>Human</MenuItem>
                <MenuItem value={"Alien"}>Alien</MenuItem>
              </Select>
            </FormControl>
          </InputsBox>
        </SearchBox>
      </SearchBoxWrapper>
      <Box>
        <TableComponent dataConst={dataConst} theme={theme} species={species} searchInput={searchInput} />
      </Box>
    </PageContainer>
  );
};
