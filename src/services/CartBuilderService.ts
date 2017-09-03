import { GroceryItem } from '../domain/GroceryItem';
import { GroceryItemFactory } from '../domain/GroceryItemFactory';
import { GroceryItemBuilderService } from './GroceryBuilderService';

export class CartBuilderService {
  constructor(public groceryItemBuilderService: GroceryItemBuilderService) { }

  public buildRandomCart() {
    const numberOfItemsToBuild = 10;
    const cart: GroceryItem[] = [];

    for (let i = 0; i < numberOfItemsToBuild; i++) {
      cart.push(this.groceryItemBuilderService.retrieveGroceryItem());
    }
    return cart;
  }
}
