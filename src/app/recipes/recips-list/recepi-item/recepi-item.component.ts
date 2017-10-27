import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recepi-item',
  templateUrl: './recepi-item.component.html',
  styleUrls: ['./recepi-item.component.scss']
})
export class RecepiItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recepiSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecepiSelect(selectedRecipe) {
    this.recepiSelected.emit(selectedRecipe);
  }

}
