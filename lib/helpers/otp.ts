import * as OTPAuth from "otpauth";

export function generateOTP(secret: string) {
  const totp = new OTPAuth.TOTP({
    issuer: "ACME",
    label: "AzureDiamond",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: secret,
  });

  return totp.generate();
}
