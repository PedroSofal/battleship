import { game } from "./gameHelpers.js";

export function playerPlays(row, col, enemy) {
  if (!game.gameOver() && game.turn === 0) {
    game.players[0].attack(row, col, enemy);
    game.updateBoards();
    game.nextPlayer();
    botPlays();
  }
}

function botPlays() {
  setTimeout(() => {
    game.players[1].attack(game.players[0]);
    game.updateBoards();
    game.nextPlayer();
  }, 0);
};