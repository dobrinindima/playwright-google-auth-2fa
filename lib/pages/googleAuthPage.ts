import { Page } from "@playwright/test";

export class GoogleAuthPage {
  readonly email = this.page.locator("//*[@type='email']");
  readonly emailNext = this.page.locator("//*[text()='Next']");
  readonly password = this.page.locator("//*[@type='password']");
  readonly passwordNext = this.page.locator("//*[text()='Next']");
  
  readonly code = this.page.locator("//*[@type='tel']");
  readonly totpNext = this.page.getByRole('button', { name: 'Next' });

  constructor(private readonly page: Page) {}

  async login(email, password) {
    await this.email.click();
    await this.email.fill(email);
    await this.emailNext.click();
    await this.password.fill(password);
    await this.passwordNext.click();
  }

  async enterCode(code) {
    await this.code.fill(code);
    await this.totpNext.click();
  }
}
