import {test, expect, request}  from '@playwright/test'
import { describe } from 'node:test';
import { createAccount, deleteAccount } from '../../../utils/apiHelpers/authHelper';
import { emtpyEmailTestUser, emtpyPasswordTestUser, invalidTestUser, testUser } from '../../../utils/testData/authTestData';
import { validRegisterUser } from '../../../utils/testData/registerTestData';

let apiContext;
test.beforeAll(async () =>{
    apiContext = await request.newContext({
        baseURL: 'https://automationexercise.com',
    });
});

describe('DELETE Account /api/deleteAccount - Positive and Negative Scenarios', ()=>{
    test('Should delete acount with /api/deleteAccount', async () =>{
        const { email, password } = await createAccount(apiContext, validRegisterUser);
        const { res, body } = await deleteAccount(apiContext,{email,password});
        
        expect(res.status()).toBe(200);
        expect(body).toMatchObject({
            responseCode:200,
            message: 'Account deleted!',
        })
    })

    test('Should return 400 or error message with invalid crednetials', async ()=>{
        const { res, body } = await deleteAccount(apiContext,invalidTestUser);
      
        expect(res.status()).toBe(200);
        expect(body.responseCode).toBe(404);
        expect(body.message.toLowerCase()).toContain('account not found!');

    })

    test('Should fail when email is missing', async ()=>{
        const { res, body } = await deleteAccount(apiContext, emtpyEmailTestUser);

        expect(res.status()).toBe(200);
        expect(body.responseCode).not.toBe(200);

    })

    test('Should fail when password is missing', async()=>{
        const { res, body} = await deleteAccount(apiContext, emtpyPasswordTestUser);

        expect(res.status()).toBe(200);
        expect(body.responseCode).not.toBe(200);
    })

    test('Should return response in under 2 seconds', async()=>{
        const { email, password } = await createAccount(apiContext, validRegisterUser);
        const start = Date.now();
        const { res } = await deleteAccount(apiContext,{email,password});
        const duration = Date.now() - start;

        expect(res.status()).toBe(200);
        expect(duration).toBeLessThan(2000);
    })

})