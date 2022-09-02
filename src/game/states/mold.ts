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
    this.p_edges = [];
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

  get edges() {
    let returnList: Array<Grid> = [];
    this.occupied.forEach((g) => {
      let s = g.surrounding();
      s.forEach((n) => {
        dumb_loop: if (n.state == 0) {
          returnList.push(g);
          break dumb_loop;
        }
      });
    });
    this.edges = returnList;
    return returnList;
  }

  set edges(newEdges: Array<Grid>) {
    this.p_edges = newEdges;
  }

  grow() {
    this.occupied.forEach((g) => {
      g.state = 1;
    });
    let item = this.edges[Math.floor(Math.random() * this.edges.length)];
    item.surrounding().forEach((g) => {
      if (g.state == 0) {
        this.occupied.push(g);
        g.state = 1;
      }
    });
  }
}

export { Mold };
