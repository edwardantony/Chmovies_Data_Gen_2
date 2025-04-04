/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAudioTrack = /* GraphQL */ `query GetAudioTrack($id: ID!) {
  getAudioTrack(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAudioTrackQueryVariables,
  APITypes.GetAudioTrackQuery
>;
export const listAudioTracks = /* GraphQL */ `query ListAudioTracks(
  $id: ID
  $filter: ModelAudioTrackFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAudioTracks(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAudioTracksQueryVariables,
  APITypes.ListAudioTracksQuery
>;
export const getContentAudioTrack = /* GraphQL */ `query GetContentAudioTrack($id: ID!) {
  getContentAudioTrack(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentAudioTrackQueryVariables,
  APITypes.GetContentAudioTrackQuery
>;
export const listContentAudioTracks = /* GraphQL */ `query ListContentAudioTracks(
  $filter: ModelContentAudioTrackFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentAudioTracks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      contentId
      audioId
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentAudioTracksQueryVariables,
  APITypes.ListContentAudioTracksQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $id: ID
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCategories(
    id: $id
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
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getContentCategory = /* GraphQL */ `query GetContentCategory($id: ID!) {
  getContentCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentCategoryQueryVariables,
  APITypes.GetContentCategoryQuery
>;
export const listContentCategories = /* GraphQL */ `query ListContentCategories(
  $filter: ModelContentCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contentId
      categoryId
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentCategoriesQueryVariables,
  APITypes.ListContentCategoriesQuery
>;
export const getGenre = /* GraphQL */ `query GetGenre($id: ID!) {
  getGenre(id: $id) {
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
` as GeneratedQuery<APITypes.GetGenreQueryVariables, APITypes.GetGenreQuery>;
export const listGenres = /* GraphQL */ `query ListGenres(
  $id: ID
  $filter: ModelGenreFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGenres(
    id: $id
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
export const getContentGenre = /* GraphQL */ `query GetContentGenre($id: ID!) {
  getContentGenre(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentGenreQueryVariables,
  APITypes.GetContentGenreQuery
>;
export const listContentGenres = /* GraphQL */ `query ListContentGenres(
  $filter: ModelContentGenreFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contentId
      genreId
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentGenresQueryVariables,
  APITypes.ListContentGenresQuery
>;
export const getCountry = /* GraphQL */ `query GetCountry($id: ID!) {
  getCountry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCountryQueryVariables,
  APITypes.GetCountryQuery
>;
export const listCountries = /* GraphQL */ `query ListCountries(
  $id: ID
  $filter: ModelCountryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCountries(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      name
      code
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCountriesQueryVariables,
  APITypes.ListCountriesQuery
>;
export const getContentCountry = /* GraphQL */ `query GetContentCountry($id: ID!) {
  getContentCountry(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentCountryQueryVariables,
  APITypes.GetContentCountryQuery
>;
export const listContentCountries = /* GraphQL */ `query ListContentCountries(
  $filter: ModelContentCountryFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentCountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contentId
      countryId
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentCountriesQueryVariables,
  APITypes.ListContentCountriesQuery
>;
export const getSubtitle = /* GraphQL */ `query GetSubtitle($id: ID!) {
  getSubtitle(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSubtitleQueryVariables,
  APITypes.GetSubtitleQuery
>;
export const listSubtitles = /* GraphQL */ `query ListSubtitles(
  $id: ID
  $filter: ModelSubtitleFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSubtitles(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      language
      code
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubtitlesQueryVariables,
  APITypes.ListSubtitlesQuery
>;
export const getContentSubtitle = /* GraphQL */ `query GetContentSubtitle($id: ID!) {
  getContentSubtitle(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentSubtitleQueryVariables,
  APITypes.GetContentSubtitleQuery
>;
export const listContentSubtitles = /* GraphQL */ `query ListContentSubtitles(
  $filter: ModelContentSubtitleFilterInput
  $limit: Int
  $nextToken: String
) {
  listContentSubtitles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      contentId
      subtitleId
      createdAt
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentSubtitlesQueryVariables,
  APITypes.ListContentSubtitlesQuery
>;
export const getSubscriptionPlan = /* GraphQL */ `query GetSubscriptionPlan($id: ID!) {
  getSubscriptionPlan(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSubscriptionPlanQueryVariables,
  APITypes.GetSubscriptionPlanQuery
>;
export const listSubscriptionPlans = /* GraphQL */ `query ListSubscriptionPlans(
  $id: ID
  $filter: ModelSubscriptionPlanFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSubscriptionPlans(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSubscriptionPlansQueryVariables,
  APITypes.ListSubscriptionPlansQuery
>;
export const getContent = /* GraphQL */ `query GetContent($id: ID!) {
  getContent(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetContentQueryVariables,
  APITypes.GetContentQuery
>;
export const listContents = /* GraphQL */ `query ListContents(
  $id: ID
  $filter: ModelContentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listContents(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContentsQueryVariables,
  APITypes.ListContentsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $id: ID
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUsers(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserSubscription = /* GraphQL */ `query GetUserSubscription($id: ID!) {
  getUserSubscription(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserSubscriptionQueryVariables,
  APITypes.GetUserSubscriptionQuery
>;
export const listUserSubscriptions = /* GraphQL */ `query ListUserSubscriptions(
  $id: ID
  $filter: ModelUserSubscriptionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserSubscriptions(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSubscriptionsQueryVariables,
  APITypes.ListUserSubscriptionsQuery
>;
export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $id: ID
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPayments(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const getInvoice = /* GraphQL */ `query GetInvoice($id: ID!) {
  getInvoice(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetInvoiceQueryVariables,
  APITypes.GetInvoiceQuery
>;
export const listInvoices = /* GraphQL */ `query ListInvoices(
  $id: ID
  $filter: ModelInvoiceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listInvoices(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListInvoicesQueryVariables,
  APITypes.ListInvoicesQuery
>;
export const getUserFavorite = /* GraphQL */ `query GetUserFavorite($id: ID!) {
  getUserFavorite(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserFavoriteQueryVariables,
  APITypes.GetUserFavoriteQuery
>;
export const listUserFavorites = /* GraphQL */ `query ListUserFavorites(
  $id: ID
  $filter: ModelUserFavoriteFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserFavorites(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      contentId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFavoritesQueryVariables,
  APITypes.ListUserFavoritesQuery
>;
export const getUserReview = /* GraphQL */ `query GetUserReview($id: ID!) {
  getUserReview(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserReviewQueryVariables,
  APITypes.GetUserReviewQuery
>;
export const listUserReviews = /* GraphQL */ `query ListUserReviews(
  $id: ID
  $filter: ModelUserReviewFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserReviews(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      contentId
      rating
      reviewText
      isApproved
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserReviewsQueryVariables,
  APITypes.ListUserReviewsQuery
>;
export const getUserWatchHistory = /* GraphQL */ `query GetUserWatchHistory($id: ID!) {
  getUserWatchHistory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserWatchHistoryQueryVariables,
  APITypes.GetUserWatchHistoryQuery
>;
export const listUserWatchHistories = /* GraphQL */ `query ListUserWatchHistories(
  $id: ID
  $filter: ModelUserWatchHistoryFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listUserWatchHistories(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      contentId
      progress
      duration
      lastWatchedAt
      deviceInfo
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserWatchHistoriesQueryVariables,
  APITypes.ListUserWatchHistoriesQuery
>;
export const getLog = /* GraphQL */ `query GetLog($id: ID!) {
  getLog(id: $id) {
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
` as GeneratedQuery<APITypes.GetLogQueryVariables, APITypes.GetLogQuery>;
export const listLogs = /* GraphQL */ `query ListLogs(
  $id: ID
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listLogs(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      id
      userId
      action
      entityType
      entityId
      ipAddress
      userAgent
      metadata
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLogsQueryVariables, APITypes.ListLogsQuery>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $id: ID
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listNotifications(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
