import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-recips-list',
  templateUrl: './recips-list.component.html',
  styleUrls: ['./recips-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

}
