import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Player } from 'src/app/models/player';
import { Router } from '@angular/router';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: GameService;
  let router: Router;

  // mock
  const players: Array<Player> = new Array<Player>();
  players.push(new Player(0));
  players.push(new Player(1));

  let game: Game = new Game(players);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;

    gameService = TestBed.get(GameService);
    gameService.setGame(game);

    router = TestBed.get(Router);
    spyOn(router, 'navigate').and.callFake(() => Promise.resolve(true));

    spyOn(component, 'copyFigure').and.callThrough();
    spyOn(component, 'calculateTotalI').and.callThrough();
    spyOn(component, 'calculateTotalII').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.dices).not.toBeUndefined();
    expect(component.dices.length).toEqual(5);
    expect(component.throw).toEqual(0);
    expect(component.totalI).toEqual(0);
    expect(component.totalII).toEqual(0);
    expect(component.figurePartI).not.toBeUndefined();
    expect(component.figurePartI.length).toEqual(6);
    expect(component.figurePartII).not.toBeUndefined();
    expect(component.figurePartII.length).toEqual(7);
    expect(component.copyFigure).toHaveBeenCalled();
    expect(component.calculateTotalI).toHaveBeenCalled();
    expect(component.calculateTotalII).toHaveBeenCalled();
  });

  it('should test getScoreOfActivePlayer', () => {
    let score = component.getScoreOfActivePlayer();
    expect(score).not.toBeUndefined();
    expect(score.firstPart).not.toBeUndefined();
    expect(score.firstPart.length).toEqual(6);
    expect(score.secondPart).not.toBeUndefined();
    expect(score.secondPart.length).toEqual(7);
    expect(score.totalI).toEqual(0);
    expect(score.totalII).toEqual(0);
  });

  it('should test goHome', () => {
    component.goHome();
    expect(router.navigate).toHaveBeenCalled();
  });

  it('should test isMaxThrow', () => {
    component.throw = 0;
    expect(component.isMaxThrow()).toBeFalse();

    component.throw = 3;
    expect(component.isMaxThrow()).toBeTrue();
  });

  it('should test calculateScore', () => {
    let player: Player = new Player(0);
    expect(component.calculateScore(player)).toEqual(0);

    player.score.totalI = 10;
    player.score.totalII = 20;
    expect(component.calculateScore(player)).toEqual(30);
  });

  it('should test rollDices', () => {
    component.dices.forEach(dice => dice.value = 0);
    component.throw = 0;
    component.rollDices();

    expect(component.throw).toEqual(1);
    component.dices.forEach(dice => expect(dice.value).not.toEqual(0));
  });

  it('should test validateFigureI', () => {
    spyOn(gameService, 'validateFigurePartI').and.callThrough();

    component.validateFigureI(component.figurePartI[0]);
    expect(gameService.validateFigurePartI).toHaveBeenCalled();
  });

  it('should test validateFigureII', () => {
    spyOn(gameService, 'validateFigurePartII').and.callThrough();

    component.validateFigureII(component.figurePartII[0]);
    expect(gameService.validateFigurePartII).toHaveBeenCalled();
  });

  it('should test onChangeFigurePartI', () => {
    component.onChangeFigurePartI(component.figurePartI[0], {target: {value: 10}});
    expect(component.figurePartI[0].value).toEqual(10);
    expect(component.calculateTotalI).toHaveBeenCalled();
  });

  it('should test onChangeFigurePartII', () => {
    component.onChangeFigurePartII(component.figurePartII[0], {target: {value: 10}});
    expect(component.figurePartII[0].value).toEqual(10);
    expect(component.calculateTotalII).toHaveBeenCalled();
  });

  it('should test idActivePlayerEvent event', () => {
    component.throw = 1;

    gameService.idActivePlayerEvent.emit(1);
    expect(component.throw).toEqual(0);
    expect(component.copyFigure).toHaveBeenCalled();
    expect(component.calculateTotalI).toHaveBeenCalled();
    expect(component.calculateTotalII).toHaveBeenCalled();
  });
});
