/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAudioTrack = /* GraphQL */ `mutation CreateAudioTrack(
  $input: CreateAudioTrackInput!
  $condition: ModelAudioTrackConditionInput
) {
  createAudioTrack(input: $input, condition: $condition) {
    id
    language
    code
    createdAt
    updatedAt
    contentAudioTracks {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAudioTrackMutationVariables,
  APITypes.CreateAudioTrackMutation
>;
export const updateAudioTrack = /* GraphQL */ `mutation UpdateAudioTrack(
  $input: UpdateAudioTrackInput!
  $condition: ModelAudioTrackConditionInput
) {
  updateAudioTrack(input: $input, condition: $condition) {
    id
    language
    code
    createdAt
    updatedAt
    contentAudioTracks {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAudioTrackMutationVariables,
  APITypes.UpdateAudioTrackMutation
>;
export const deleteAudioTrack = /* GraphQL */ `mutation DeleteAudioTrack(
  $input: DeleteAudioTrackInput!
  $condition: ModelAudioTrackConditionInput
) {
  deleteAudioTrack(input: $input, condition: $condition) {
    id
    language
    code
    createdAt
    updatedAt
    contentAudioTracks {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAudioTrackMutationVariables,
  APITypes.DeleteAudioTrackMutation
>;
export const createContentAudioTrack = /* GraphQL */ `mutation CreateContentAudioTrack(
  $input: CreateContentAudioTrackInput!
  $condition: ModelContentAudioTrackConditionInput
) {
  createContentAudioTrack(input: $input, condition: $condition) {
    contentId
    audioId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    audioTrack {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentAudioTrackMutationVariables,
  APITypes.CreateContentAudioTrackMutation
>;
export const updateContentAudioTrack = /* GraphQL */ `mutation UpdateContentAudioTrack(
  $input: UpdateContentAudioTrackInput!
  $condition: ModelContentAudioTrackConditionInput
) {
  updateContentAudioTrack(input: $input, condition: $condition) {
    contentId
    audioId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    audioTrack {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentAudioTrackMutationVariables,
  APITypes.UpdateContentAudioTrackMutation
>;
export const deleteContentAudioTrack = /* GraphQL */ `mutation DeleteContentAudioTrack(
  $input: DeleteContentAudioTrackInput!
  $condition: ModelContentAudioTrackConditionInput
) {
  deleteContentAudioTrack(input: $input, condition: $condition) {
    contentId
    audioId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    audioTrack {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentAudioTrackMutationVariables,
  APITypes.DeleteContentAudioTrackMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    contentCategories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    contentCategories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    contentCategories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createContentCategory = /* GraphQL */ `mutation CreateContentCategory(
  $input: CreateContentCategoryInput!
  $condition: ModelContentCategoryConditionInput
) {
  createContentCategory(input: $input, condition: $condition) {
    contentId
    categoryId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentCategoryMutationVariables,
  APITypes.CreateContentCategoryMutation
>;
export const updateContentCategory = /* GraphQL */ `mutation UpdateContentCategory(
  $input: UpdateContentCategoryInput!
  $condition: ModelContentCategoryConditionInput
) {
  updateContentCategory(input: $input, condition: $condition) {
    contentId
    categoryId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentCategoryMutationVariables,
  APITypes.UpdateContentCategoryMutation
>;
export const deleteContentCategory = /* GraphQL */ `mutation DeleteContentCategory(
  $input: DeleteContentCategoryInput!
  $condition: ModelContentCategoryConditionInput
) {
  deleteContentCategory(input: $input, condition: $condition) {
    contentId
    categoryId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    category {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentCategoryMutationVariables,
  APITypes.DeleteContentCategoryMutation
>;
export const createGenre = /* GraphQL */ `mutation CreateGenre(
  $input: CreateGenreInput!
  $condition: ModelGenreConditionInput
) {
  createGenre(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    contentGenres {
      nextToken
      __typename
    }
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
    createdAt
    updatedAt
    contentGenres {
      nextToken
      __typename
    }
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
    createdAt
    updatedAt
    contentGenres {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGenreMutationVariables,
  APITypes.DeleteGenreMutation
>;
export const createContentGenre = /* GraphQL */ `mutation CreateContentGenre(
  $input: CreateContentGenreInput!
  $condition: ModelContentGenreConditionInput
) {
  createContentGenre(input: $input, condition: $condition) {
    contentId
    genreId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    genre {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentGenreMutationVariables,
  APITypes.CreateContentGenreMutation
>;
export const updateContentGenre = /* GraphQL */ `mutation UpdateContentGenre(
  $input: UpdateContentGenreInput!
  $condition: ModelContentGenreConditionInput
) {
  updateContentGenre(input: $input, condition: $condition) {
    contentId
    genreId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    genre {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentGenreMutationVariables,
  APITypes.UpdateContentGenreMutation
>;
export const deleteContentGenre = /* GraphQL */ `mutation DeleteContentGenre(
  $input: DeleteContentGenreInput!
  $condition: ModelContentGenreConditionInput
) {
  deleteContentGenre(input: $input, condition: $condition) {
    contentId
    genreId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    genre {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentGenreMutationVariables,
  APITypes.DeleteContentGenreMutation
>;
export const createCountry = /* GraphQL */ `mutation CreateCountry(
  $input: CreateCountryInput!
  $condition: ModelCountryConditionInput
) {
  createCountry(input: $input, condition: $condition) {
    id
    name
    code
    createdAt
    updatedAt
    contentCountries {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCountryMutationVariables,
  APITypes.CreateCountryMutation
>;
export const updateCountry = /* GraphQL */ `mutation UpdateCountry(
  $input: UpdateCountryInput!
  $condition: ModelCountryConditionInput
) {
  updateCountry(input: $input, condition: $condition) {
    id
    name
    code
    createdAt
    updatedAt
    contentCountries {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCountryMutationVariables,
  APITypes.UpdateCountryMutation
>;
export const deleteCountry = /* GraphQL */ `mutation DeleteCountry(
  $input: DeleteCountryInput!
  $condition: ModelCountryConditionInput
) {
  deleteCountry(input: $input, condition: $condition) {
    id
    name
    code
    createdAt
    updatedAt
    contentCountries {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCountryMutationVariables,
  APITypes.DeleteCountryMutation
>;
export const createContentCountry = /* GraphQL */ `mutation CreateContentCountry(
  $input: CreateContentCountryInput!
  $condition: ModelContentCountryConditionInput
) {
  createContentCountry(input: $input, condition: $condition) {
    contentId
    countryId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    country {
      id
      name
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentCountryMutationVariables,
  APITypes.CreateContentCountryMutation
>;
export const updateContentCountry = /* GraphQL */ `mutation UpdateContentCountry(
  $input: UpdateContentCountryInput!
  $condition: ModelContentCountryConditionInput
) {
  updateContentCountry(input: $input, condition: $condition) {
    contentId
    countryId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    country {
      id
      name
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentCountryMutationVariables,
  APITypes.UpdateContentCountryMutation
>;
export const deleteContentCountry = /* GraphQL */ `mutation DeleteContentCountry(
  $input: DeleteContentCountryInput!
  $condition: ModelContentCountryConditionInput
) {
  deleteContentCountry(input: $input, condition: $condition) {
    contentId
    countryId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    country {
      id
      name
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentCountryMutationVariables,
  APITypes.DeleteContentCountryMutation
>;
export const createSubtitle = /* GraphQL */ `mutation CreateSubtitle(
  $input: CreateSubtitleInput!
  $condition: ModelSubtitleConditionInput
) {
  createSubtitle(input: $input, condition: $condition) {
    id
    language
    code
    createdAt
    updatedAt
    contentSubtitles {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubtitleMutationVariables,
  APITypes.CreateSubtitleMutation
>;
export const updateSubtitle = /* GraphQL */ `mutation UpdateSubtitle(
  $input: UpdateSubtitleInput!
  $condition: ModelSubtitleConditionInput
) {
  updateSubtitle(input: $input, condition: $condition) {
    id
    language
    code
    createdAt
    updatedAt
    contentSubtitles {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubtitleMutationVariables,
  APITypes.UpdateSubtitleMutation
>;
export const deleteSubtitle = /* GraphQL */ `mutation DeleteSubtitle(
  $input: DeleteSubtitleInput!
  $condition: ModelSubtitleConditionInput
) {
  deleteSubtitle(input: $input, condition: $condition) {
    id
    language
    code
    createdAt
    updatedAt
    contentSubtitles {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubtitleMutationVariables,
  APITypes.DeleteSubtitleMutation
>;
export const createContentSubtitle = /* GraphQL */ `mutation CreateContentSubtitle(
  $input: CreateContentSubtitleInput!
  $condition: ModelContentSubtitleConditionInput
) {
  createContentSubtitle(input: $input, condition: $condition) {
    contentId
    subtitleId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    subtitle {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentSubtitleMutationVariables,
  APITypes.CreateContentSubtitleMutation
>;
export const updateContentSubtitle = /* GraphQL */ `mutation UpdateContentSubtitle(
  $input: UpdateContentSubtitleInput!
  $condition: ModelContentSubtitleConditionInput
) {
  updateContentSubtitle(input: $input, condition: $condition) {
    contentId
    subtitleId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    subtitle {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentSubtitleMutationVariables,
  APITypes.UpdateContentSubtitleMutation
>;
export const deleteContentSubtitle = /* GraphQL */ `mutation DeleteContentSubtitle(
  $input: DeleteContentSubtitleInput!
  $condition: ModelContentSubtitleConditionInput
) {
  deleteContentSubtitle(input: $input, condition: $condition) {
    contentId
    subtitleId
    createdAt
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    subtitle {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentSubtitleMutationVariables,
  APITypes.DeleteContentSubtitleMutation
>;
export const createSubscriptionPlan = /* GraphQL */ `mutation CreateSubscriptionPlan(
  $input: CreateSubscriptionPlanInput!
  $condition: ModelSubscriptionPlanConditionInput
) {
  createSubscriptionPlan(input: $input, condition: $condition) {
    id
    name
    description
    price
    currency
    billingCycle
    durationDays
    maxScreens
    videoQuality
    isActive
    features
    sortOrder
    createdAt
    updatedAt
    userSubscriptions {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSubscriptionPlanMutationVariables,
  APITypes.CreateSubscriptionPlanMutation
>;
export const updateSubscriptionPlan = /* GraphQL */ `mutation UpdateSubscriptionPlan(
  $input: UpdateSubscriptionPlanInput!
  $condition: ModelSubscriptionPlanConditionInput
) {
  updateSubscriptionPlan(input: $input, condition: $condition) {
    id
    name
    description
    price
    currency
    billingCycle
    durationDays
    maxScreens
    videoQuality
    isActive
    features
    sortOrder
    createdAt
    updatedAt
    userSubscriptions {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSubscriptionPlanMutationVariables,
  APITypes.UpdateSubscriptionPlanMutation
>;
export const deleteSubscriptionPlan = /* GraphQL */ `mutation DeleteSubscriptionPlan(
  $input: DeleteSubscriptionPlanInput!
  $condition: ModelSubscriptionPlanConditionInput
) {
  deleteSubscriptionPlan(input: $input, condition: $condition) {
    id
    name
    description
    price
    currency
    billingCycle
    durationDays
    maxScreens
    videoQuality
    isActive
    features
    sortOrder
    createdAt
    updatedAt
    userSubscriptions {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSubscriptionPlanMutationVariables,
  APITypes.DeleteSubscriptionPlanMutation
>;
export const createContent = /* GraphQL */ `mutation CreateContent(
  $input: CreateContentInput!
  $condition: ModelContentConditionInput
) {
  createContent(input: $input, condition: $condition) {
    id
    partnerId
    title
    localTitle
    description
    releaseDate
    duration
    type
    imagesDetails
    videoOriginal
    videoConverted
    videoId
    analyticsId
    maturityRating
    audienceRating
    audienceLike
    audienceDislike
    isFeatured
    status
    sortOrder
    createdAt
    updatedAt
    audioTracks {
      nextToken
      __typename
    }
    categories {
      nextToken
      __typename
    }
    countries {
      nextToken
      __typename
    }
    genres {
      nextToken
      __typename
    }
    subtitles {
      nextToken
      __typename
    }
    userFavorites {
      nextToken
      __typename
    }
    userReviews {
      nextToken
      __typename
    }
    userWatchHistories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateContentMutationVariables,
  APITypes.CreateContentMutation
>;
export const updateContent = /* GraphQL */ `mutation UpdateContent(
  $input: UpdateContentInput!
  $condition: ModelContentConditionInput
) {
  updateContent(input: $input, condition: $condition) {
    id
    partnerId
    title
    localTitle
    description
    releaseDate
    duration
    type
    imagesDetails
    videoOriginal
    videoConverted
    videoId
    analyticsId
    maturityRating
    audienceRating
    audienceLike
    audienceDislike
    isFeatured
    status
    sortOrder
    createdAt
    updatedAt
    audioTracks {
      nextToken
      __typename
    }
    categories {
      nextToken
      __typename
    }
    countries {
      nextToken
      __typename
    }
    genres {
      nextToken
      __typename
    }
    subtitles {
      nextToken
      __typename
    }
    userFavorites {
      nextToken
      __typename
    }
    userReviews {
      nextToken
      __typename
    }
    userWatchHistories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateContentMutationVariables,
  APITypes.UpdateContentMutation
>;
export const deleteContent = /* GraphQL */ `mutation DeleteContent(
  $input: DeleteContentInput!
  $condition: ModelContentConditionInput
) {
  deleteContent(input: $input, condition: $condition) {
    id
    partnerId
    title
    localTitle
    description
    releaseDate
    duration
    type
    imagesDetails
    videoOriginal
    videoConverted
    videoId
    analyticsId
    maturityRating
    audienceRating
    audienceLike
    audienceDislike
    isFeatured
    status
    sortOrder
    createdAt
    updatedAt
    audioTracks {
      nextToken
      __typename
    }
    categories {
      nextToken
      __typename
    }
    countries {
      nextToken
      __typename
    }
    genres {
      nextToken
      __typename
    }
    subtitles {
      nextToken
      __typename
    }
    userFavorites {
      nextToken
      __typename
    }
    userReviews {
      nextToken
      __typename
    }
    userWatchHistories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteContentMutationVariables,
  APITypes.DeleteContentMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    cognitoId
    email
    username
    firstName
    lastName
    phoneNumber
    profilePicture
    dateOfBirth
    gender
    country
    languagePreference
    maturityPreference
    status
    lastLogin
    accountStatus
    createdAt
    updatedAt
    userFavorites {
      nextToken
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    notifications {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    userReviews {
      nextToken
      __typename
    }
    userSubscriptions {
      nextToken
      __typename
    }
    userWatchHistories {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    cognitoId
    email
    username
    firstName
    lastName
    phoneNumber
    profilePicture
    dateOfBirth
    gender
    country
    languagePreference
    maturityPreference
    status
    lastLogin
    accountStatus
    createdAt
    updatedAt
    userFavorites {
      nextToken
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    notifications {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    userReviews {
      nextToken
      __typename
    }
    userSubscriptions {
      nextToken
      __typename
    }
    userWatchHistories {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    cognitoId
    email
    username
    firstName
    lastName
    phoneNumber
    profilePicture
    dateOfBirth
    gender
    country
    languagePreference
    maturityPreference
    status
    lastLogin
    accountStatus
    createdAt
    updatedAt
    userFavorites {
      nextToken
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    logs {
      nextToken
      __typename
    }
    notifications {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    userReviews {
      nextToken
      __typename
    }
    userSubscriptions {
      nextToken
      __typename
    }
    userWatchHistories {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createUserSubscription = /* GraphQL */ `mutation CreateUserSubscription(
  $input: CreateUserSubscriptionInput!
  $condition: ModelUserSubscriptionConditionInput
) {
  createUserSubscription(input: $input, condition: $condition) {
    id
    userId
    planId
    startDate
    endDate
    status
    autoRenew
    paymentMethod
    lastPaymentDate
    nextBillingDate
    cancellationDate
    cancellationReason
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    plan {
      id
      name
      description
      price
      currency
      billingCycle
      durationDays
      maxScreens
      videoQuality
      isActive
      features
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserSubscriptionMutationVariables,
  APITypes.CreateUserSubscriptionMutation
>;
export const updateUserSubscription = /* GraphQL */ `mutation UpdateUserSubscription(
  $input: UpdateUserSubscriptionInput!
  $condition: ModelUserSubscriptionConditionInput
) {
  updateUserSubscription(input: $input, condition: $condition) {
    id
    userId
    planId
    startDate
    endDate
    status
    autoRenew
    paymentMethod
    lastPaymentDate
    nextBillingDate
    cancellationDate
    cancellationReason
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    plan {
      id
      name
      description
      price
      currency
      billingCycle
      durationDays
      maxScreens
      videoQuality
      isActive
      features
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserSubscriptionMutationVariables,
  APITypes.UpdateUserSubscriptionMutation
>;
export const deleteUserSubscription = /* GraphQL */ `mutation DeleteUserSubscription(
  $input: DeleteUserSubscriptionInput!
  $condition: ModelUserSubscriptionConditionInput
) {
  deleteUserSubscription(input: $input, condition: $condition) {
    id
    userId
    planId
    startDate
    endDate
    status
    autoRenew
    paymentMethod
    lastPaymentDate
    nextBillingDate
    cancellationDate
    cancellationReason
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    plan {
      id
      name
      description
      price
      currency
      billingCycle
      durationDays
      maxScreens
      videoQuality
      isActive
      features
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    payments {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserSubscriptionMutationVariables,
  APITypes.DeleteUserSubscriptionMutation
>;
export const createPayment = /* GraphQL */ `mutation CreatePayment(
  $input: CreatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  createPayment(input: $input, condition: $condition) {
    id
    userId
    userSubscriptionId
    amount
    currency
    paymentMethod
    paymentGateway
    transactionId
    status
    paymentDate
    description
    metadata
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    userSubscription {
      id
      userId
      planId
      startDate
      endDate
      status
      autoRenew
      paymentMethod
      lastPaymentDate
      nextBillingDate
      cancellationDate
      cancellationReason
      createdAt
      updatedAt
      owner
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePaymentMutationVariables,
  APITypes.CreatePaymentMutation
>;
export const updatePayment = /* GraphQL */ `mutation UpdatePayment(
  $input: UpdatePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  updatePayment(input: $input, condition: $condition) {
    id
    userId
    userSubscriptionId
    amount
    currency
    paymentMethod
    paymentGateway
    transactionId
    status
    paymentDate
    description
    metadata
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    userSubscription {
      id
      userId
      planId
      startDate
      endDate
      status
      autoRenew
      paymentMethod
      lastPaymentDate
      nextBillingDate
      cancellationDate
      cancellationReason
      createdAt
      updatedAt
      owner
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentMutationVariables,
  APITypes.UpdatePaymentMutation
>;
export const deletePayment = /* GraphQL */ `mutation DeletePayment(
  $input: DeletePaymentInput!
  $condition: ModelPaymentConditionInput
) {
  deletePayment(input: $input, condition: $condition) {
    id
    userId
    userSubscriptionId
    amount
    currency
    paymentMethod
    paymentGateway
    transactionId
    status
    paymentDate
    description
    metadata
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    userSubscription {
      id
      userId
      planId
      startDate
      endDate
      status
      autoRenew
      paymentMethod
      lastPaymentDate
      nextBillingDate
      cancellationDate
      cancellationReason
      createdAt
      updatedAt
      owner
      __typename
    }
    invoices {
      nextToken
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePaymentMutationVariables,
  APITypes.DeletePaymentMutation
>;
export const createInvoice = /* GraphQL */ `mutation CreateInvoice(
  $input: CreateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  createInvoice(input: $input, condition: $condition) {
    id
    userId
    userSubscriptionId
    paymentId
    invoiceNumber
    amount
    currency
    taxAmount
    discountAmount
    totalAmount
    billingPeriod
    invoiceDate
    dueDate
    status
    pdfUrl
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    userSubscription {
      id
      userId
      planId
      startDate
      endDate
      status
      autoRenew
      paymentMethod
      lastPaymentDate
      nextBillingDate
      cancellationDate
      cancellationReason
      createdAt
      updatedAt
      owner
      __typename
    }
    payment {
      id
      userId
      userSubscriptionId
      amount
      currency
      paymentMethod
      paymentGateway
      transactionId
      status
      paymentDate
      description
      metadata
      createdAt
      updatedAt
      owner
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateInvoiceMutationVariables,
  APITypes.CreateInvoiceMutation
>;
export const updateInvoice = /* GraphQL */ `mutation UpdateInvoice(
  $input: UpdateInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  updateInvoice(input: $input, condition: $condition) {
    id
    userId
    userSubscriptionId
    paymentId
    invoiceNumber
    amount
    currency
    taxAmount
    discountAmount
    totalAmount
    billingPeriod
    invoiceDate
    dueDate
    status
    pdfUrl
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    userSubscription {
      id
      userId
      planId
      startDate
      endDate
      status
      autoRenew
      paymentMethod
      lastPaymentDate
      nextBillingDate
      cancellationDate
      cancellationReason
      createdAt
      updatedAt
      owner
      __typename
    }
    payment {
      id
      userId
      userSubscriptionId
      amount
      currency
      paymentMethod
      paymentGateway
      transactionId
      status
      paymentDate
      description
      metadata
      createdAt
      updatedAt
      owner
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateInvoiceMutationVariables,
  APITypes.UpdateInvoiceMutation
>;
export const deleteInvoice = /* GraphQL */ `mutation DeleteInvoice(
  $input: DeleteInvoiceInput!
  $condition: ModelInvoiceConditionInput
) {
  deleteInvoice(input: $input, condition: $condition) {
    id
    userId
    userSubscriptionId
    paymentId
    invoiceNumber
    amount
    currency
    taxAmount
    discountAmount
    totalAmount
    billingPeriod
    invoiceDate
    dueDate
    status
    pdfUrl
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    userSubscription {
      id
      userId
      planId
      startDate
      endDate
      status
      autoRenew
      paymentMethod
      lastPaymentDate
      nextBillingDate
      cancellationDate
      cancellationReason
      createdAt
      updatedAt
      owner
      __typename
    }
    payment {
      id
      userId
      userSubscriptionId
      amount
      currency
      paymentMethod
      paymentGateway
      transactionId
      status
      paymentDate
      description
      metadata
      createdAt
      updatedAt
      owner
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteInvoiceMutationVariables,
  APITypes.DeleteInvoiceMutation
>;
export const createUserFavorite = /* GraphQL */ `mutation CreateUserFavorite(
  $input: CreateUserFavoriteInput!
  $condition: ModelUserFavoriteConditionInput
) {
  createUserFavorite(input: $input, condition: $condition) {
    id
    userId
    contentId
    createdAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserFavoriteMutationVariables,
  APITypes.CreateUserFavoriteMutation
>;
export const updateUserFavorite = /* GraphQL */ `mutation UpdateUserFavorite(
  $input: UpdateUserFavoriteInput!
  $condition: ModelUserFavoriteConditionInput
) {
  updateUserFavorite(input: $input, condition: $condition) {
    id
    userId
    contentId
    createdAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserFavoriteMutationVariables,
  APITypes.UpdateUserFavoriteMutation
>;
export const deleteUserFavorite = /* GraphQL */ `mutation DeleteUserFavorite(
  $input: DeleteUserFavoriteInput!
  $condition: ModelUserFavoriteConditionInput
) {
  deleteUserFavorite(input: $input, condition: $condition) {
    id
    userId
    contentId
    createdAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserFavoriteMutationVariables,
  APITypes.DeleteUserFavoriteMutation
>;
export const createUserReview = /* GraphQL */ `mutation CreateUserReview(
  $input: CreateUserReviewInput!
  $condition: ModelUserReviewConditionInput
) {
  createUserReview(input: $input, condition: $condition) {
    id
    userId
    contentId
    rating
    reviewText
    isApproved
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserReviewMutationVariables,
  APITypes.CreateUserReviewMutation
>;
export const updateUserReview = /* GraphQL */ `mutation UpdateUserReview(
  $input: UpdateUserReviewInput!
  $condition: ModelUserReviewConditionInput
) {
  updateUserReview(input: $input, condition: $condition) {
    id
    userId
    contentId
    rating
    reviewText
    isApproved
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserReviewMutationVariables,
  APITypes.UpdateUserReviewMutation
>;
export const deleteUserReview = /* GraphQL */ `mutation DeleteUserReview(
  $input: DeleteUserReviewInput!
  $condition: ModelUserReviewConditionInput
) {
  deleteUserReview(input: $input, condition: $condition) {
    id
    userId
    contentId
    rating
    reviewText
    isApproved
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserReviewMutationVariables,
  APITypes.DeleteUserReviewMutation
>;
export const createUserWatchHistory = /* GraphQL */ `mutation CreateUserWatchHistory(
  $input: CreateUserWatchHistoryInput!
  $condition: ModelUserWatchHistoryConditionInput
) {
  createUserWatchHistory(input: $input, condition: $condition) {
    id
    userId
    contentId
    progress
    duration
    lastWatchedAt
    deviceInfo
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserWatchHistoryMutationVariables,
  APITypes.CreateUserWatchHistoryMutation
>;
export const updateUserWatchHistory = /* GraphQL */ `mutation UpdateUserWatchHistory(
  $input: UpdateUserWatchHistoryInput!
  $condition: ModelUserWatchHistoryConditionInput
) {
  updateUserWatchHistory(input: $input, condition: $condition) {
    id
    userId
    contentId
    progress
    duration
    lastWatchedAt
    deviceInfo
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserWatchHistoryMutationVariables,
  APITypes.UpdateUserWatchHistoryMutation
>;
export const deleteUserWatchHistory = /* GraphQL */ `mutation DeleteUserWatchHistory(
  $input: DeleteUserWatchHistoryInput!
  $condition: ModelUserWatchHistoryConditionInput
) {
  deleteUserWatchHistory(input: $input, condition: $condition) {
    id
    userId
    contentId
    progress
    duration
    lastWatchedAt
    deviceInfo
    createdAt
    updatedAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    content {
      id
      partnerId
      title
      localTitle
      description
      releaseDate
      duration
      type
      imagesDetails
      videoOriginal
      videoConverted
      videoId
      analyticsId
      maturityRating
      audienceRating
      audienceLike
      audienceDislike
      isFeatured
      status
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserWatchHistoryMutationVariables,
  APITypes.DeleteUserWatchHistoryMutation
>;
export const createLog = /* GraphQL */ `mutation CreateLog(
  $input: CreateLogInput!
  $condition: ModelLogConditionInput
) {
  createLog(input: $input, condition: $condition) {
    id
    userId
    action
    entityType
    entityId
    ipAddress
    userAgent
    metadata
    createdAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLogMutationVariables,
  APITypes.CreateLogMutation
>;
export const updateLog = /* GraphQL */ `mutation UpdateLog(
  $input: UpdateLogInput!
  $condition: ModelLogConditionInput
) {
  updateLog(input: $input, condition: $condition) {
    id
    userId
    action
    entityType
    entityId
    ipAddress
    userAgent
    metadata
    createdAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLogMutationVariables,
  APITypes.UpdateLogMutation
>;
export const deleteLog = /* GraphQL */ `mutation DeleteLog(
  $input: DeleteLogInput!
  $condition: ModelLogConditionInput
) {
  deleteLog(input: $input, condition: $condition) {
    id
    userId
    action
    entityType
    entityId
    ipAddress
    userAgent
    metadata
    createdAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLogMutationVariables,
  APITypes.DeleteLogMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
    id
    userId
    title
    message
    type
    isRead
    relatedId
    relatedType
    createdAt
    readAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
    id
    userId
    title
    message
    type
    isRead
    relatedId
    relatedType
    createdAt
    readAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
    id
    userId
    title
    message
    type
    isRead
    relatedId
    relatedType
    createdAt
    readAt
    user {
      id
      cognitoId
      email
      username
      firstName
      lastName
      phoneNumber
      profilePicture
      dateOfBirth
      gender
      country
      languagePreference
      maturityPreference
      status
      lastLogin
      accountStatus
      createdAt
      updatedAt
      owner
      __typename
    }
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
