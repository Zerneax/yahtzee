export class Figure {
  public name: string;
  public value: number;
  public available: boolean;

  constructor(name_: string) {
    this.name = name_;
    this.value = 0;
    this.available = true;
  }
}
