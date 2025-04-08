// amplify/auth/resource.ts
import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,       // Enable email/password and email/OTP
    phone: true,       // Enable phone/OTP
  },
  userAttributes: {
    email: { required: true },   // Require email
    phoneNumber: { required: false } // Make phone optional
  },
  multifactor: {
    mode: 'OPTIONAL',  // Enable MFA
    sms: true,         // For phone OTP
    totp: false        // Disable authenticator app for simplicity
  }
});