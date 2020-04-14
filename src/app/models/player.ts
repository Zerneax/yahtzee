export class Player {
  public id: number;
  public name: string;
  public score: any; // TODO: in future

  constructor(id_: number) {
    this.id = id_;
    this.name = "";
    this.score = undefined;
  }
}
