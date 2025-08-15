/* Create a spec file: pw-plugin-api.spec.ts (already existing)
Create test cases inside the file for API https://jsonplaceholder.typicode.com
*/

import { expect } from '@playwright/test';
import { pwApi, test } from 'pw-api-plugin';


// Request and Response from JSONPlaceholder API 
// GET, POST, PUT, PATCH, DELETE, HEAD, FETCH

test.describe('PW-API-PLUGIN PLAYWRIGHT API Tests for https://jsonplaceholder.typicode.com', () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';

    test('Verify pwApi GET, HEAD, POST, PUT, PATCH, DELETE in single test', async ({ request, page }) => {

        // ✔️ Example of get
        const responseGet = await pwApi.get({ request, page }, `${baseUrl}/posts/2`)
        expect(responseGet.status()).toBe(200)
        const responseBodyGet = await responseGet.json()
        expect(responseBodyGet).toHaveProperty('id', 2)


        // ✔️ Example of head
        const responseHead = await pwApi.head({ request, page }, `${baseUrl}/posts/1`)
        expect(responseHead.status()).toBe(200)
        expect(responseHead.headers()).toHaveProperty('content-type', 'application/json; charset=utf-8')
        expect(responseHead.headers()).toHaveProperty('x-powered-by', 'Express')


        // ✔️ Example of post (with request body and request headers)
        const responsePost = await pwApi.post({ request, page }, `${baseUrl}/posts`, 
            {
                data: {
                    title: 'CODE BLOSSOM SQE',
                    body: 'Code Blossom Software Quality Engineering',
                    userId: 1,
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        expect(responsePost.status()).toBe(201)
        const responseBodyPost = await responsePost.json()
        expect(responseBodyPost).toHaveProperty('id', 101)


        // ✔️ Example of put (with request: body, headers, params, timeout, maxRetries)
        const responsePut = await pwApi.put({ request, page }, 'https://jsonplaceholder.typicode.com/posts/1', 
            {
                data: {
                    id: 1,
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                params: { _limit: 1000, _details: true },
                timeout: 2000,
                maxRetries: 1
            }
        )
        expect(responsePut.ok()).toBeTruthy()
        const responseBodyPut = await responsePut.json()
        expect(responseBodyPut).toHaveProperty('id', 1)


        // ✔️ Example of patch (with request body and request headers)
        const responsePatch = await pwApi.patch({ request, page }, 'https://jsonplaceholder.typicode.com/posts/1',
            {
                data: {
                    title: 'hello',
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        );
        expect(responsePatch.ok()).toBeTruthy()


        // ✔️ Example for delete
        const responseDelete = await pwApi.delete({ request, page }, 'https://jsonplaceholder.typicode.com/posts/1');
        expect(responseDelete.ok()).toBeTruthy()

    })


    test('Verify pwApi FETCH (using default GET)', async ({ request, page }) => {

        // ✔️ Example fetch (default GET)
        const responseFetch = await pwApi.fetch({ request, page }, `${baseUrl}/posts`);
        expect(responseFetch.status()).toBe(200)
        const responseBodyFetch = await responseFetch.json()
        expect(responseBodyFetch.length).toBeGreaterThan(4)
        
    })

    
    test('Verify pwApi for Failing GET Method (404)', async ({ request, page }) => {

        // ❌ Example for get with wrong URL
        const responseFetch = await pwApi.get({ request, page }, `${baseUrl}/invalid-url`);
        expect(responseFetch.status()).toBe(404)
        
    })
})