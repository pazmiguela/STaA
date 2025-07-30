import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly loginButton: Locator;
    public readonly swagLabsHeader: Locator;
    public readonly errorMessage: Locator;

    constructor(public readonly page: Page) {
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.swagLabsHeader = page.getByText('Swag Labs');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate() {
        await this.page.goto('/');
        await this.page.waitForLoadState('domcontentloaded');
    }
}