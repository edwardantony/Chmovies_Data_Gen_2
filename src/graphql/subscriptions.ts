/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAudioTrack = /* GraphQL */ `subscription OnCreateAudioTrack(
  $filter: ModelSubscriptionAudioTrackFilterInput
) {
  onCreateAudioTrack(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAudioTrackSubscriptionVariables,
  APITypes.OnCreateAudioTrackSubscription
>;
export const onUpdateAudioTrack = /* GraphQL */ `subscription OnUpdateAudioTrack(
  $filter: ModelSubscriptionAudioTrackFilterInput
) {
  onUpdateAudioTrack(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAudioTrackSubscriptionVariables,
  APITypes.OnUpdateAudioTrackSubscription
>;
export const onDeleteAudioTrack = /* GraphQL */ `subscription OnDeleteAudioTrack(
  $filter: ModelSubscriptionAudioTrackFilterInput
) {
  onDeleteAudioTrack(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAudioTrackSubscriptionVariables,
  APITypes.OnDeleteAudioTrackSubscription
>;
export const onCreateContentAudioTrack = /* GraphQL */ `subscription OnCreateContentAudioTrack(
  $filter: ModelSubscriptionContentAudioTrackFilterInput
) {
  onCreateContentAudioTrack(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentAudioTrackSubscriptionVariables,
  APITypes.OnCreateContentAudioTrackSubscription
>;
export const onUpdateContentAudioTrack = /* GraphQL */ `subscription OnUpdateContentAudioTrack(
  $filter: ModelSubscriptionContentAudioTrackFilterInput
) {
  onUpdateContentAudioTrack(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentAudioTrackSubscriptionVariables,
  APITypes.OnUpdateContentAudioTrackSubscription
>;
export const onDeleteContentAudioTrack = /* GraphQL */ `subscription OnDeleteContentAudioTrack(
  $filter: ModelSubscriptionContentAudioTrackFilterInput
) {
  onDeleteContentAudioTrack(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentAudioTrackSubscriptionVariables,
  APITypes.OnDeleteContentAudioTrackSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    contentCategories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    contentCategories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    contentCategories {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateContentCategory = /* GraphQL */ `subscription OnCreateContentCategory(
  $filter: ModelSubscriptionContentCategoryFilterInput
) {
  onCreateContentCategory(filter: $filter) {
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
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContentCategorySubscriptionVariables,
  APITypes.OnCreateContentCategorySubscription
>;
export const onUpdateContentCategory = /* GraphQL */ `subscription OnUpdateContentCategory(
  $filter: ModelSubscriptionContentCategoryFilterInput
) {
  onUpdateContentCategory(filter: $filter) {
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
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContentCategorySubscriptionVariables,
  APITypes.OnUpdateContentCategorySubscription
>;
export const onDeleteContentCategory = /* GraphQL */ `subscription OnDeleteContentCategory(
  $filter: ModelSubscriptionContentCategoryFilterInput
) {
  onDeleteContentCategory(filter: $filter) {
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
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContentCategorySubscriptionVariables,
  APITypes.OnDeleteContentCategorySubscription
>;
export const onCreateGenre = /* GraphQL */ `subscription OnCreateGenre($filter: ModelSubscriptionGenreFilterInput) {
  onCreateGenre(filter: $filter) {
    id
    name
    sortOrder
    createdAt
    updatedAt
    contentGenres {
      nextToken
      __typename
    }
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
    contentGenres {
      nextToken
      __typename
    }
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
    contentGenres {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGenreSubscriptionVariables,
  APITypes.OnDeleteGenreSubscription
>;
export const onCreateContentGenre = /* GraphQL */ `subscription OnCreateContentGenre(
  $filter: ModelSubscriptionContentGenreFilterInput
) {
  onCreateContentGenre(filter: $filter) {
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
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContentGenreSubscriptionVariables,
  APITypes.OnCreateContentGenreSubscription
>;
export const onUpdateContentGenre = /* GraphQL */ `subscription OnUpdateContentGenre(
  $filter: ModelSubscriptionContentGenreFilterInput
) {
  onUpdateContentGenre(filter: $filter) {
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
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateContentGenreSubscriptionVariables,
  APITypes.OnUpdateContentGenreSubscription
>;
export const onDeleteContentGenre = /* GraphQL */ `subscription OnDeleteContentGenre(
  $filter: ModelSubscriptionContentGenreFilterInput
) {
  onDeleteContentGenre(filter: $filter) {
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
      sortOrder
      createdAt
      updatedAt
      __typename
    }
    id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteContentGenreSubscriptionVariables,
  APITypes.OnDeleteContentGenreSubscription
>;
export const onCreateCountry = /* GraphQL */ `subscription OnCreateCountry($filter: ModelSubscriptionCountryFilterInput) {
  onCreateCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCountrySubscriptionVariables,
  APITypes.OnCreateCountrySubscription
>;
export const onUpdateCountry = /* GraphQL */ `subscription OnUpdateCountry($filter: ModelSubscriptionCountryFilterInput) {
  onUpdateCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCountrySubscriptionVariables,
  APITypes.OnUpdateCountrySubscription
>;
export const onDeleteCountry = /* GraphQL */ `subscription OnDeleteCountry($filter: ModelSubscriptionCountryFilterInput) {
  onDeleteCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCountrySubscriptionVariables,
  APITypes.OnDeleteCountrySubscription
>;
export const onCreateContentCountry = /* GraphQL */ `subscription OnCreateContentCountry(
  $filter: ModelSubscriptionContentCountryFilterInput
) {
  onCreateContentCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentCountrySubscriptionVariables,
  APITypes.OnCreateContentCountrySubscription
>;
export const onUpdateContentCountry = /* GraphQL */ `subscription OnUpdateContentCountry(
  $filter: ModelSubscriptionContentCountryFilterInput
) {
  onUpdateContentCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentCountrySubscriptionVariables,
  APITypes.OnUpdateContentCountrySubscription
>;
export const onDeleteContentCountry = /* GraphQL */ `subscription OnDeleteContentCountry(
  $filter: ModelSubscriptionContentCountryFilterInput
) {
  onDeleteContentCountry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentCountrySubscriptionVariables,
  APITypes.OnDeleteContentCountrySubscription
>;
export const onCreateSubtitle = /* GraphQL */ `subscription OnCreateSubtitle($filter: ModelSubscriptionSubtitleFilterInput) {
  onCreateSubtitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubtitleSubscriptionVariables,
  APITypes.OnCreateSubtitleSubscription
>;
export const onUpdateSubtitle = /* GraphQL */ `subscription OnUpdateSubtitle($filter: ModelSubscriptionSubtitleFilterInput) {
  onUpdateSubtitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubtitleSubscriptionVariables,
  APITypes.OnUpdateSubtitleSubscription
>;
export const onDeleteSubtitle = /* GraphQL */ `subscription OnDeleteSubtitle($filter: ModelSubscriptionSubtitleFilterInput) {
  onDeleteSubtitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubtitleSubscriptionVariables,
  APITypes.OnDeleteSubtitleSubscription
>;
export const onCreateContentSubtitle = /* GraphQL */ `subscription OnCreateContentSubtitle(
  $filter: ModelSubscriptionContentSubtitleFilterInput
) {
  onCreateContentSubtitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentSubtitleSubscriptionVariables,
  APITypes.OnCreateContentSubtitleSubscription
>;
export const onUpdateContentSubtitle = /* GraphQL */ `subscription OnUpdateContentSubtitle(
  $filter: ModelSubscriptionContentSubtitleFilterInput
) {
  onUpdateContentSubtitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentSubtitleSubscriptionVariables,
  APITypes.OnUpdateContentSubtitleSubscription
>;
export const onDeleteContentSubtitle = /* GraphQL */ `subscription OnDeleteContentSubtitle(
  $filter: ModelSubscriptionContentSubtitleFilterInput
) {
  onDeleteContentSubtitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentSubtitleSubscriptionVariables,
  APITypes.OnDeleteContentSubtitleSubscription
>;
export const onCreateSubscriptionPlan = /* GraphQL */ `subscription OnCreateSubscriptionPlan(
  $filter: ModelSubscriptionSubscriptionPlanFilterInput
) {
  onCreateSubscriptionPlan(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSubscriptionPlanSubscriptionVariables,
  APITypes.OnCreateSubscriptionPlanSubscription
>;
export const onUpdateSubscriptionPlan = /* GraphQL */ `subscription OnUpdateSubscriptionPlan(
  $filter: ModelSubscriptionSubscriptionPlanFilterInput
) {
  onUpdateSubscriptionPlan(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSubscriptionPlanSubscriptionVariables,
  APITypes.OnUpdateSubscriptionPlanSubscription
>;
export const onDeleteSubscriptionPlan = /* GraphQL */ `subscription OnDeleteSubscriptionPlan(
  $filter: ModelSubscriptionSubscriptionPlanFilterInput
) {
  onDeleteSubscriptionPlan(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSubscriptionPlanSubscriptionVariables,
  APITypes.OnDeleteSubscriptionPlanSubscription
>;
export const onCreateContent = /* GraphQL */ `subscription OnCreateContent($filter: ModelSubscriptionContentFilterInput) {
  onCreateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContentSubscriptionVariables,
  APITypes.OnCreateContentSubscription
>;
export const onUpdateContent = /* GraphQL */ `subscription OnUpdateContent($filter: ModelSubscriptionContentFilterInput) {
  onUpdateContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContentSubscriptionVariables,
  APITypes.OnUpdateContentSubscription
>;
export const onDeleteContent = /* GraphQL */ `subscription OnDeleteContent($filter: ModelSubscriptionContentFilterInput) {
  onDeleteContent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContentSubscriptionVariables,
  APITypes.OnDeleteContentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateUserSubscription = /* GraphQL */ `subscription OnCreateUserSubscription(
  $filter: ModelSubscriptionUserSubscriptionFilterInput
  $owner: String
) {
  onCreateUserSubscription(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionSubscriptionVariables,
  APITypes.OnCreateUserSubscriptionSubscription
>;
export const onUpdateUserSubscription = /* GraphQL */ `subscription OnUpdateUserSubscription(
  $filter: ModelSubscriptionUserSubscriptionFilterInput
  $owner: String
) {
  onUpdateUserSubscription(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionSubscriptionVariables,
  APITypes.OnUpdateUserSubscriptionSubscription
>;
export const onDeleteUserSubscription = /* GraphQL */ `subscription OnDeleteUserSubscription(
  $filter: ModelSubscriptionUserSubscriptionFilterInput
  $owner: String
) {
  onDeleteUserSubscription(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionSubscriptionVariables,
  APITypes.OnDeleteUserSubscriptionSubscription
>;
export const onCreatePayment = /* GraphQL */ `subscription OnCreatePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onCreatePayment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePaymentSubscriptionVariables,
  APITypes.OnCreatePaymentSubscription
>;
export const onUpdatePayment = /* GraphQL */ `subscription OnUpdatePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onUpdatePayment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePaymentSubscriptionVariables,
  APITypes.OnUpdatePaymentSubscription
>;
export const onDeletePayment = /* GraphQL */ `subscription OnDeletePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onDeletePayment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePaymentSubscriptionVariables,
  APITypes.OnDeletePaymentSubscription
>;
export const onCreateInvoice = /* GraphQL */ `subscription OnCreateInvoice(
  $filter: ModelSubscriptionInvoiceFilterInput
  $owner: String
) {
  onCreateInvoice(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateInvoiceSubscriptionVariables,
  APITypes.OnCreateInvoiceSubscription
>;
export const onUpdateInvoice = /* GraphQL */ `subscription OnUpdateInvoice(
  $filter: ModelSubscriptionInvoiceFilterInput
  $owner: String
) {
  onUpdateInvoice(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateInvoiceSubscriptionVariables,
  APITypes.OnUpdateInvoiceSubscription
>;
export const onDeleteInvoice = /* GraphQL */ `subscription OnDeleteInvoice(
  $filter: ModelSubscriptionInvoiceFilterInput
  $owner: String
) {
  onDeleteInvoice(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteInvoiceSubscriptionVariables,
  APITypes.OnDeleteInvoiceSubscription
>;
export const onCreateUserFavorite = /* GraphQL */ `subscription OnCreateUserFavorite(
  $filter: ModelSubscriptionUserFavoriteFilterInput
  $owner: String
) {
  onCreateUserFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserFavoriteSubscriptionVariables,
  APITypes.OnCreateUserFavoriteSubscription
>;
export const onUpdateUserFavorite = /* GraphQL */ `subscription OnUpdateUserFavorite(
  $filter: ModelSubscriptionUserFavoriteFilterInput
  $owner: String
) {
  onUpdateUserFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserFavoriteSubscriptionVariables,
  APITypes.OnUpdateUserFavoriteSubscription
>;
export const onDeleteUserFavorite = /* GraphQL */ `subscription OnDeleteUserFavorite(
  $filter: ModelSubscriptionUserFavoriteFilterInput
  $owner: String
) {
  onDeleteUserFavorite(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserFavoriteSubscriptionVariables,
  APITypes.OnDeleteUserFavoriteSubscription
>;
export const onCreateUserReview = /* GraphQL */ `subscription OnCreateUserReview(
  $filter: ModelSubscriptionUserReviewFilterInput
  $owner: String
) {
  onCreateUserReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserReviewSubscriptionVariables,
  APITypes.OnCreateUserReviewSubscription
>;
export const onUpdateUserReview = /* GraphQL */ `subscription OnUpdateUserReview(
  $filter: ModelSubscriptionUserReviewFilterInput
  $owner: String
) {
  onUpdateUserReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserReviewSubscriptionVariables,
  APITypes.OnUpdateUserReviewSubscription
>;
export const onDeleteUserReview = /* GraphQL */ `subscription OnDeleteUserReview(
  $filter: ModelSubscriptionUserReviewFilterInput
  $owner: String
) {
  onDeleteUserReview(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserReviewSubscriptionVariables,
  APITypes.OnDeleteUserReviewSubscription
>;
export const onCreateUserWatchHistory = /* GraphQL */ `subscription OnCreateUserWatchHistory(
  $filter: ModelSubscriptionUserWatchHistoryFilterInput
  $owner: String
) {
  onCreateUserWatchHistory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserWatchHistorySubscriptionVariables,
  APITypes.OnCreateUserWatchHistorySubscription
>;
export const onUpdateUserWatchHistory = /* GraphQL */ `subscription OnUpdateUserWatchHistory(
  $filter: ModelSubscriptionUserWatchHistoryFilterInput
  $owner: String
) {
  onUpdateUserWatchHistory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserWatchHistorySubscriptionVariables,
  APITypes.OnUpdateUserWatchHistorySubscription
>;
export const onDeleteUserWatchHistory = /* GraphQL */ `subscription OnDeleteUserWatchHistory(
  $filter: ModelSubscriptionUserWatchHistoryFilterInput
  $owner: String
) {
  onDeleteUserWatchHistory(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserWatchHistorySubscriptionVariables,
  APITypes.OnDeleteUserWatchHistorySubscription
>;
export const onCreateLog = /* GraphQL */ `subscription OnCreateLog(
  $filter: ModelSubscriptionLogFilterInput
  $owner: String
) {
  onCreateLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLogSubscriptionVariables,
  APITypes.OnCreateLogSubscription
>;
export const onUpdateLog = /* GraphQL */ `subscription OnUpdateLog(
  $filter: ModelSubscriptionLogFilterInput
  $owner: String
) {
  onUpdateLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLogSubscriptionVariables,
  APITypes.OnUpdateLogSubscription
>;
export const onDeleteLog = /* GraphQL */ `subscription OnDeleteLog(
  $filter: ModelSubscriptionLogFilterInput
  $owner: String
) {
  onDeleteLog(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLogSubscriptionVariables,
  APITypes.OnDeleteLogSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $owner: String
) {
  onCreateNotification(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $owner: String
) {
  onUpdateNotification(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
  $owner: String
) {
  onDeleteNotification(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
