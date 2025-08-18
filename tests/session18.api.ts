/* Data-driven testing using customers.json
   customers.json is used in the execution of registration.spec.ts
   Side note: POM, fixtures & tagging are used in this test file

   Activity: Apply data-driven testing in API

   s18: Part 4 5:40

   cd backend
   node server.js
   run user-api-test

   Then for weekdays: Sa automation exercise.com,
   study product-details-ve-spec.ts
*/

import { test, expect } from '@playwright/test';
// Make sure the apiUtils.ts file exists at the correct path, or update the path below if needed
import { registerRandomUser, registerFakerUser } from '../shared/apiUtils';
// If the file is not present, create ../shared/apiUtils.ts and export the required functions
import customers from '../test data/customers.json'; // adjust path if needed


test.describe.configure({ mode: "serial" });
test.describe('User API Tests', () => {
    const apiBaseUrl = 'http://localhost:3000/api/users';

    // POST METHOD for User Registration
    test('✔️ POST - Should register a new user', async ({ request }) => {
        const { response, newUser } = await registerRandomUser(request, apiBaseUrl);
        console.info("Status Code:", response.status());

        // ✅ Replace this line:
    // console.info("Response Body:", await response.json());

        // 🔁 With this block:
        const contentType = response.headers()['content-type'];
        if (contentType?.includes('application/json')) {
        const body = await response.json();
        console.info("Response Body:", body);
        } else {
        const bodyText = await response.text();
        console.warn("Non-JSON Response Body:", bodyText);
    }

    console.info("New User Email:", newUser.name);
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy();
    expect(response.body()).toBeDefined();
        expect(response.body).not.toHaveProperty('error');
});
    // GET User by ID
    test('✔️ GET - Should fetch user by ID', async ({ request }) => {
        const userId = 1;
        const response = await request.get(apiBaseUrl + '/' + userId,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.USER_DEMO_TOKEN}`,
                }
            }
        );
        console.info("Status Code:", response.status());
        console.info("Response Body:", await response.json());
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        expect(response.body()).toBeDefined();
    });

    test('✔️ POST - Should register a user using Faker', async ({ request }) => {
        const { response, newUser } = await registerFakerUser(request, apiBaseUrl);
        console.info("Status Code:", response.status());
        console.info("Response Body:", await response.json());
        console.info("New User Email:", newUser.name);
        expect(response.status()).toBe(201);
        expect(response.ok()).toBeTruthy();
        expect(response.body()).toBeDefined();
        expect(response.body).not.toHaveProperty('error');
    });
});