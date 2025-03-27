// tests/utils/apiHelpers/authHelper.ts

import { APIRequestContext } from '@playwright/test';

export async function login(apiContext: APIRequestContext, user: { email: string, password: string }) {
  const res = await apiContext.post('/api/verifyLogin', {
    form: {
      email: user.email,
      password: user.password,
    },
    headers: {
      Referer: 'https://automationexercise.com',
    },
  });

  const text = await res.text();
  const body = JSON.parse(text);

  return { res, body };
}

export async function createAccount(apiContext: APIRequestContext, userData: Record<string, string>) {
    const res = await apiContext.post('/api/createAccount', {
        form: userData,
        headers: {
          Referer: 'https://automationexercise.com',
        },
      
    });
  
    const text = await res.text();
    const body = JSON.parse(text);
  
    return { 
        email: userData.email,
        password: userData.password, 
        res, 
        body };
  }

export async function deleteAccount(apiContext:APIRequestContext, user: { email: string, password: string}){
    const res = await apiContext.delete('/api/deleteAccount',{
        form: {
            email: user.email,
            password: user.password,
        },
        headers: {
            Referer: 'https://automationexercise.com',
        },
    });

    const text = await res.text();
    const body = JSON.parse(text);

    return { res, body };
}