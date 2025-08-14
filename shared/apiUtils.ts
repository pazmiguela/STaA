import { faker } from '@faker-js/faker';

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