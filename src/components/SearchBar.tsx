import React, { ChangeEvent, useContext } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SearchBox, HeaderBox, InputsBox, SearchBoxWrapper } from "./style";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { CharactersContext } from "../context/ContextProvider";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";

export const SearchBar = () => {
  const appContext: { searchInput?: string; setSearchInput?: any; species?: any; setSpecies?: any } = useContext(CharactersContext);

  const { searchInput, setSearchInput, species, setSpecies } = appContext;
  const speciesArray = ["Alien", "Human"];

  const handleChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  };

  const handleChangeSpecies = (event: SelectChangeEvent<typeof species>) => {
    const {
      target: { value },
    } = event;
    setSpecies(typeof value === "string" ? value.split(",") : value);
  };

  return (
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
            <InputLabel color="secondary" id="demo-simple-select-label">
              Species
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={species}
              onChange={handleChangeSpecies}
              input={<OutlinedInput label="Species" />}
              renderValue={(species) => species.join(", ")}
              size="small"
              sx={{ width: "140px", borderRadius: "5px" }}
              color="secondary"
            >
              {speciesArray.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox color="secondary" checked={speciesArray.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </InputsBox>
      </SearchBox>
    </SearchBoxWrapper>
  );
};
