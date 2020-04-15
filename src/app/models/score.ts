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
    this.firstPart.push(new Figure("Total de 1", 0, true));
    this.firstPart.push(new Figure("Total de 2", 0, true));
    this.firstPart.push(new Figure("Total de 3", 0, true));
    this.firstPart.push(new Figure("Total de 4", 0, true));
    this.firstPart.push(new Figure("Total de 5", 0, true));
    this.firstPart.push(new Figure("Total de 6", 0, true));

    this.secondPart.push(new Figure("Brelan", 0, true));
    this.secondPart.push(new Figure("Carré", 0, true));
    this.secondPart.push(new Figure("Full", 0, true));
    this.secondPart.push(new Figure("Petite suite", 0, true));
    this.secondPart.push(new Figure("Grande suite", 0, true));
    this.secondPart.push(new Figure("Yams", 0, true));
    this.secondPart.push(new Figure("Chance", 0, true));
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
