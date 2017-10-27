import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recips-detail',
  templateUrl: './recips-detail.component.html',
  styleUrls: ['./recips-detail.component.scss']
})
export class RecipsDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
