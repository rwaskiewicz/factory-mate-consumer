import { FactoryMate, FactoryMateAware, NumberGenerator, ProvidedValueGenerator } from 'factory-mate';
import { GroceryItem } from './GroceryItem';

@FactoryMateAware
export class GroceryItemFactory {
  public define() {
    const numberGenerator = new NumberGenerator();
    const providedValueGenerator = new ProvidedValueGenerator([
      'chewy cookies',
      'fresh cookies',
      'fresh ice cream',
      'melty chocolate',
      'sweet ice cream',
      'delicious cookies',
      'melty chocolate',
      'crispy cookies',
      'fresh crackers',
      'melty nougat'
    ]);

    FactoryMate.define(GroceryItem, (): GroceryItem => {
      const groceryItem = new GroceryItem();
      groceryItem.id = numberGenerator.nextValue();
      groceryItem.groceryName = providedValueGenerator.nextValue();
      return groceryItem;
    });

    FactoryMate.defineWithName(GroceryItem, 'specialGroceryItem', (): GroceryItem => {
      const groceryItem = new GroceryItem();
      groceryItem.id = 9999;
      groceryItem.groceryName = 'Limited Edition Chips';
      return groceryItem;
    });
  }
}
