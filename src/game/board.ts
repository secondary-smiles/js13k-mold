async function initBoard(x: number, y: number, board: HTMLDivElement) {
    await initGrid(x, y, board);
}

async function initGrid(xnum: number, ynum: number, board: HTMLDivElement) {
    for (let y = 0; y < ynum; y++) {
        board.innerHTML += `<div class='row' id='row-${y}'><div>`;
        for (let x = 0; x < xnum; x++) {
            const row = document.querySelector(`#row-${y}`)!;
            row.innerHTML += `<div class='grid' id='grid-${x}'><div>`;
        }
    }
}

export {initBoard}