import { FactoryMate, FactoryMateAware } from 'factory-mate';
import { NumberGenerator } from 'factory-mate';
import { GroceryItem } from './GroceryItem';

@FactoryMateAware
export class GroceryItemFactory {
    public define() {
        const numberGenerator = new NumberGenerator();
        FactoryMate.define(GroceryItem, (): GroceryItem => {
            const groceryItem = new GroceryItem();
            groceryItem.id = numberGenerator.nextValue();
            groceryItem.groceryName = 'chewy cookies';
            return groceryItem;
        });
    }
}
