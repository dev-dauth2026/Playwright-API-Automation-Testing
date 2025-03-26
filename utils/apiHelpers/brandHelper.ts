import { APIRequestContext } from '@playwright/test';

export async function getAllBrands(apiContext: APIRequestContext) {
  const res = await apiContext.get('/api/brandsList');
  const body = await res.json();
  return { res, body };
}

export async function postToBrandsList(apiContext: APIRequestContext, data = {}) {
  const res = await apiContext.post('/api/brandsList', { data });
  const body = await res.json();
  return { res, body };
}