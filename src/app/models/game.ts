import { Player } from './player';

export class Game {
  public turn: number;
  public players: Array<Player>;

  constructor(players_: Array<Player>) {
    this.turn = 13; // end of game when each figure is complete
    this.players = players_;
  }
}
