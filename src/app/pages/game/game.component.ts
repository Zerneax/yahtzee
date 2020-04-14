import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { Score } from 'src/app/models/score';
import { Figure } from 'src/app/models/figure';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.game = this.gameService.getGame();

    this.gameService.idActivePlayerEvent.subscribe((newActivePlayer: number) => {
      this.game.idActivePlayer = newActivePlayer;
    });
  }

  getPlayersOfTheGame(): Array<Player> {
    return this.game.players;
  }

  getScoreOfActivePlayer(): Score {
    return this.game.players[this.game.idActivePlayer].score;
  }

  validateFigure(figure: Figure): void {
    figure.available = false;
    this.gameService.changeActivePlayer();
  }

  onChangeFigurePartI(figure: Figure, event: any): void {
    figure.value = Number(event.target.value);
    this.getScoreOfActivePlayer().updateTotalI();
  }

  onChangeFigurePartII(figure: Figure, event: any): void {
    figure.value = Number(event.target.value);
    this.getScoreOfActivePlayer().updateTotalII();
  }
}
