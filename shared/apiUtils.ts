/*import { faker } from '@faker-js/faker';

export async function registerRandomUser(request: any, apiBaseUrl: string) {
    const randomEmail = 'testuser' + Math.floor(Math.random() * 10000) + Date.now() + '@email.com';
    const newUser = {
        name: 'regieTest',
        email: randomEmail,
        password: process.env.SAUCE_PASSWORD
    };
    const response = await request.post(apiBaseUrl + '/register', {
        data: newUser,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return { response, newUser };
}

export async function registerFakerUser(request: any, apiBaseUrl: string) {
    const newUser = {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: process.env.SAUCE_PASSWORD
    };
    const response = await request.post(apiBaseUrl + '/register', {
        data: newUser,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return { response, newUser };
}
*/

// ../shared/apiUtils.ts
import type { APIRequestContext, APIResponse } from '@playwright/test';
import { faker } from '@faker-js/faker';

export async function registerRandomUser(request: APIRequestContext, baseUrl: string): Promise<{response: APIResponse,newUser:any}> {
  const newUser = { name: `user-${Date.now()}`, email: `u${Date.now()}@test.local` };
  const response = await request.post(baseUrl, { json: newUser });
  return { response, newUser };
}

export async function registerFakerUser(request: APIRequestContext, baseUrl: string): Promise<{response: APIResponse,newUser:any}> {
  const newUser = { name: faker.person.fullName(), email: faker.internet.email() };
  const response = await request.post(baseUrl, { json: newUser });
  return { response, newUser };
}
