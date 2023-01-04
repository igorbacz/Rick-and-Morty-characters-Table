import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { SearchBar } from "./components/SearchBar";
import { Layout } from "./components/Layout";
import { TableComponent } from "./components/TableComponent";

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SearchBar />
        <TableComponent theme={theme} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
