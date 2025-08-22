import { test, expect } from '@playwright/test';
import { registerRandomUser, registerFakerUser } from '../shared/apiUtils';
//import customers from '../test data/customers.json'; // adjust path if needed


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

        console.info("Status Code:", response.status());
        console.info("Request URL:", response.url());

    })
});