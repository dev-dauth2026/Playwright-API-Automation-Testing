import { test, expect, request } from '@playwright/test';
import { getAllProducts } from '../../../utils/apiHelpers/productHelper';

let apiContext;

test.beforeAll(async () => {
    apiContext = await request.newContext({
        baseURL: 'https://automationexercise.com',
    });

});


test.describe('GET /api/productsList - All Products API', () => {

  test('Should return 200 and a non-empty list of products', async () => {
    const { res, body } = await getAllProducts(apiContext);
    expect(res.status()).toBe(200);
    expect(body).toHaveProperty('products');
    expect(Array.isArray(body.products)).toBe(true);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('Each product should have expected keys', async () => {
    const { res, body } = await getAllProducts(apiContext);

    const firstProduct = body.products[0];

    expect(firstProduct).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(String),
      brand: expect.any(String),
      category: expect.any(Object),
    });
  });

  test('Should contain specific product name (e.g. Blue Top)', async () => {
    const { res, body } = await getAllProducts(apiContext);

    const productNames = body.products.map((p: any) => p.name.toLowerCase());
    expect(productNames).toContain('blue top');
  });

  test(' Should return 404 for incorrect endpoint', async () => {
    const badRes = await apiContext.get('/api/productList'); // typo
    expect(badRes.status()).toBe(404);
  });

  test('Should respond in less than 2 seconds (performance check)', async () => {
    const start = Date.now();
    const res = await apiContext.get('/api/productsList');
    const end = Date.now();

    expect(res.status()).toBe(200);
    const duration = end - start;
    expect(duration).toBeLessThan(2000); // under 2 seconds
  });

  test('Should return 405 when using POST on /productsList (method not allowed)', async () => {
    const res = await apiContext.post('/api/productsList');
  
    const body = await res.json();
  
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(405);
    expect(body).toHaveProperty('message');
    expect(body.message.toLowerCase()).toContain('not supported');
  });

});