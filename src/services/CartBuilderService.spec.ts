import { FactoryMate } from 'factory-mate';
import { GroceryItem } from '../../src/domain/GroceryItem';
import { CartBuilderService } from '../../src/services/CartBuilderService';

describe('CartBuilderService', () => {
  let cartBuilderService;
  let mockGroceryBuilderService;

  beforeAll(() => {
    mockGroceryBuilderService = jasmine.createSpyObj('GroceryBuilderService', ['retrieveGroceryItem']);

    cartBuilderService = new CartBuilderService(mockGroceryBuilderService);
  });

  describe('Default building', () => {
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
  });

  describe('Overriding properties', () => {
    it('overrides an item with the name chunky cookies and an ID of 23', () => {
      const groceryItem: GroceryItem = FactoryMate.build(GroceryItem.name,
        (u: GroceryItem) => {
          u.id = 23;
          u.groceryName = 'soft cookies';
        });
      mockGroceryBuilderService.retrieveGroceryItem.and.returnValue(groceryItem);

      const cart = cartBuilderService.buildRandomCart();

      expect(cart[0].id).toBe(23);
      expect(cart[0].groceryName).toBe('soft cookies');
    });
  });

  describe('Building many', () => {
    it('builds many of the same item', () => {
      const groceryItems: GroceryItem[] = FactoryMate.buildMany(GroceryItem.name, 3);

      expect(groceryItems.length).toBe(3);

      let expectedId = 3;
      groceryItems.forEach((groceryItem: GroceryItem) => {
        expect(groceryItem.id).toBe(expectedId++);
      });
    });
  });
});
