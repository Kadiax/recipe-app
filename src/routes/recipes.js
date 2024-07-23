const express = require('express');
const router = express.Router();

let recipes = [
  {
    title: 'Spaghetti Carbonara',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 large eggs',
      '50g pecorino cheese',
      '50g parmesan',
      'Black pepper',
      'Salt',
    ],
    instructions:
      'Boil the spaghetti. Fry the pancetta until crispy. Beat the eggs and mix with cheese. Combine everything and season with black pepper and salt.',
  },
  {
    title: 'Chicken Curry',
    ingredients: [
      '1 kg chicken',
      '2 onions',
      '3 tomatoes',
      '3 garlic cloves',
      '1 inch ginger',
      '2 tbsp curry powder',
      '400ml coconut milk',
      'Salt',
      'Oil',
    ],
    instructions:
      'Sauté onions, garlic, and ginger. Add tomatoes and cook until soft. Add chicken and curry powder, cook until chicken is done. Add coconut milk and simmer.',
  },
  {
    title: 'Chocolate Cake',
    ingredients: [
      '200g flour',
      '200g sugar',
      '200g butter',
      '4 eggs',
      '50g cocoa powder',
      '2 tsp baking powder',
      '1 tsp vanilla extract',
      '100ml milk',
    ],
    instructions:
      'Preheat oven to 180°C. Mix dry ingredients. Beat butter and sugar until creamy. Add eggs one at a time, then vanilla. Combine wet and dry ingredients, add milk. Bake for 30 minutes.',
  },
];

router.post('/', (req, res) => {
  const recipe = req.body;
  recipes.push(recipe);
  res.status(201).send({ message: 'Recipe added', recipes });
});

router.get('/', (req, res) => {
  res.status(200).send(recipes);
});

router.put('/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < recipes.length) {
    recipes[index] = req.body;
    res.status(200).send({ message: 'Recipe updated', recipes });
  } else {
    res.status(400).send({ message: 'Invalid index' });
  }
});

router.delete('/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < recipes.length) {
    recipes.splice(index, 1);
    res.status(200).send({ message: 'Recipe deleted', recipes });
  } else {
    res.status(400).send({ message: 'Invalid index' });
  }
});

module.exports = router;
