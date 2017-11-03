import {Component, Input, OnInit} from '@angular/core';
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
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) {}

  ngOnInit() {

  }

  sendRecipesIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}
