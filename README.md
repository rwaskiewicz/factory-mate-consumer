# FactoryMateConsumer

The purpose of this example project is to demonstrate the usage 
[FactoryMate](https://github.com/rwaskiewicz/factory-mate) library.

## About
This sample project has an entry point at `src/App.ts`, which calls a service, `CartBuilderService`, to instantiate a 
number of domain objects of the type `GroceryItem`.  `CartBuilderService` relies on another service, 
`GroceryBuilderService`, in order to instantiate the `GroceryItem` entities and populating the 
`GroceryItem#groceryName` field. Once the `CartBuilderService` has built a certain number of entities, they are printed
out to the console. 

```
├── src
│   ├── App.ts
│   ├── domain
│   │   ├── GroceryItem.ts
│   │   └── GroceryItemFactory.ts
│   └── services
│       ├── CartBuilderService.spec.ts
│       ├── CartBuilderService.ts
│       └── GroceryBuilderService.ts
```

## Notable Files

### ```GroceryItemFactory.ts```
`GroceryItemFactory.ts` acts as a small factory class for defining how FactoryMate will define `GroceryItem` instances.  

The class is annotated with the `@FactoryMateAware` decorator, which allows the class to be marked by FactoryMate 
at runtime. This allows the `define()` method to be called automatically and register the template for the `GroceryItem` instance

### ```CartBuilderService.spec.ts```

`CartBuilderService.spec.ts` acts as a single Jasmine-based test file that is used to demonstrate the usage of 
`FactoryMate` within a test suite.  Instead of instantiating the `GroceryItem` object directly within the test suite 
(and theoretically across several other suites), an instance is simply instantiated via:

```const groceryItem: GroceryItem = FactoryMate.build(GroceryItem.name);```

This spec file also demonstrates how to override the default template as well as how to build an array containing more
than one of the desired object.

## Running the Demo Application

Run the following at the root of the project:

1. Install the required dependencies: `npm install`
2. Compile the project: `npm run compile`
3. Run the project: `npm start`

## Running the Demo Tests

Run the following at the root of the project:

1. Install the required dependencies: `npm install`
2. Start the Tests: `npm test`
