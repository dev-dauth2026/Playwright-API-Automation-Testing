import { APIRequestContext } from '@playwright/test';

export async function getAllProducts(apiContext: APIRequestContext) {
  const res = await apiContext.get('/api/productsList');
  const body = await res.json();
  return { res, body };
}