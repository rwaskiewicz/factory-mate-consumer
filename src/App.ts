import { GroceryItem } from './domain/GroceryItem';
import { CartBuilderService } from './services/CartBuilderService';
import { GroceryItemBuilderService } from './services/GroceryBuilderService';

const groceryItemBuilderService = new GroceryItemBuilderService();
const cartBuilderService = new CartBuilderService(groceryItemBuilderService);
const groceriesInCart = cartBuilderService.buildRandomCart();

groceriesInCart.forEach((grocery: GroceryItem, index: number) => {
  console.log(`Item ${index + 1}: ${JSON.stringify(grocery)}`);
});
