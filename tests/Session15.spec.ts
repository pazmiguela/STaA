/*Session 15 Activity: implement all the learnings about API testing with Playwright due on July 31, 2025. */

import {test, expect} from '@playwright/test';
import exp from 'constants';
import { request } from 'http';

test('API GET Request', async ({request}) => {

    const response = await request.get('https://api.restful-api.dev/objects');

    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Apple AirPods');

    console.log(await response.json());
})

test('API POST Request', async ({request}) => {
    const response2 = await request.post('https://api.restful-api.dev/objects',{
        data:{
            "name": "Apple MacBook Pro 16",
                "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
            }}});

    const text2= await response2.text();
    expect (text2).toContain('Apple MacBook Pro 16');

    console.log(await response2.json());
});

test('API PUT Request', async ({ request }) => {
  const response = await request.put('https://api.restful-api.dev/objects/6', {
    data: {
      name: 'Apple MacBook Pro 16',
      data: {
        year: 2019,
        price: 2049.99,
        'CPU model': 'Intel Core i9',
        'Hard disk size': '1 TB',
        color: 'silver'
      }
    }
  });
  expect(response.status()).toBe(405);
  const text = await response.text();
  expect(text).toContain('Apple');

  console.log(await response.json());
});

test('API PATCH Request', async ({ request }) => {
  const response = await request.patch('https://api.restful-api.dev/objects/6', {
    data: {
   "name": "Apple"
}                   
  });
  expect(response.status()).toBe(405);
  const text = await response.text();
  expect(text).toContain('Apple MacBook Pro 16');

  console.log(await response.json());
});

test('API DELETE Request', async ({ request }) => {
  const response = await request.delete('https://api.restful-api.dev/objects/6', {
  });

  expect(response.status()).toBe(405);
});