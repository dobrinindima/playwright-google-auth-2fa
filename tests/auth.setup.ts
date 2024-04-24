import { test as setup, expect } from "@playwright/test";
import { generateOTP } from "../lib/helpers/otp";
import { HomePage } from "../lib/pages/homePage";
import { WelcomePage } from "../lib/pages/welcomePage";
import { GoogleAuthPage } from "../lib/pages/googleAuthPage";

setup("Create Auth", async ({ page, baseURL }) => {
  const email = process.env.GOOGLE_EMAIL;
  const password = process.env.GOOGLE_PASSWORD;

  const welcomePage = new WelcomePage(page);
  await welcomePage.goto();

  await welcomePage.googleButton.click();

  const googleAuthPage = new GoogleAuthPage(page);

  await googleAuthPage.login(email, password);

  const twoFACode = generateOTP(process.env.GOOGLE_OTP_SECRET);
  await googleAuthPage.enterCode(twoFACode);
  await page.getByRole('button', { name: 'Continue' }).click();

  const homePage = new HomePage(page);

  await expect(homePage.helloSection).toBeVisible();
  await expect(homePage.iconColleagues).toBeVisible();
  await expect(homePage.icnMap).toBeVisible();
});
