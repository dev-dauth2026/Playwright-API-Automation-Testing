// tests/api/auth/login.spec.ts
import { test, expect, request } from '@playwright/test';
import { testUser, invalidTestuser } from '../../../utils/testData';
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
  const { res, body } = await login(apiContext, invalidTestuser);

  expect(res.status()).toBe(200);
  expect(body.responseCode).toBe(404);
});