import { createContext, useEffect, useState } from "react";
import { Character } from "../types";
import React from "react";

const CharactersContext = createContext({});

const CharactersProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [species, setSpecies] = useState<string[]>([]);

  const fetchData = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const result = await res.json();
    setData((_characters) => {
      return [..._characters, ...result.results];
    });
    if (result.info && result.info.next) {
      fetchData(result.info.next);
    }
  };

  useEffect(() => {
    fetchData("https://rickandmortyapi.com/api/character");
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    filteredHandler();
  }, [searchInput, species]);

  const filteredHandler = () => {
    if (!species && searchInput) {
      let characters: Character[] = data.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredData(characters);
    } else if (species.length > 0 && !searchInput) {
      console.log(species);
      let characters: Character[] = data.filter((el) => species.includes(el.species));
      setFilteredData(characters);
      console.log(characters);
    } else if (species.length > 0 && searchInput) {
      let characters: Character[] = data
        .filter((el) => species.includes(el.species))
        .filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
      setFilteredData(characters);
    } else {
      setFilteredData(data);
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
