import { TestBed } from '@angular/core/testing';

import { GameGuard } from './game.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameGuard', () => {
  let guard: GameGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule]
    });
    guard = TestBed.inject(GameGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
