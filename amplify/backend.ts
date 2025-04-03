import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { myFirstFunction } from './functions/genres/resource';

defineBackend({
  myFirstFunction,
});

defineBackend({
  auth,
  data,
});
