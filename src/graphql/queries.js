/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
      subscriptionStatus
      lastLogin
      accountStatus
      createdAt
      updatedAt
      favorites {
        id
        userId
        contentId
        createdAt
        __typename
      }
      invoices {
        id
        userId
        subscriptionId
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
        __typename
      }
      notifications {
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
        __typename
      }
      payments {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      reviews {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      subscriptions {
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      watchHistory {
        id
        userId
        contentId
        progress
        duration
        lastWatchedAt
        deviceInfo
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers {
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
      subscriptionStatus
      lastLogin
      accountStatus
      createdAt
      updatedAt
      favorites {
        id
        userId
        contentId
        createdAt
        __typename
      }
      invoices {
        id
        userId
        subscriptionId
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
        __typename
      }
      notifications {
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
        __typename
      }
      payments {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      reviews {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      subscriptions {
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      watchHistory {
        id
        userId
        contentId
        progress
        duration
        lastWatchedAt
        deviceInfo
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const getContent = /* GraphQL */ `
  query GetContent($id: ID!) {
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
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      categories {
        id
        name
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      countries {
        id
        name
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      genres {
        id
        name
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      subtitles {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      reviews {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents {
    listContents {
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
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      categories {
        id
        name
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      countries {
        id
        name
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      genres {
        id
        name
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      subtitles {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      reviews {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const getCH_Gen2_Content = /* GraphQL */ `
  query GetCH_Gen2_Content($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Content(id: $id, sortOrder: $sortOrder) {
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
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      categories {
        id
        name
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      countries {
        id
        name
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      genres {
        id
        name
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      subtitles {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      reviews {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCH_Gen2_Contents = /* GraphQL */ `
  query ListCH_Gen2_Contents(
    $filter: TableCH_Gen2_ContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Contents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
`;
export const queryCH_Gen2_ContentsByIdPartnerIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_ContentsByIdPartnerIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ContentsByIdPartnerIdIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const queryCH_Gen2_ContentsByIdTitleIndex = /* GraphQL */ `
  query QueryCH_Gen2_ContentsByIdTitleIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ContentsByIdTitleIndex(id: $id, first: $first, after: $after) {
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
`;
export const queryCH_Gen2_ContentsByIdReleaseDateIndex = /* GraphQL */ `
  query QueryCH_Gen2_ContentsByIdReleaseDateIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ContentsByIdReleaseDateIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const queryCH_Gen2_ContentsByIdMaturityRatingIndex = /* GraphQL */ `
  query QueryCH_Gen2_ContentsByIdMaturityRatingIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ContentsByIdMaturityRatingIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const queryCH_Gen2_ContentsByIdFeaturedIndex = /* GraphQL */ `
  query QueryCH_Gen2_ContentsByIdFeaturedIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ContentsByIdFeaturedIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const getCH_Gen2_User = /* GraphQL */ `
  query GetCH_Gen2_User($id: ID!, $lastLogin: AWSDateTime!) {
    getCH_Gen2_User(id: $id, lastLogin: $lastLogin) {
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
      subscriptionStatus
      lastLogin
      accountStatus
      createdAt
      updatedAt
      favorites {
        id
        userId
        contentId
        createdAt
        __typename
      }
      invoices {
        id
        userId
        subscriptionId
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
        __typename
      }
      notifications {
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
        __typename
      }
      payments {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      reviews {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      subscriptions {
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      watchHistory {
        id
        userId
        contentId
        progress
        duration
        lastWatchedAt
        deviceInfo
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCH_Gen2_Users = /* GraphQL */ `
  query ListCH_Gen2_Users(
    $filter: TableCH_Gen2_UserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Users(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_UsersByIdCognitoIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_UsersByIdCognitoIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_UsersByIdCognitoIdIndex(
      id: $id
      first: $first
      after: $after
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_UsersByIdEmailIndex = /* GraphQL */ `
  query QueryCH_Gen2_UsersByIdEmailIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_UsersByIdEmailIndex(id: $id, first: $first, after: $after) {
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_UsersByIdUsernameIndex = /* GraphQL */ `
  query QueryCH_Gen2_UsersByIdUsernameIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_UsersByIdUsernameIndex(id: $id, first: $first, after: $after) {
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_UsersByIdPhoneNumberIndex = /* GraphQL */ `
  query QueryCH_Gen2_UsersByIdPhoneNumberIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_UsersByIdPhoneNumberIndex(
      id: $id
      first: $first
      after: $after
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_UsersByIdSubscriptionStatusIndex = /* GraphQL */ `
  query QueryCH_Gen2_UsersByIdSubscriptionStatusIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_UsersByIdSubscriptionStatusIndex(
      id: $id
      first: $first
      after: $after
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Country = /* GraphQL */ `
  query GetCH_Gen2_Country($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Country(id: $id, sortOrder: $sortOrder) {
      id
      name
      code
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCH_Gen2_Countries = /* GraphQL */ `
  query ListCH_Gen2_Countries(
    $filter: TableCH_Gen2_CountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Countries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_CountriesByIdNameIndex = /* GraphQL */ `
  query QueryCH_Gen2_CountriesByIdNameIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_CountriesByIdNameIndex(id: $id, first: $first, after: $after) {
      items {
        id
        name
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_CountriesByIdCodeIndex = /* GraphQL */ `
  query QueryCH_Gen2_CountriesByIdCodeIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_CountriesByIdCodeIndex(id: $id, first: $first, after: $after) {
      items {
        id
        name
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Category = /* GraphQL */ `
  query GetCH_Gen2_Category($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Category(id: $id, sortOrder: $sortOrder) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCH_Gen2_Categories = /* GraphQL */ `
  query ListCH_Gen2_Categories(
    $filter: TableCH_Gen2_CategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Categories(
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
`;
export const queryCH_Gen2_CategoriesByIdNameIndex = /* GraphQL */ `
  query QueryCH_Gen2_CategoriesByIdNameIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_CategoriesByIdNameIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const getCH_Gen2_Genre = /* GraphQL */ `
  query GetCH_Gen2_Genre($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Genre(id: $id, sortOrder: $sortOrder) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCH_Gen2_Genres = /* GraphQL */ `
  query ListCH_Gen2_Genres(
    $filter: TableCH_Gen2_GenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Genres(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
export const queryCH_Gen2_GenresByIdNameIndex = /* GraphQL */ `
  query QueryCH_Gen2_GenresByIdNameIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_GenresByIdNameIndex(id: $id, first: $first, after: $after) {
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
`;
export const getCH_Gen2_AudioTrack = /* GraphQL */ `
  query GetCH_Gen2_AudioTrack($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_AudioTrack(id: $id, sortOrder: $sortOrder) {
      id
      language
      code
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCH_Gen2_AudioTracks = /* GraphQL */ `
  query ListCH_Gen2_AudioTracks(
    $filter: TableCH_Gen2_AudioTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_AudioTracks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_AudioTracksByIdLanguageIndex = /* GraphQL */ `
  query QueryCH_Gen2_AudioTracksByIdLanguageIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_AudioTracksByIdLanguageIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_AudioTracksByIdCodeIndex = /* GraphQL */ `
  query QueryCH_Gen2_AudioTracksByIdCodeIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_AudioTracksByIdCodeIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Subtitle = /* GraphQL */ `
  query GetCH_Gen2_Subtitle($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Subtitle(id: $id, sortOrder: $sortOrder) {
      id
      language
      code
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCH_Gen2_Subtitles = /* GraphQL */ `
  query ListCH_Gen2_Subtitles(
    $filter: TableCH_Gen2_SubtitleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Subtitles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_SubtitlesByIdLanguageIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubtitlesByIdLanguageIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubtitlesByIdLanguageIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_SubtitlesByIdCodeIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubtitlesByIdCodeIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubtitlesByIdCodeIndex(id: $id, first: $first, after: $after) {
      items {
        id
        language
        code
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Favorite = /* GraphQL */ `
  query GetCH_Gen2_Favorite($id: ID!, $createdAt: AWSDateTime!) {
    getCH_Gen2_Favorite(id: $id, createdAt: $createdAt) {
      id
      userId
      contentId
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCH_Gen2_Favorites = /* GraphQL */ `
  query ListCH_Gen2_Favorites(
    $filter: TableCH_Gen2_FavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Favorites(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        contentId
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_FavoritesByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_FavoritesByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_FavoritesByIdUserIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        contentId
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_FavoritesByIdContentIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_FavoritesByIdContentIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_FavoritesByIdContentIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        contentId
        createdAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Invoice = /* GraphQL */ `
  query GetCH_Gen2_Invoice($id: ID!, $dueDate: String!) {
    getCH_Gen2_Invoice(id: $id, dueDate: $dueDate) {
      id
      userId
      subscriptionId
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      subscription {
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      payment {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCH_Gen2_Invoices = /* GraphQL */ `
  query ListCH_Gen2_Invoices(
    $filter: TableCH_Gen2_InvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Invoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        subscriptionId
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_InvoicesByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_InvoicesByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_InvoicesByIdUserIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_InvoicesByIdSubscriptionIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_InvoicesByIdSubscriptionIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_InvoicesByIdSubscriptionIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_InvoicesByIdPaymentIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_InvoicesByIdPaymentIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_InvoicesByIdPaymentIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_InvoicesByIdInvoiceNumberIndex = /* GraphQL */ `
  query QueryCH_Gen2_InvoicesByIdInvoiceNumberIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_InvoicesByIdInvoiceNumberIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_InvoicesByIdDueDateIndex = /* GraphQL */ `
  query QueryCH_Gen2_InvoicesByIdDueDateIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_InvoicesByIdDueDateIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Notification = /* GraphQL */ `
  query GetCH_Gen2_Notification($id: ID!, $createdAt: AWSDateTime!) {
    getCH_Gen2_Notification(id: $id, createdAt: $createdAt) {
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCH_Gen2_Notifications = /* GraphQL */ `
  query ListCH_Gen2_Notifications(
    $filter: TableCH_Gen2_NotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Notifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_NotificationsByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_NotificationsByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_NotificationsByIdUserIdIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_NotificationsByIdTypeIndex = /* GraphQL */ `
  query QueryCH_Gen2_NotificationsByIdTypeIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_NotificationsByIdTypeIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_NotificationsByIdIsReadIndex = /* GraphQL */ `
  query QueryCH_Gen2_NotificationsByIdIsReadIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_NotificationsByIdIsReadIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_NotificationsByIdRelatedIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_NotificationsByIdRelatedIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_NotificationsByIdRelatedIdIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_NotificationsByIdRelatedTypeIndex = /* GraphQL */ `
  query QueryCH_Gen2_NotificationsByIdRelatedTypeIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_NotificationsByIdRelatedTypeIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Payment = /* GraphQL */ `
  query GetCH_Gen2_Payment($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Payment(id: $id, sortOrder: $sortOrder) {
      id
      userId
      subscriptionId
      amount
      currency
      paymentMethod
      paymentGateway
      transactionId
      status
      paymentDate
      description
      metadata
      sortOrder
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
        __typename
      }
      subscription {
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const listCH_Gen2_Payments = /* GraphQL */ `
  query ListCH_Gen2_Payments(
    $filter: TableCH_Gen2_PaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Payments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_PaymentsByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_PaymentsByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_PaymentsByIdUserIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_PaymentsByIdSubsriptionIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_PaymentsByIdSubsriptionIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_PaymentsByIdSubsriptionIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_PaymentsByIdCurrencyIndex = /* GraphQL */ `
  query QueryCH_Gen2_PaymentsByIdCurrencyIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_PaymentsByIdCurrencyIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_PaymentsByIdTransactionIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_PaymentsByIdTransactionIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_PaymentsByIdTransactionIdIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_PaymentsByIdStatusIndex = /* GraphQL */ `
  query QueryCH_Gen2_PaymentsByIdStatusIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_PaymentsByIdStatusIndex(
      id: $id
      first: $first
      after: $after
    ) {
      items {
        id
        userId
        subscriptionId
        amount
        currency
        paymentMethod
        paymentGateway
        transactionId
        status
        paymentDate
        description
        metadata
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Review = /* GraphQL */ `
  query GetCH_Gen2_Review($id: ID!, $createdAt: AWSDateTime!) {
    getCH_Gen2_Review(id: $id, createdAt: $createdAt) {
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
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
      __typename
    }
  }
`;
export const listCH_Gen2_Reviews = /* GraphQL */ `
  query ListCH_Gen2_Reviews(
    $filter: TableCH_Gen2_ReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Reviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_ReviewsByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_ReviewsByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ReviewsByIdUserIdIndex(id: $id, first: $first, after: $after) {
      items {
        id
        userId
        contentId
        rating
        reviewText
        isApproved
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_ReviewsByIdContentIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_ReviewsByIdContentIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ReviewsByIdContentIdIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_ReviewsByIdIsApprovedIndex = /* GraphQL */ `
  query QueryCH_Gen2_ReviewsByIdIsApprovedIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_ReviewsByIdIsApprovedIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_Subscription = /* GraphQL */ `
  query GetCH_Gen2_Subscription($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_Subscription(id: $id, sortOrder: $sortOrder) {
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
      sortOrder
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
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
      __typename
    }
  }
`;
export const listCH_Gen2_Subscriptions = /* GraphQL */ `
  query ListCH_Gen2_Subscriptions(
    $filter: TableCH_Gen2_SubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_Subscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_SubscriptionsByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubscriptionsByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubscriptionsByIdUserIdIndex(
      id: $id
      first: $first
      after: $after
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_SubscriptionsByIdPlanIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubscriptionsByIdPlanIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubscriptionsByIdPlanIdIndex(
      id: $id
      first: $first
      after: $after
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_SubscriptionsByIdStatusIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubscriptionsByIdStatusIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubscriptionsByIdStatusIndex(
      id: $id
      first: $first
      after: $after
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_SubscriptionsByIdPaymentMethodIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubscriptionsByIdPaymentMethodIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubscriptionsByIdPaymentMethodIndex(
      id: $id
      first: $first
      after: $after
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
        sortOrder
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  query GetCH_Gen2_SubscriptionPlan($id: ID!, $sortOrder: Int!) {
    getCH_Gen2_SubscriptionPlan(id: $id, sortOrder: $sortOrder) {
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
  }
`;
export const listCH_Gen2_SubscriptionPlans = /* GraphQL */ `
  query ListCH_Gen2_SubscriptionPlans(
    $filter: TableCH_Gen2_SubscriptionPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_SubscriptionPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
`;
export const queryCH_Gen2_SubscriptionPlansByIdNameIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubscriptionPlansByIdNameIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubscriptionPlansByIdNameIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const queryCH_Gen2_SubscriptionPlansByIdCurrencyIndex = /* GraphQL */ `
  query QueryCH_Gen2_SubscriptionPlansByIdCurrencyIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_SubscriptionPlansByIdCurrencyIndex(
      id: $id
      first: $first
      after: $after
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
`;
export const getCH_Gen2_WatchHistory = /* GraphQL */ `
  query GetCH_Gen2_WatchHistory($id: ID!, $lastWatchedAt: AWSDateTime!) {
    getCH_Gen2_WatchHistory(id: $id, lastWatchedAt: $lastWatchedAt) {
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
        subscriptionStatus
        lastLogin
        accountStatus
        createdAt
        updatedAt
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
      __typename
    }
  }
`;
export const listCH_Gen2_WatchHistories = /* GraphQL */ `
  query ListCH_Gen2_WatchHistories(
    $filter: TableCH_Gen2_WatchHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCH_Gen2_WatchHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_WatchHistoriesByIdUserIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_WatchHistoriesByIdUserIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_WatchHistoriesByIdUserIdIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const queryCH_Gen2_WatchHistoriesByIdContentIdIndex = /* GraphQL */ `
  query QueryCH_Gen2_WatchHistoriesByIdContentIdIndex(
    $id: ID!
    $first: Int
    $after: String
  ) {
    queryCH_Gen2_WatchHistoriesByIdContentIdIndex(
      id: $id
      first: $first
      after: $after
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
