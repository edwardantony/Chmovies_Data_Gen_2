/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUserCreated = /* GraphQL */ `
  subscription OnUserCreated {
    onUserCreated {
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
export const onContentCreated = /* GraphQL */ `
  subscription OnContentCreated {
    onContentCreated {
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
export const onCreateCH_Gen2_Content = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Content(
    $id: ID
    $partnerId: ID
    $title: String
    $localTitle: String
    $description: String
  ) {
    onCreateCH_Gen2_Content(
      id: $id
      partnerId: $partnerId
      title: $title
      localTitle: $localTitle
      description: $description
    ) {
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
export const onUpdateCH_Gen2_Content = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Content(
    $id: ID
    $partnerId: ID
    $title: String
    $localTitle: String
    $description: String
  ) {
    onUpdateCH_Gen2_Content(
      id: $id
      partnerId: $partnerId
      title: $title
      localTitle: $localTitle
      description: $description
    ) {
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
export const onDeleteCH_Gen2_Content = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Content(
    $id: ID
    $partnerId: ID
    $title: String
    $localTitle: String
    $description: String
  ) {
    onDeleteCH_Gen2_Content(
      id: $id
      partnerId: $partnerId
      title: $title
      localTitle: $localTitle
      description: $description
    ) {
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
export const onCreateCH_Gen2_User = /* GraphQL */ `
  subscription OnCreateCH_Gen2_User(
    $id: ID
    $cognitoId: String
    $email: String
    $username: String
    $firstName: String
  ) {
    onCreateCH_Gen2_User(
      id: $id
      cognitoId: $cognitoId
      email: $email
      username: $username
      firstName: $firstName
    ) {
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
export const onUpdateCH_Gen2_User = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_User(
    $id: ID
    $cognitoId: String
    $email: String
    $username: String
    $firstName: String
  ) {
    onUpdateCH_Gen2_User(
      id: $id
      cognitoId: $cognitoId
      email: $email
      username: $username
      firstName: $firstName
    ) {
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
export const onDeleteCH_Gen2_User = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_User(
    $id: ID
    $cognitoId: String
    $email: String
    $username: String
    $firstName: String
  ) {
    onDeleteCH_Gen2_User(
      id: $id
      cognitoId: $cognitoId
      email: $email
      username: $username
      firstName: $firstName
    ) {
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
export const onCreateCH_Gen2_Country = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Country(
    $id: ID
    $name: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onCreateCH_Gen2_Country(
      id: $id
      name: $name
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onUpdateCH_Gen2_Country = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Country(
    $id: ID
    $name: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onUpdateCH_Gen2_Country(
      id: $id
      name: $name
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onDeleteCH_Gen2_Country = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Country(
    $id: ID
    $name: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onDeleteCH_Gen2_Country(
      id: $id
      name: $name
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onCreateCH_Gen2_Category = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Category(
    $id: ID
    $name: String
    $sortOrder: Int
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    onCreateCH_Gen2_Category(
      id: $id
      name: $name
      sortOrder: $sortOrder
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCH_Gen2_Category = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Category(
    $id: ID
    $name: String
    $sortOrder: Int
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    onUpdateCH_Gen2_Category(
      id: $id
      name: $name
      sortOrder: $sortOrder
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCH_Gen2_Category = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Category(
    $id: ID
    $name: String
    $sortOrder: Int
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    onDeleteCH_Gen2_Category(
      id: $id
      name: $name
      sortOrder: $sortOrder
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCH_Gen2_Genre = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Genre(
    $id: ID
    $name: String
    $sortOrder: Int
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    onCreateCH_Gen2_Genre(
      id: $id
      name: $name
      sortOrder: $sortOrder
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCH_Gen2_Genre = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Genre(
    $id: ID
    $name: String
    $sortOrder: Int
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    onUpdateCH_Gen2_Genre(
      id: $id
      name: $name
      sortOrder: $sortOrder
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCH_Gen2_Genre = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Genre(
    $id: ID
    $name: String
    $sortOrder: Int
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    onDeleteCH_Gen2_Genre(
      id: $id
      name: $name
      sortOrder: $sortOrder
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCH_Gen2_AudioTrack = /* GraphQL */ `
  subscription OnCreateCH_Gen2_AudioTrack(
    $id: ID
    $language: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onCreateCH_Gen2_AudioTrack(
      id: $id
      language: $language
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onUpdateCH_Gen2_AudioTrack = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_AudioTrack(
    $id: ID
    $language: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onUpdateCH_Gen2_AudioTrack(
      id: $id
      language: $language
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onDeleteCH_Gen2_AudioTrack = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_AudioTrack(
    $id: ID
    $language: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onDeleteCH_Gen2_AudioTrack(
      id: $id
      language: $language
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onCreateCH_Gen2_Subtitle = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Subtitle(
    $id: ID
    $language: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onCreateCH_Gen2_Subtitle(
      id: $id
      language: $language
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onUpdateCH_Gen2_Subtitle = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Subtitle(
    $id: ID
    $language: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onUpdateCH_Gen2_Subtitle(
      id: $id
      language: $language
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onDeleteCH_Gen2_Subtitle = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Subtitle(
    $id: ID
    $language: String
    $code: String
    $sortOrder: Int
    $createdAt: AWSDateTime
  ) {
    onDeleteCH_Gen2_Subtitle(
      id: $id
      language: $language
      code: $code
      sortOrder: $sortOrder
      createdAt: $createdAt
    ) {
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
export const onCreateCH_Gen2_Favorite = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Favorite(
    $id: ID
    $userId: ID
    $contentId: ID
    $createdAt: AWSDateTime
  ) {
    onCreateCH_Gen2_Favorite(
      id: $id
      userId: $userId
      contentId: $contentId
      createdAt: $createdAt
    ) {
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
export const onUpdateCH_Gen2_Favorite = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Favorite(
    $id: ID
    $userId: ID
    $contentId: ID
    $createdAt: AWSDateTime
  ) {
    onUpdateCH_Gen2_Favorite(
      id: $id
      userId: $userId
      contentId: $contentId
      createdAt: $createdAt
    ) {
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
export const onDeleteCH_Gen2_Favorite = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Favorite(
    $id: ID
    $userId: ID
    $contentId: ID
    $createdAt: AWSDateTime
  ) {
    onDeleteCH_Gen2_Favorite(
      id: $id
      userId: $userId
      contentId: $contentId
      createdAt: $createdAt
    ) {
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
export const onCreateCH_Gen2_Invoice = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Invoice(
    $id: ID
    $userId: ID
    $subscriptionId: ID
    $paymentId: ID
    $invoiceNumber: String
  ) {
    onCreateCH_Gen2_Invoice(
      id: $id
      userId: $userId
      subscriptionId: $subscriptionId
      paymentId: $paymentId
      invoiceNumber: $invoiceNumber
    ) {
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
export const onUpdateCH_Gen2_Invoice = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Invoice(
    $id: ID
    $userId: ID
    $subscriptionId: ID
    $paymentId: ID
    $invoiceNumber: String
  ) {
    onUpdateCH_Gen2_Invoice(
      id: $id
      userId: $userId
      subscriptionId: $subscriptionId
      paymentId: $paymentId
      invoiceNumber: $invoiceNumber
    ) {
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
export const onDeleteCH_Gen2_Invoice = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Invoice(
    $id: ID
    $userId: ID
    $subscriptionId: ID
    $paymentId: ID
    $invoiceNumber: String
  ) {
    onDeleteCH_Gen2_Invoice(
      id: $id
      userId: $userId
      subscriptionId: $subscriptionId
      paymentId: $paymentId
      invoiceNumber: $invoiceNumber
    ) {
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
export const onCreateCH_Gen2_Notification = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Notification(
    $id: ID
    $userId: ID
    $title: String
    $message: String
    $isRead: Boolean
  ) {
    onCreateCH_Gen2_Notification(
      id: $id
      userId: $userId
      title: $title
      message: $message
      isRead: $isRead
    ) {
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
export const onUpdateCH_Gen2_Notification = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Notification(
    $id: ID
    $userId: ID
    $title: String
    $message: String
    $isRead: Boolean
  ) {
    onUpdateCH_Gen2_Notification(
      id: $id
      userId: $userId
      title: $title
      message: $message
      isRead: $isRead
    ) {
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
export const onDeleteCH_Gen2_Notification = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Notification(
    $id: ID
    $userId: ID
    $title: String
    $message: String
    $isRead: Boolean
  ) {
    onDeleteCH_Gen2_Notification(
      id: $id
      userId: $userId
      title: $title
      message: $message
      isRead: $isRead
    ) {
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
export const onCreateCH_Gen2_Payment = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Payment(
    $id: ID
    $userId: ID
    $subscriptionId: ID
    $amount: Float
    $currency: String
  ) {
    onCreateCH_Gen2_Payment(
      id: $id
      userId: $userId
      subscriptionId: $subscriptionId
      amount: $amount
      currency: $currency
    ) {
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
export const onUpdateCH_Gen2_Payment = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Payment(
    $id: ID
    $userId: ID
    $subscriptionId: ID
    $amount: Float
    $currency: String
  ) {
    onUpdateCH_Gen2_Payment(
      id: $id
      userId: $userId
      subscriptionId: $subscriptionId
      amount: $amount
      currency: $currency
    ) {
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
export const onDeleteCH_Gen2_Payment = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Payment(
    $id: ID
    $userId: ID
    $subscriptionId: ID
    $amount: Float
    $currency: String
  ) {
    onDeleteCH_Gen2_Payment(
      id: $id
      userId: $userId
      subscriptionId: $subscriptionId
      amount: $amount
      currency: $currency
    ) {
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
export const onCreateCH_Gen2_Review = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Review(
    $id: ID
    $userId: ID
    $contentId: ID
    $rating: Int
    $reviewText: String
  ) {
    onCreateCH_Gen2_Review(
      id: $id
      userId: $userId
      contentId: $contentId
      rating: $rating
      reviewText: $reviewText
    ) {
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
export const onUpdateCH_Gen2_Review = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Review(
    $id: ID
    $userId: ID
    $contentId: ID
    $rating: Int
    $reviewText: String
  ) {
    onUpdateCH_Gen2_Review(
      id: $id
      userId: $userId
      contentId: $contentId
      rating: $rating
      reviewText: $reviewText
    ) {
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
export const onDeleteCH_Gen2_Review = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Review(
    $id: ID
    $userId: ID
    $contentId: ID
    $rating: Int
    $reviewText: String
  ) {
    onDeleteCH_Gen2_Review(
      id: $id
      userId: $userId
      contentId: $contentId
      rating: $rating
      reviewText: $reviewText
    ) {
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
export const onCreateCH_Gen2_Subscription = /* GraphQL */ `
  subscription OnCreateCH_Gen2_Subscription(
    $id: ID
    $userId: ID
    $planId: ID
    $startDate: String
    $endDate: String
  ) {
    onCreateCH_Gen2_Subscription(
      id: $id
      userId: $userId
      planId: $planId
      startDate: $startDate
      endDate: $endDate
    ) {
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
export const onUpdateCH_Gen2_Subscription = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_Subscription(
    $id: ID
    $userId: ID
    $planId: ID
    $startDate: String
    $endDate: String
  ) {
    onUpdateCH_Gen2_Subscription(
      id: $id
      userId: $userId
      planId: $planId
      startDate: $startDate
      endDate: $endDate
    ) {
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
export const onDeleteCH_Gen2_Subscription = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_Subscription(
    $id: ID
    $userId: ID
    $planId: ID
    $startDate: String
    $endDate: String
  ) {
    onDeleteCH_Gen2_Subscription(
      id: $id
      userId: $userId
      planId: $planId
      startDate: $startDate
      endDate: $endDate
    ) {
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
export const onCreateCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  subscription OnCreateCH_Gen2_SubscriptionPlan(
    $id: ID
    $name: String
    $description: String
    $price: Float
    $currency: String
  ) {
    onCreateCH_Gen2_SubscriptionPlan(
      id: $id
      name: $name
      description: $description
      price: $price
      currency: $currency
    ) {
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
export const onUpdateCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_SubscriptionPlan(
    $id: ID
    $name: String
    $description: String
    $price: Float
    $currency: String
  ) {
    onUpdateCH_Gen2_SubscriptionPlan(
      id: $id
      name: $name
      description: $description
      price: $price
      currency: $currency
    ) {
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
export const onDeleteCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_SubscriptionPlan(
    $id: ID
    $name: String
    $description: String
    $price: Float
    $currency: String
  ) {
    onDeleteCH_Gen2_SubscriptionPlan(
      id: $id
      name: $name
      description: $description
      price: $price
      currency: $currency
    ) {
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
export const onCreateCH_Gen2_WatchHistory = /* GraphQL */ `
  subscription OnCreateCH_Gen2_WatchHistory(
    $id: ID
    $userId: ID
    $contentId: ID
    $progress: Int
    $duration: Int
  ) {
    onCreateCH_Gen2_WatchHistory(
      id: $id
      userId: $userId
      contentId: $contentId
      progress: $progress
      duration: $duration
    ) {
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
export const onUpdateCH_Gen2_WatchHistory = /* GraphQL */ `
  subscription OnUpdateCH_Gen2_WatchHistory(
    $id: ID
    $userId: ID
    $contentId: ID
    $progress: Int
    $duration: Int
  ) {
    onUpdateCH_Gen2_WatchHistory(
      id: $id
      userId: $userId
      contentId: $contentId
      progress: $progress
      duration: $duration
    ) {
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
export const onDeleteCH_Gen2_WatchHistory = /* GraphQL */ `
  subscription OnDeleteCH_Gen2_WatchHistory(
    $id: ID
    $userId: ID
    $contentId: ID
    $progress: Int
    $duration: Int
  ) {
    onDeleteCH_Gen2_WatchHistory(
      id: $id
      userId: $userId
      contentId: $contentId
      progress: $progress
      duration: $duration
    ) {
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
