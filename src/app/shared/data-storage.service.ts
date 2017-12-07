import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://ng-recipe-udemy-24541.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  loadRecipes() {
    this.http.get('https://ng-recipe-udemy-24541.firebaseio.com/recipes.json')
      .subscribe(
        (response: Response) => {
          console.log(response);
          const recipes: Recipe[] = response.json();

          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
