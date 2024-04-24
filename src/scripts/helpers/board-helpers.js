export default class BoardHelper {
  static objectsGridFromHtmlSquares(squares) {
    const grid = [];
    const matrix = Array.from(squares).map(row => Array.from(row.children)).flat();

    for (let i = 0; i < matrix.length; i++) {
      const row = Array.from(matrix[i].children);
      grid.push([]);
      for (let j = 0; j < row.length; j++) {
        grid[i].push({
          coords: [i, j],
          htmlElement: row[j],
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
    const grid = BoardHelper.objectsGridFromHtmlSquares([board]);
    const row = coords[0];
    const col = coords[1];
    return grid[0][row].htmlElement.children[col];
  }
}