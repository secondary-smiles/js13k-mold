class State {
  id: string;
  tIndex: number;

  constructor(type: number, id: string) {
    this.tIndex = type;
    this.id = id;
  }

  get index() {
    return this.tIndex;
  }

  set index(v: number) {
    this.tIndex = v;
    this.setHooks();
  }

  setHooks() {
    this.setStateAttr();
  }

  setStateAttr() {
    let ob = document.querySelector<HTMLDivElement>("#" + this.id)!;
    switch (this.index) {
      case 0:
        // ob.style.background = "transparent";
        ob.className = "grid grid-active";
        ob.style.opacity = "1";
        break;
      case 1:
        ob.className = "grid grid-active mold";
        break;
      case 2:
        ob.className += " attractor";
        break;
      case 3:
        ob.className += " wall";
        break;
      default:
        break;
    }
  }
}

export { State };
