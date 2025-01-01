import { CardSquare } from "./card-square";

export class BingoCard {
  squares: CardSquare[];
  cardTitle: string;
  cardSubtitle: string;

  constructor(squares: CardSquare[], cardTitle: string, cardSubtitle: string) {
    this.squares = squares;
    this.cardTitle = cardTitle;
    this.cardSubtitle = cardSubtitle;
  }

  getSquares(): CardSquare[] {
    return this.squares;
  }

  setSquares(squares: CardSquare[]) {
    this.squares = squares;
  }

  getCardTitle(): string {
    return this.cardTitle;
  } 

  setCardTitle(cardTitle: string) {
    this.cardTitle = cardTitle;
  }

  getCardSubtitle(): string {
    return this.cardSubtitle;
  }

  setCardSubtitle(cardSubtitle: string) {
    this.cardSubtitle = cardSubtitle;
  }
}