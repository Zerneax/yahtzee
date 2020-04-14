import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private game: Game;

  constructor() {}

  getGame(): Game {
    return this.game;
  }

  setGame(game: Game): void {
    this.game = game;
  }
}
