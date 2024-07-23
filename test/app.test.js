const request = require('supertest');
const app = require('../src/routes/index');

describe('Recipe API', () => {
  it('should add a recipe', async () => {
    const response = await request(app)
      .post('/recipes')
      .send({ title: 'Test Recipe', ingredients: 'Test Ingredients', instructions: 'Test Instructions' });
    expect(response.status).toBe(201);
    expect(response.body.recipes.length).toBe(4);
  });

  it('should retrieve all recipes', async () => {
    const response = await request(app).get('/recipes');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(4);
  });

  it('should update a recipe', async () => {
    const response = await request(app)
      .put('/recipes/0')
      .send({ title: 'Updated Recipe', ingredients: 'Updated Ingredients', instructions: 'Updated Instructions' });
    expect(response.status).toBe(200);
    expect(response.body.recipes[0].title).toBe('Updated Recipe');
  });

  it('should delete a recipe', async () => {
    const response = await request(app).delete('/recipes/0');
    expect(response.status).toBe(200);
    expect(response.body.recipes.length).toBe(3);
  });
});
