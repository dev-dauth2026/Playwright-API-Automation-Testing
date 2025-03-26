import { test, expect, request } from '@playwright/test';
import { createAccount } from '../../../utils/apiHelpers/authHelper';
import { newTestUser, existingUser } from '../../../utils/testData';

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: 'https://automationexercise.com',
  });
});

test('Create account with new user (should succeed)', async () => {
  const { res, body } = await createAccount(apiContext, newTestUser);

  console.log('Create account response:', body);

  expect(res.status()).toBe(200);
  expect(body.responseCode).toBe(201);
  expect(body.message).toBe('User created!');
});

test('Create account with existing email (should fail)', async () => {
  const { res, body } = await createAccount(apiContext, existingUser);

  console.log('Existing account response:', body);

  expect(res.status()).toBe(200);
  expect(body.responseCode).toBe(400);
  expect(body.message).toContain('already exists');
});