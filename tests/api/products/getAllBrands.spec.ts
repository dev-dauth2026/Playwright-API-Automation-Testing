import { test, expect, request } from '@playwright/test';
import { getAllBrands, postToBrandsList } from '../../../utils/apiHelpers/brandHelper';

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: 'https://automationexercise.com',
  });
});

test.describe('GET /api/brandsList - All Brands API', () => {

  test('Should return 200 and a non-empty list of brands', async () => {
    const { res, body } = await getAllBrands(apiContext);

    expect(res.status()).toBe(200);
    expect(body).toHaveProperty('brands');
    expect(Array.isArray(body.brands)).toBe(true);
    expect(body.brands.length).toBeGreaterThan(0);
  });

  test('Should contain a known brand (e.g. Polo)', async () => {
    const { body } = await getAllBrands(apiContext);

    const brandNames = body.brands.map((b: any) => b.brand.toLowerCase());
    expect(brandNames).toContain('polo');
  });

  test('Should return method not allowed when using POST', async () => {
    const { res, body } = await postToBrandsList(apiContext);

    expect(res.status()).toBe(200); // actual status
    expect(body.responseCode).toBe(405);
    expect(body.message.toLowerCase()).toContain('not supported');
  });

});