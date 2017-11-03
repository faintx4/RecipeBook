import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recips-detail',
  templateUrl: './recips-detail.component.html',
  styleUrls: ['./recips-detail.component.scss']
})
export class RecipsDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {

  }

}
