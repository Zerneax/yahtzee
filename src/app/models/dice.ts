export class Dice {
  public value: number;
  public lock: boolean;

  constructor() {
    this.value = undefined;
    this.lock = false;
  }
}
