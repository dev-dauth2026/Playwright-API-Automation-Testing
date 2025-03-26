import {test, expect, request} from '@playwright/test';
import { searchProduct } from '../../../utils/apiHelpers/productHelper';

let apiContext;

test.beforeAll(async () =>{
    apiContext = await request.newContext({
        baseURL: 'https://automationexercise.com',
    });
});

test.describe('POST /api/searchProduct -Product Search API', ()=>{
    test('Should return 200 and products when valid product is searched', async ()=>{
        const {res, body} = await searchProduct(apiContext,'top');

        expect(res.status()).toBe(200);
        expect(body).toHaveProperty('products');
        expect(Array.isArray(body.products)).toBe(true);
        expect(body.products.length).toBeGreaterThan(0);
    })

    test('Should return expected keys in product object', async () =>{
        const { body } = await searchProduct(apiContext, 'jean');
        const product = body.products[0];

        expect(product).toMatchObject({
            id: expect.any(Number),
            name: expect.any(String),
            price: expect.any(String),
            brand: expect.any(String),
            category: expect.any(Object),
        })
    })

    test('Should return error when search_produuct is missing ', async ()=>{
        const res = await apiContext.post('/api/searchProduct');
        const body = await res.json();

        expect(res.status()).toBe(200);
        expect(body.responseCode).toBe(400);
        expect(body.message.toLowerCase()).toContain('missing');
    })

    test('Should return empty products for unknown keyword', async () =>{
        const { body }  = await searchProduct(apiContext, 'invalid-keyword-no-match');

        expect(body).toHaveProperty('products');
        expect(body.products.length).toBe(0);
    })

    test('Should respond under 2 seconds', async () =>{
        const start = Date.now();
        const { res } = await searchProduct(apiContext, 'tshirt');
        const duration = Date.now() - start;

        expect(res.status()).toBe(200);
        expect(duration).toBeLessThan(2000);
    })

})