import { Component } from '@angular/core';
import { CardSquare } from './card-square';

@Component({
  selector: 'app-stream-card',
  imports: [],
  templateUrl: './stream-card.component.html',
  styleUrl: './stream-card.component.css'
})
export class StreamCardComponent {
  cardTitle: string = "";
  cardSquares: CardSquare[] = [];
  constructor() {
    this.cardTitle = "TheHaboo's Perfection Speedrun Bingo";
  }
}
