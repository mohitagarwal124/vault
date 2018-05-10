const request = require('supertest');
const app = require('../server');
const mockData = require('./mockData');
const bootstrap = require('../Bootstrap');

beforeAll(async() => {
    await bootstrap.startInitialProcess();
});

describe('API Test', () => {
  test('/vault/object post request', async () => {
    const response = await request(app).post('/vault/object').set('Accept', 'application/json')
      .send(mockData.sentData);
    expect(response.body.statusCode).toBe(200);
  });
  test('/vault/object/mykey get request', async () => {
    const response = await request(app).get('/vault/object/mykey')
    .set('Accept', 'application/json');
    expect(response.body.statusCode).toBe(200);
  });
  test('/vault/object/mykey get request with timestamp', async () => {
    const response = await request(app).get('/vault/object/mykey?timestamp=1525976988669')
    .set('Accept', 'application/json');
    expect(response.body.statusCode).toBe(200);
  });
});
