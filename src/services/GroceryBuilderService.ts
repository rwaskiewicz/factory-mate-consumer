import { GroceryItem } from '../domain/GroceryItem';

export class GroceryItemBuilderService {
  public retrieveGroceryItem(): GroceryItem {
    const grocery = new GroceryItem();
    grocery.id = Math.floor(Math.random() * 1000);
    grocery.groceryName = this.generateSnackName();
    return grocery;
  }

  private generateSnackName(): string {
    const adjectives = ['chewy', 'melty', 'fresh', 'sweet', 'crispy', 'delicious'];
    const snacks = ['chips', 'cookies', 'ice cream', 'crackers', 'chocolate'];

    const randomAdjectiveIndex = this.getIndexInBounds(adjectives.length);
    const randomFoodIndex = this.getIndexInBounds(snacks.length);

    return adjectives[randomAdjectiveIndex] + ' ' + snacks[randomFoodIndex];
  }

  private getIndexInBounds(upperBound: number): number {
    return Math.floor(Math.random() * upperBound);
  }
}
