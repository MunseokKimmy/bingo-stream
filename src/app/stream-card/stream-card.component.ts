import { Component } from '@angular/core';
import { CardSquare, Difficulty } from '../dto/card-square';
import { BingoCard } from '../dto/bingo-card.dto';
import { GenerateCardService } from '../services/generate-card.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stream-card',
  imports: [CommonModule],
  templateUrl: './stream-card.component.html',
  styleUrl: './stream-card.component.css'
})
export class StreamCardComponent {
  bingoCard: BingoCard;
  cardSquares: CardSquare[] = [];
  generateCardService: GenerateCardService;
  difficultyEnum = Difficulty;
  constructor() {
    this.generateCardService = GenerateCardService.getInstance();
    this.bingoCard = this.generateCardService.getRandomizedCard("Haboo");
    this.cardSquares = this.bingoCard.getSquares();
    console.log(this.cardSquares);
  }
}
