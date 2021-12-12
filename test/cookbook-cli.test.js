const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      const message = myCookbookCli.add('hotdog', ['meat', 'bread']);

      expect(message).toEqual('Successfully added the following recipe: hotdog');
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('hotdog', ['meat', 'bread']);
      myCookbookCli.add('Vanila Cake', ['vanila', 'flour', 'egg']);

      const message = myCookbookCli.list();

      expect(message).toEqual(`You have the following recipes: hotdog,Vanila Cake`);

    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myCookbook);

      myCookbookCli.add('Tacos', ['tortillas', 'lime', 'cabbage']);

      const message = myCookbookCli.get('Tacos');

      expect(message).toEqual(`The ingredients for Tacos are: tortillas,lime,cabbage`);

    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
