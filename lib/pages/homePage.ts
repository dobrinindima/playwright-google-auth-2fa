import { Page } from "@playwright/test";

export class HomePage {
  readonly helloSection = this.page.getByText('Hello👋 Super');
  readonly iconColleagues = this.page.getByRole('link', { name: 'icon Colleagues' });
  readonly icnMap = this.page.getByRole('link', { name: 'icon Map' });

  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto("/home");
  }
}
