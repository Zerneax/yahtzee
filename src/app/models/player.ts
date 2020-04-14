import { Score } from './score';

export class Player {
  public id: number;
  public name: string;
  public score: Score; // TODO: in future

  constructor(id_: number) {
    this.id = id_;
    this.name = "";
    this.score = new Score();
  }
}
