import { Figure } from './figure';

export class Score {
  private firstPart: Array<Figure>;
  private secondPart: Array<Figure>;

  constructor() {
    this.firstPart = new Array<Figure>();
    this.secondPart = new Array<Figure>();
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
}
