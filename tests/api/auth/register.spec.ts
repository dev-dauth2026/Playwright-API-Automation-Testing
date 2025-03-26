import { test, expect, request } from '@playwright/test';
import {
  validRegisterUser,
  existingRegisterUser,
  emptyRegisterUser,
  invalidEmailUser,
  invalidMobileUser,
  missingPasswordUser,
  invalidTitleUser,
} from '../../../utils/testData/registerTestData';
import { createAccount } from '../../../utils/apiHelpers/authHelper';

let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: 'https://automationexercise.com',
  });
});

test.describe('Create Account - Positive and Negative Scenarios', () => {
  test('Should create account with valid data', async () => {
    const { res, body } = await createAccount(apiContext, validRegisterUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(201);
    expect(body.message).toBe('User created!');
  });

  test('Should fail with existing email', async () => {
    const { res, body } = await createAccount(apiContext, existingRegisterUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(400);
    expect(body.message).toContain('already exists');
  });

  test('Should fail with empty fields', async () => {
    const { res, body } = await createAccount(apiContext, emptyRegisterUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(400);
  });

  test('Should fail with invalid email', async () => {
    const { res, body } = await createAccount(apiContext, invalidEmailUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(400);
  });

  test('Should fail with invalid mobile number', async () => {
    const { res, body } = await createAccount(apiContext, invalidMobileUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(400);
  });

  test('Should fail with missing password', async () => {
    const { res, body } = await createAccount(apiContext, missingPasswordUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(400);
  });

  test('Should fail with unsupported title', async () => {
    const { res, body } = await createAccount(apiContext, invalidTitleUser);
    expect(res.status()).toBe(200);
    expect(body.responseCode).toBe(400);
  });
});