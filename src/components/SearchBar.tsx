import React, { ChangeEvent, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SearchBox, HeaderBox, InputsBox, SearchBoxWrapper, PageContainer } from "./style";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CharactersContext } from "../context/ContextProvider";

export const SearchBar = () => {
  const appContext: { searchInput?: string; setSearchInput?: any; species?: string; setSpecies?: any } = useContext(CharactersContext);

  const { searchInput, setSearchInput, species, setSpecies } = appContext;

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
    </PageContainer>
  );
};
