import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recepi-item',
  templateUrl: './recepi-item.component.html',
  styleUrls: ['./recepi-item.component.scss']
})
export class RecepiItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
