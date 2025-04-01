import { defineAuth } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    email: { required: true },
    phoneNumber: {},
    givenName: {},
    familyName: {},
  },
  groups: ["Admin", "ContentManager"],
});
