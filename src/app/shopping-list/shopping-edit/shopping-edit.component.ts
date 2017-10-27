import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onIngredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() { }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const newIngredient = new Ingredient(nameInput.value, Number(amountInput.value));

    this.onIngredientAdd.emit(newIngredient);
  }
}
