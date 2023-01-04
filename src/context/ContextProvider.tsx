import { createContext, useEffect, useState } from "react";
import { Character } from "../types";
import React, { Dispatch } from "react";

// const defaultValue = {
//   data: [],
//   filteredData: [],
//   searchInput: "",
//   species: "",
//   setData: (value: string) => void,
//   filteredHandler: () => {void},

// };
const CharactersContext = createContext({});

const CharactersProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [species, setSpecies] = useState("");

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Could not fetch characters data");
    }
    const data = await response.json();
    setData(data.results);
    setFilteredData(data.results);
    return data.results;
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    filteredHandler();
  }, [searchInput, species]);

  const filteredHandler = () => {
    if (!species && searchInput) {
      let characters: Character[] = data.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredData(characters);
    } else if (species && !searchInput) {
      let characters: Character[] = data.filter((el) => el.species.toLowerCase() === species.toLowerCase());
      setFilteredData(characters);
    } else if (species && searchInput) {
      let characters: Character[] = data
        .filter((el) => el.species.toLowerCase() === species.toLowerCase())
        .filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredData(characters);
    }
  };
  return (
    <CharactersContext.Provider
      value={{
        data,
        setData,
        filteredData,
        setFilteredData,
        searchInput,
        setSearchInput,
        species,
        setSpecies,
        filteredHandler,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export { CharactersContext, CharactersProvider };
