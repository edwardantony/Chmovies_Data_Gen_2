/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getGenre = /* GraphQL */ `query GetGenre($sortOrder: Int!) {
  getGenre(sortOrder: $sortOrder) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetGenreQueryVariables, APITypes.GetGenreQuery>;
export const listGenres = /* GraphQL */ `query ListGenres(
  $sortOrder: Int
  $filter: ModelGenreFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGenres(
    sortOrder: $sortOrder
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGenresQueryVariables,
  APITypes.ListGenresQuery
>;
export const listGenreByName = /* GraphQL */ `query ListGenreByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelGenreFilterInput
  $limit: Int
  $nextToken: String
) {
  listGenreByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGenreByNameQueryVariables,
  APITypes.ListGenreByNameQuery
>;
