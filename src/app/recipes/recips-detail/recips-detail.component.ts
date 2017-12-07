import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recips-detail',
  templateUrl: './recips-detail.component.html',
  styleUrls: ['./recips-detail.component.scss']
})
export class RecipsDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (queryParams: Params) => {
        const recipeId = +queryParams['id'];
        this.recipe = this.recipeService.getSingleRecipe(recipeId);
      }
    );
  }


  sendRecipesIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
