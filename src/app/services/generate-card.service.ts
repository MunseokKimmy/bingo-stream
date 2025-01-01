import { BingoCard } from "../dto/bingo-card.dto";
import { CardSquare, Difficulty } from "../dto/card-square";

export class GenerateCardService {
  private static instance: GenerateCardService;

  private constructor() {
    if (GenerateCardService.instance) {
      return GenerateCardService.instance;
    }
    GenerateCardService.instance = this;
  }

  public static getInstance(): GenerateCardService {
    return new GenerateCardService();
  }

  public getRandomizedCard(bingoID: string): BingoCard { 
    return new BingoCard(this.getFakeData(), "TheHaboo's Perfection Speedrun Bingo", "HABOO");

  }

  // declare the function 
shuffle = (array: CardSquare[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 

  private getFakeData(): CardSquare[] {
    const fakeData = [
      new CardSquare("", "2 Golden Parsnips", "Haboo gets (2) Golden Parsnip runs in a row.", ["In a single stream session, Haboo must harvest a golden parsnip on Spring 5, Year 1 in two consecutive runs."], Difficulty.Common, 2),
      new CardSquare("", "Auto-petter", "Haboo gets auto-petter in Skull Caverns.", [], Difficulty.Rare, 8),
      new CardSquare("", "No Spring Onions", "No 'Spring Onion's spawn for first check.", [], Difficulty.Common, 2),
      new CardSquare("", "Living Hat", "It's the Living Hat.", [], Difficulty.Legendary, 20),
      new CardSquare("", "Club Weapon", "Haboo gets club weapon in mines.", ["Any club weapon found in the mines."], Difficulty.Common, 2),
      new CardSquare("", "Mingo Wedding", "Haboo buys (2) flamingoes at the Egg Festival.", ["Must be during year 1 Egg Festival."], Difficulty.Common, 2),
      new CardSquare("", "Ancient Seed", "Haboo gets an ancient seed in the mines.", ["Must be from crates or monster drop in the mines."], Difficulty.Rare, 8),
      new CardSquare("", "3 Non-Garden Bundles", "(3) garden bundle checks fail.", ["Must be in one stream, does not need to be consecutive."], Difficulty.Uncommon, 4),
      new CardSquare("", "Bone Zone", "'Bone Zone' track plays during stream.", [], Difficulty.Common, 2),
      new CardSquare("", "Good Luck Mines", "Haboo gets 'good' luck on Day 2 mines.", ["When Haboo checks the TV the morning of Day 2 of the mines, in-game luck must be 'good' or 'best'."], Difficulty.Uncommon, 4),
      
      new CardSquare("", "Jade Drop", "Haboo gets a jade from the mines.", [""], Difficulty.Common, 2),
      new CardSquare("", "Boss Slime", "Haboo defeats a boss slime in the mines.", [""], Difficulty.Uncommon, 4),
      new CardSquare("", "Dwarf Scroll", "Haboo gets a dwarf scroll.", ["Can be from mines or artifact spots."], Difficulty.Common, 2),
      new CardSquare("", "Prismatic Shard", "Haboo gets a prizzy shard in Skull Caverns.", [""], Difficulty.Uncommon, 4),
      new CardSquare("", "Magnet Ring", "Haboo gets a magnet ring in the mines.", [""], Difficulty.Common, 2),

      new CardSquare("", "CC Completed", "Haboo completes the Community Center.", [""], Difficulty.Common, 2),
      new CardSquare("", "Carrot Seeds", "Haboo gets carrot seeds.", [""], Difficulty.Common, 2),
      new CardSquare("", "Fishing Books", "Haboo gets Lv 10 Fishing using books.", [""], Difficulty.Uncommon, 4),
      new CardSquare("", "Foraging Books", "Haboo gets Lv 10 Foraging using books.", [""], Difficulty.Uncommon, 4),
      new CardSquare("", "Combat Books", "Haboo gets Lv 10 Combat using books.", [""], Difficulty.Uncommon, 4),

      new CardSquare("", "Mining Lv 6", "Haboo reaches Lv 6 Mining.", [""], Difficulty.Common, 2),
      new CardSquare("", "Fairy", "Haboo gets a Crop Fairy event.", [""], Difficulty.Common, 2),
      new CardSquare("", "Ginger Island", "Haboo sails to Ginger Island.", [""], Difficulty.Rare, 8),
      new CardSquare("", "Skull Caverns", "Haboo enters Skull Caverns.", [""], Difficulty.Uncommon, 4),
      new CardSquare("", "7 Floor Shaft", "Haboo uses a Skull Cavern shaft and it transports him 7 floors.", [""], Difficulty.Common, 2),
    ];
    return this.shuffle(fakeData);
  }
}