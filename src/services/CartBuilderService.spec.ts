import { FactoryMate } from 'factory-mate';
import { GroceryItem } from '../../src/domain/GroceryItem';
import { CartBuilderService } from '../../src/services/CartBuilderService';

describe('CartBuilderService', () => {
  let cartBuilderService;
  let mockGroceryBuilderService;

  beforeAll(() => {
    mockGroceryBuilderService = jasmine.createSpyObj('GrooceryBuilderService', ['retrieveGroceryItem']);

    cartBuilderService = new CartBuilderService(mockGroceryBuilderService);
  });

  it('builds a random cart of size 10', () => {
    const cart = cartBuilderService.buildRandomCart();

    expect(cart.length).toBe(10);
  });

  it('receives an item with the name chewy cookies', () => {
    const groceryItem: GroceryItem = FactoryMate.build(GroceryItem.name);
    mockGroceryBuilderService.retrieveGroceryItem.and.returnValue(groceryItem);

    const cart = cartBuilderService.buildRandomCart();

    expect(cart[0].groceryName).toBe('chewy cookies');
  });

  it('overrides an item with the name chunky cookies', () => {
    const groceryItem: GroceryItem = FactoryMate.build(GroceryItem.name,
      (u: GroceryItem) => {
        u.groceryName = 'chunky cookies';
      });
    mockGroceryBuilderService.retrieveGroceryItem.and.returnValue(groceryItem);

    const cart = cartBuilderService.buildRandomCart();

    expect(cart[0].groceryName).toBe('chunky cookies');
  });

  it('builds many of the same item', () => {
    const groceryItems: GroceryItem[] = FactoryMate.buildMany(GroceryItem.name, 3);

    expect(groceryItems.length).toBe(3);
    expect(groceryItems[2]).not.toBeUndefined();
  });
});
