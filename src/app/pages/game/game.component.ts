import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { Score } from 'src/app/models/score';

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
  }

  getPlayersOfTheGame(): Array<Player> {
    return this.game.players;
  }

  getScoreOfActivePlayer(): Score {
    return this.game.players[this.game.idActivePlayer].score;
  }
}
