//test.js

const server = require('./server.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('User Endpoints', () => {

    it('GET /images should show all images', async () => {
      const res = await requestWithSupertest.get('/images');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body[0]).toHaveProperty('tags')
    });

    it('GET /images/:id should show a user', async () => {
        const res = await requestWithSupertest.get('/images/60934c296497484a80ad478d')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('title')
        expect(res.body.title).toEqual("coffee")
    });

    it('GET /images/search/:science should have at least 2 results', async () => {
        const res = await requestWithSupertest.get('/images/search/science')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0]).toHaveProperty('tags')
        expect(res.body[1]).toHaveProperty('tags')
    });
  
  });