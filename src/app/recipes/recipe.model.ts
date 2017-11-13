import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  static idCounter = 1;
  public id: number;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.id = Recipe.idCounter++;
  }
}
