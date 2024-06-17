export default class BoardHelper {
  static objectsGridFromHTMLBoard(board) {
    const grid = [];
    const rows = board.children;

    for (let i = 0; i < rows.length; i++) {
      const cols = rows[i].children;
      grid.push([]);
      for (let j = 0; j < cols.length; j++) {
        grid[i].push({
          coords: [i, j],
          htmlElement: cols[j],
        });
      }
    }

    return grid;
  }

  static gridFromHtmlSquares(squares) {
    const rows = Array.from(squares);
    const grid = [];
    rows.forEach(row => grid.push(Array.from(row.children)));
    return grid;
  }

  static extractIndicesFromGrid(grid, target) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j].htmlElement === target) {
          return [i, j];
        }
      }
    }
  }

  static querySquareByCoords(board, coords) {
    const grid = BoardHelper.objectsGridFromHTMLBoard(board);
    const row = coords[0];
    const col = coords[1];
    return grid[row][col].htmlElement;
  }
}