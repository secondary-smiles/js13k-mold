type Grid = {
  state: number;
  x: number;
  y: number;
};

function initAddGridListeners() {
  const objects = document.querySelectorAll(".grid");
  objects.forEach(o => {
    o.addEventListener("click", updateGridState)
  });
}

async function initRemoveGridListeners() {
  const objects = document.querySelectorAll(".grid");
  objects.forEach(o => {
    o.removeEventListener("click", updateGridState)
  })
}

function updateGridState(e: Event) {
  let grid = e.target!;
  grid.style.background = "black";
}

export { initAddGridListeners, initRemoveGridListeners };
export type { Grid };
