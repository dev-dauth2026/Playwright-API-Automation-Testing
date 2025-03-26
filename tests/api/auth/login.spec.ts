// tests/api/auth/login.spec.ts
import { test, expect, request } from '@playwright/test';
import { testUser, invalidTestUser, emtpyEmailTestUser, emtpyPasswordTestUser} from '../../../utils/testData/authTestData';
import { login } from '../../../utils/apiHelpers/authHelper';

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext();
});

test('Login with valid credentials', async () => {
  const { res, body } = await login(apiContext, testUser);

  expect(res.status()).toBe(200);
  expect(body.responseCode).toBe(200);
  expect(body.message).toBe('User exists!');
});

test('Login with invalid credentials', async () => {
  const { res, body } = await login(apiContext, invalidTestUser);

  expect(res.status()).toBe(200);
  expect(body.responseCode).toBe(404);
});

test('Login with empty email field', async()=>{
    const {res, body} = await login(apiContext, emtpyEmailTestUser);

    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(404);
})

test('Login with empty password field', async() => {
    const {res, body}   = await login(apiContext, emtpyPasswordTestUser);

    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(404);
})