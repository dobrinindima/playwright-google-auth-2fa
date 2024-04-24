import { Page } from "@playwright/test";

export class WelcomePage {
  readonly googleButton = this.page.locator("//*[text()='Sign in with Google']");

  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("/welcome");
  }
}
