import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Player } from 'src/app/models/player';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    spyOn(router, 'navigate').and.callFake(() => Promise.resolve(true));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test nbPlayers valueChanges', () => {
    expect(component.playersForm.get('players').value.length).toEqual(0);
    component.playersForm.get('nbPlayers').patchValue(2);
    expect(component.playersForm.get('players').value.length).toEqual(2);

    component.playersForm.get('nbPlayers').patchValue(null);
    expect(component.playersForm.get('players').value.length).toEqual(2);

    component.playersForm.get('nbPlayers').patchValue(-1);
    expect(component.playersForm.get('players').value.length).toEqual(0);
  });

  it('should test updatePlayerName', () => {
    let player: Player = new Player(0);
    component.updatePlayerName(player, {target: {value: 'toto'}});
    expect(player.name).toEqual('toto');

    player.name = '';
    component.updatePlayerName(player, {target: {name: 'toto'}});
    expect(player.name).toBeUndefined();

    player.name = '';
    component.updatePlayerName(player, {test: {value: 'toto'}});
    expect(player.name).toBeUndefined();
  });

  it('should test createNewGame', () => {
    let players: Array<Player> = [];
    players.push(new Player(0));

    component.playersForm.get('players').patchValue(players);
    component.createNewGame();
    expect(router.navigate).toHaveBeenCalledWith(['game']);
  });
});
