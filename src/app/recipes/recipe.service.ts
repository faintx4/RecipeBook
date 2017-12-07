import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken',
      'A Big Plate of Chicken',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]),
    new Recipe(
      'Pizza',
      'Vegetable Pizza',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
      [
        new Ingredient('Mit', 3),
        new Ingredient('Milk', 5)
      ])
  ];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getSingleRecipe(id: number) {
    return this.recipes.find((recipe) => recipe.id === id);
  }

}
