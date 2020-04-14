import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Player } from 'src/app/models/player';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public playersForm: FormGroup;
  public players: Array<string>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.players = new Array<string>();

      this.playersForm = this.formBuilder.group({
        nbPlayers: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(4)]),
        players: new FormControl([], Validators.required)
      });

      this.playersForm.get('nbPlayers').valueChanges.subscribe((newValue) => {
        if (newValue != null) {
          if (newValue < 0) {
            this.playersForm.get('nbPlayers').patchValue(0, {event: false});
          } else {
            const arrayOfNewPlayers = new Array<Player>();
            for(var i = 0; i < newValue; i++) {
              arrayOfNewPlayers.push(new Player(i));
            }
            this.playersForm.get('players').patchValue(arrayOfNewPlayers);
          }
        }
      });
  }

  updatePlayerName(player: Player, event: any) {
    player.name = event?.target?.value;
  }

  createNewGame() {
      const game: Game = new Game(this.playersForm.get("players").value);
      console.log("game", game);
  }

}
