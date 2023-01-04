import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import { LayoutBox } from "./style";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <LayoutBox className="app">{children}</LayoutBox>;
};
