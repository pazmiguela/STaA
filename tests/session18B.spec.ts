/* Activity: Apply data-driven testing in API

1. Using customers.json to excecute registration.spec.ts (I made a new test para hindi na Parabank)
   Side note: POM, fixtures & tagging are used in this test file

2. Using faker-js to generate random user data for registration
   Remember to install faker with npm i @faker-js/faker
   To execute: reun server first
      cd backend
      node server.js
   Then run user-api-test
   
Review in S18 Recording: Part 4 5:40

HW for weekdays: Study product-details-ve-spec.ts in automation exercise.com
*/

// session18B.spec.ts
import { test, expect } from '@playwright/test';
import { registerRandomUser, registerFakerUser } from '../shared/apiUtils';


test.describe.configure({ mode: 'serial' });

test.describe('User API Tests', () => {
  const apiBaseUrl = 'http://localhost:3000/api/users'; // <— no trailing slash

  test('✔️ POST - Should register a new user', async ({ request }) => {
    const { response, newUser } = await registerRandomUser(request, apiBaseUrl);

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body).toMatchObject({
      id: expect.any(Number),
      // optionally: name/email fields depending on your payload
    });
    expect(body).not.toHaveProperty('error');
  });

  test('✔️ GET - Should fetch user by ID', async ({ request }) => {
    // First create one, then fetch it
    const { response } = await registerRandomUser(request, apiBaseUrl);
    const created = await response.json();

    const getResp = await request.get(`${apiBaseUrl}/${created.id}`);
    expect(getResp.status()).toBe(200);

    const got = await getResp.json();
    expect(got).toMatchObject({ id: created.id });
  });

  test('✔️ POST - Should register a user using Faker', async ({ request }) => {
    const { response } = await registerFakerUser(request, apiBaseUrl);
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).not.toHaveProperty('error');
  });
});