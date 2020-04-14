import { Injectable, EventEmitter } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game: Game;
  public idActivePlayerEvent = new EventEmitter<number>();

  constructor() {}

  getGame(): Game {
    return this.game;
  }

  setGame(game: Game): void {
    this.game = game;
  }

  changeActivePlayer(): void {
    const lastIdPlayer = this.game.players.length - 1;
    this.game.idActivePlayer =
        this.game.idActivePlayer == lastIdPlayer ? 0 : ++this.game.idActivePlayer;
    this.idActivePlayerEvent.emit(this.game.idActivePlayer);
  }
}
