import { Grid } from "../grid";

class Mold {
  source: Grid;
  occupied: Array<Grid>;
  lState: number;

  constructor(source: Grid, state: number) {
    this.occupied = [];
    this.source = source;
    this.lState = state;
    this.occupied.push(source);
  }

  get state() {
    return this.lState;
  }

  set state(v: number) {
    this.lState = v;
    this.stateHooks();
  }

  stateHooks() {
    console.log("State has changed");
  }
}

export { Mold };
