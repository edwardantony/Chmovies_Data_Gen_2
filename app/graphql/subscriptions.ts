/* tslint:disable */
 
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateGenre = /* GraphQL */ `subscription OnCreateGenre($filter: ModelSubscriptionGenreFilterInput) {
  onCreateGenre(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGenreSubscriptionVariables,
  APITypes.OnCreateGenreSubscription
>;
export const onUpdateGenre = /* GraphQL */ `subscription OnUpdateGenre($filter: ModelSubscriptionGenreFilterInput) {
  onUpdateGenre(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGenreSubscriptionVariables,
  APITypes.OnUpdateGenreSubscription
>;
export const onDeleteGenre = /* GraphQL */ `subscription OnDeleteGenre($filter: ModelSubscriptionGenreFilterInput) {
  onDeleteGenre(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGenreSubscriptionVariables,
  APITypes.OnDeleteGenreSubscription
>;
