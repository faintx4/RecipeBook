import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  recipe: Recipe;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private recipesService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (queryParams: Params) => {
        this.id = +queryParams['id'];
        this.editMode = queryParams['id'] != null;
        this.recipe = this.recipesService.getSingleRecipe(this.id);
      }
    );
  }

}
