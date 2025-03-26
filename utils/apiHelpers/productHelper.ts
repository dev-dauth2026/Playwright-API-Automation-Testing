import { APIRequestContext } from '@playwright/test';

export async function getAllProducts(apiContext: APIRequestContext) {
  const res = await apiContext.get('/api/productsList');
  const body = await res.json();
  return { res, body };
}

export async function searchProduct(apiContext: APIRequestContext, product:string){
    const res = await apiContext.post('/api/searchProduct',{
        form: { search_product: product}
    });
    const body= await res.json();
    return {res, body}
}