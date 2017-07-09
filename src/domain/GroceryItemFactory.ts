import { FactoryMate, FactoryMateAware } from 'factory-mate';
import { GroceryItem } from './GroceryItem';

@FactoryMateAware
export class GroceryItemFactory {
    public define() {
        FactoryMate.define(GroceryItem, (): GroceryItem => {
            const groceryItem = new GroceryItem();
            groceryItem.groceryName = 'chewy cookies';
            return groceryItem;
        });
    }
}
