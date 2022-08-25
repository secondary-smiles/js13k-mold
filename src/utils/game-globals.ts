import { Grid } from "../game/grid";

type Game = {
  globalx: number;
  globaly: number;
  board: HTMLDivElement;
  gridArr: Array<Grid> | undefined;
};

export type { Game };
