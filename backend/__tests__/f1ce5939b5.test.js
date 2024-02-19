// ********RoostGPT********
// Test generated by RoostGPT for test NodeTesting using AI Type Open AI and AI Model gpt-4



// ********RoostGPT********
const request = require('supertest');
const express = require('express');

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin");
  next();
});

describe('Middleware Test', () => {
  test('Check CORS headers', async () => {
    const response = await request(app).get('/');
    
    expect(response.headers['access-control-allow-origin']).toEqual('*');
    expect(response.headers['access-control-allow-headers']).toEqual('Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin');
  });
});
