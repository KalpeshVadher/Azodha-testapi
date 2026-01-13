const request = require('supertest');
const app = require('../src/server');

describe('API Tests', () => {
  test('GET /health should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /predict should return score', async () => {
    const response = await request(app).get('/predict');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('score');
    expect(typeof response.body.score).toBe('number');
  });
});
