import { defineFunction } from '@aws-amplify/backend';

export const createContent = defineFunction({
  name: 'create-content',
  entry: './handler.ts'
});