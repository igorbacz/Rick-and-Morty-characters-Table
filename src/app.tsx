import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Character } from "./types";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./components/Layout";

const App = (): JSX.Element => {
  const [dataConst, setDataConst] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error("Could not fetch characters data");
    }
    const data = await response.json();
    setDataConst(data.results);
    return data.results;
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SearchBar dataConst={dataConst}></SearchBar>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
