import { Grid } from "../grid";

class Mold {
  source: Grid;
  occupied: Array<Grid>;
  lState: number;
  p_edges: Array<Grid>;

  constructor(source: Grid, state: number) {
    this.occupied = [];
    this.source = source;
    this.lState = state;
    this.occupied.push(source);
    this.p_edges = this.occupied;
  }

  get state() {
    return this.lState;
  }

  set state(v: number) {
    this.lState = v;
    this.stateHooks();
  }

  stateHooks() {
    // console.log("State has changed");
  }

  calcEdges() {
    let returnList: Array<Grid> = [];
    this.occupied.forEach((g) => {
      let s = g.surrounding();
      s.forEach((n) => {
        if (n.state == 0) {
          returnList.push(g);
            return;
        }
      });
    });
    this.edges = returnList;
    return returnList;
  }

  get edges() {
    this.p_edges = this.calcEdges();
    return this.p_edges;
  }

  set edges(newEdges: Array<Grid>) {
    this.p_edges = newEdges;
  }

  grow() {
    let item = this.p_edges[Math.floor(Math.random() * this.p_edges.length)];
    item.surrounding().forEach((g) => {
      if (g.state == 0) {
        this.occupied.push(g);
        g.state = 1;
      }
    });
  }
}

export { Mold };