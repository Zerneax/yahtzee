export class Figure {
  public name: string;
  public value: number;
  public available: boolean;

  constructor(name_: string, value_: number, available_: boolean) {
    this.name = name_;
    this.value = value_;
    this.available = available_;
  }
}
