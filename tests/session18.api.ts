/*Data driven testing using customers.json
customers.jason is used in the execution of registration.spec.ts
side note: POM, fixtures & tagging are used in this test file

Activity: Apply data-driven testing in API

s18: Part 4 5:40

cd backend
node server.js
run user-api-test


Then for weekdays: Sa automation exercise.com,
study product-details-ve-spec.ts

*/

import { test, expect } from '@playwright/test';
import { registerRandomUser, registerFakerUser } from '../shared/apiUtils';


test.describe.configure({ mode: "serial" });
test.describe('User API Tests', () => {
    const apiBaseUrl = 'http://localhost:3000/api/users';

    // POST METHOD for User Registration
    test('✔️ POST - Should register a new user', async ({ request }) => {
        const { response, newUser } = await registerRandomUser(request, apiBaseUrl);
        console.info("Status Code:", response.status());
        console.info("Response Body:", await response.json());
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