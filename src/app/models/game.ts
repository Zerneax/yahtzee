import { Player } from './player';
import { Dice } from './dice';

export class Game {
  public turn: number;
  public players: Array<Player>;
  public idActivePlayer: number;
  public dices: Array<Dice>;

  constructor(players_: Array<Player>) {
    this.turn = 13; // end of game when each figure is complete
    this.players = players_;
    this.idActivePlayer = 0;
    this.initDices();
  }

  initDices(): void{
    this.dices = new Array<Dice>();
    for (var i = 0; i < 5; i++) {
      this.dices.push(new Dice());
    }
  }
}
