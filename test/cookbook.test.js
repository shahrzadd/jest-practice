const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const myCookbook = new Cookbook();

      myCookbook.addRecipe("Pasta", ['Chilli flakes', 'olive oil', 'parsley', 'garlic']);

      expect(myCookbook.recipes).toEqual({ Pasta: ['Chilli flakes', 'olive oil', 'parsley', 'garlic']});
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('Pizza', ['bread', 'meat', 'paste']);

      const myRecipes = myCookbook.listRecipes();

      expect(myRecipes).toEqual(['Pizza']);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const myCookbook = new Cookbook();
      myCookbook.addRecipe('Pancake', ['egg', 'flour', 'milk']);

      const getRecipe = myCookbook.getRecipe('Pancake');

      expect(getRecipe).toEqual(['egg', 'flour', 'milk']);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

      const myCookbook = new Cookbook;
      myCookbook.addRecipe('Omelette', ['egg', 'chesse', 'butter', 'cream']);
      myCookbook.addRecipe('Chocolate Mousse', ['egg', 'chocolate', 'butter', 'cream']);
      myCookbook.addRecipe('Mac and Chesse', ['milk', 'chesse', 'butter', 'cream']);
      myCookbook.addRecipe('Cake', ['egg', 'flour', 'butter', 'sugar']);

      myCookbook.removeRecipe('Cake');

      const myRecipes = myCookbook.listRecipes();
      expect(myRecipes).toEqual(['Omelette', 'Chocolate Mousse', 'Mac and Chesse']);
    });
  });
});
