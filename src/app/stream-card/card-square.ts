export class CardSquare {
  constructor(private iconURL: string, private title: string, private summary: string, private conditions: string[], private difficulty: Difficulty, private points: number) {

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