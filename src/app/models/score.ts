import { Figure } from './figure';

export class Score {
  public firstPart: Array<Figure>;
  public totalI: number;
  public secondPart: Array<Figure>;
  public totalII: number;

  constructor() {
    this.firstPart = new Array<Figure>();
    this.totalI = 0;
    this.secondPart = new Array<Figure>();
    this.totalII = 0;
    this.initScore();
  }

  private initScore() {
    this.firstPart.push(new Figure("Total de 1"));
    this.firstPart.push(new Figure("Total de 2"));
    this.firstPart.push(new Figure("Total de 3"));
    this.firstPart.push(new Figure("Total de 4"));
    this.firstPart.push(new Figure("Total de 5"));
    this.firstPart.push(new Figure("Total de 6"));

    this.secondPart.push(new Figure("Brelan"));
    this.secondPart.push(new Figure("Carré"));
    this.secondPart.push(new Figure("Full"));
    this.secondPart.push(new Figure("Petite suite"));
    this.secondPart.push(new Figure("Grande suite"));
    this.secondPart.push(new Figure("Yams"));
    this.secondPart.push(new Figure("Chance"));
  }

  public updateTotalI() {
    let total: number = 0;
    this.firstPart.forEach(figure => {
      total += figure.value;
    });
    this.totalI = total >= 63 ? total + 35 : total;
  }

  public updateTotalII() {
    let total = 0;
    this.secondPart.forEach(figure => {
      total += figure.value;
    });
    this.totalII = total;
  }
}
