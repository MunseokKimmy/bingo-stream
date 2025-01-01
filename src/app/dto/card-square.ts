export class CardSquare {
  iconURL: string;
  title: string;
  summary: string; 
  conditions: string[]; 
  difficulty: Difficulty; 
  points: number;
  constructor(iconURL: string, title: string, summary: string, conditions: string[], difficulty: Difficulty, points: number) {
    this.iconURL = iconURL;
    this.title = title;
    this.summary = summary;
    this.conditions = conditions;
    this.difficulty = difficulty;
    this.points = points;
  }
}

export enum Difficulty {
  "Common",
  "Uncommon",
  "Rare",
  "Legendary"
}

export enum DifficultyColorCodes {
  "#747172",
  "#448033",
  "#3C3D7E",
  "#738608"
}