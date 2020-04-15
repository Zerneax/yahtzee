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

  public figurePartI: Array<Figure>;
  public figurePartII: Array<Figure>;
  public totalI: number = 0;
  public totalII: number = 0;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.copyFigure();
    this.calculateTotalI();
    this.calculateTotalII();

    this.gameService.idActivePlayerEvent.subscribe((newActivePlayer: number) => {
      this.copyFigure();
      this.calculateTotalI();
      this.calculateTotalII();
    });
  }

  getPlayersOfTheGame(): Array<Player> {
    return this.gameService.getPlayersOfTheGame();
  }

  getScoreOfActivePlayer(): Score {
    return this.gameService.getScoreActivePlayer();
  }

  validateFigureI(figure: Figure): void {
    this.gameService.validateFigurePartI(figure);
  }

  validateFigureII(figure: Figure): void {
    this.gameService.validateFigurePartII(figure);
  }

  onChangeFigurePartI(figure: Figure, event: any): void {
    figure.value = Number(event.target.value);
    this.calculateTotalI();
  }

  onChangeFigurePartII(figure: Figure, event: any): void {
    figure.value = Number(event.target.value);
    this.calculateTotalII();
  }

  calculateTotalI(): void {
    let total = 0;
    this.figurePartI.forEach(figure => total += figure.value);
    this.totalI = total;
  }

  calculateTotalII(): void {
    let total = 0;
    this.figurePartII.forEach(figure => total += figure.value);
    this.totalII = total;
  }

  copyFigure(): void {
    this.figurePartI = this.gameService.getFigurePartIActivePLayer().map(
      figure => new Figure(figure.name, figure.value, figure.available)
    );
    this.figurePartII = this.gameService.getFigurePartIIActivePLayer().map(
      figure => new Figure(figure.name, figure.value, figure.available)
    );
  }

  isActivePLayer(id: number): boolean {
    return id === this.gameService.getIdActivePlayer();
  }
}
