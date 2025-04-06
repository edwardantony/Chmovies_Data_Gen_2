/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createGenre = /* GraphQL */ `mutation CreateGenre(
  $input: CreateGenreInput!
  $condition: ModelGenreConditionInput
) {
  createGenre(input: $input, condition: $condition) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGenreMutationVariables,
  APITypes.CreateGenreMutation
>;
export const updateGenre = /* GraphQL */ `mutation UpdateGenre(
  $input: UpdateGenreInput!
  $condition: ModelGenreConditionInput
) {
  updateGenre(input: $input, condition: $condition) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGenreMutationVariables,
  APITypes.UpdateGenreMutation
>;
export const deleteGenre = /* GraphQL */ `mutation DeleteGenre(
  $input: DeleteGenreInput!
  $condition: ModelGenreConditionInput
) {
  deleteGenre(input: $input, condition: $condition) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGenreMutationVariables,
  APITypes.DeleteGenreMutation
>;
