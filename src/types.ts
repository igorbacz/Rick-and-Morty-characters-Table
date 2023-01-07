import { theme } from "./theme";

export interface Character {
  id?: number;
  name: string;
  gender: string;
  image: string;
  origin: OriginCharacter;
  species: string;
  status: string;
  type?: string;
  url?: string;
  locattion?: LocationCharacter;
  episode?: string[];
  created?: string;
}

interface LocationCharacter {
  name: string;
  url: string;
}

interface OriginCharacter {
  name: string;
  url?: string;
}

export interface _DATA {
   next: () => void;
   prev: () => void;
   jump: (page: number) => void;
   currentData: () => Character[];
   currentPage: number;
   maxPage: number;
 }

 type ThemeConfig = typeof theme;

 export interface Theme extends ThemeConfig {}
