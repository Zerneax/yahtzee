import { Injectable, EventEmitter } from '@angular/core';
import { Game } from '../models/game';
import { Figure } from '../models/figure';
import { Score } from '../models/score';
import { Player } from '../models/player';
import { Dice } from '../models/dice';

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

  getPlayersOfTheGame(): Array<Player> {
    return this.game.players;
  }

  changeActivePlayer(): void {
    this.resetDice();
    const lastIdPlayer = this.game.players.length - 1;
    if(lastIdPlayer == this.game.idActivePlayer) {
      this.game.idActivePlayer = 0;
      this.game.turn --;
    } else {
      this.game.idActivePlayer++;
    }
    this.idActivePlayerEvent.emit(this.game.idActivePlayer);
  }

  resetDice(): void {
    this.game.dices.forEach(dice => dice.lock = false);
  }

  getIdActivePlayer(): number {
    return this.game.idActivePlayer;
  }

  getScoreActivePlayer(): Score {
    return this.game.players[this.game.idActivePlayer].score;
  }

  getFigurePartIActivePLayer(): Array<Figure> {
    return this.game.players[this.game.idActivePlayer].score.firstPart;
  }

  getFigurePartIIActivePLayer(): Array<Figure> {
    return this.game.players[this.game.idActivePlayer].score.secondPart;
  }

  validateFigurePartI(figure: Figure): void {
    let figureToUpdate: Figure = this.getFigurePartIActivePLayer().filter(f => f.name == figure.name)[0];
    figureToUpdate.value = figure.value;
    figureToUpdate.available = false;
    this.updateScorePlayer();
    this.changeActivePlayer();
  }

  validateFigurePartII(figure: Figure): void {
    let figureToUpdate: Figure = this.getFigurePartIIActivePLayer().filter(f => f.name == figure.name)[0];
    figureToUpdate.value = figure.value;
    figureToUpdate.available = false;
    this.updateScorePlayer();
    this.changeActivePlayer();
  }

  updateScorePlayer(): void {
    this.getScoreActivePlayer().updateTotalI();
    this.getScoreActivePlayer().updateTotalII();
  }

  getDices(): Array<Dice> {
    return this.game.dices;
  }

  isEndOfGame(): boolean {
    return this.game.turn == 0;
  }

}
