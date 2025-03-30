/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
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
export const createContent = /* GraphQL */ `
  mutation CreateContent($input: CreateContentInput!) {
    createContent(input: $input) {
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
export const updateContent = /* GraphQL */ `
  mutation UpdateContent($id: ID!, $input: UpdateContentInput!) {
    updateContent(id: $id, input: $input) {
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
export const createCH_Gen2_Content = /* GraphQL */ `
  mutation CreateCH_Gen2_Content($input: CreateCH_Gen2_ContentInput!) {
    createCH_Gen2_Content(input: $input) {
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
export const updateCH_Gen2_Content = /* GraphQL */ `
  mutation UpdateCH_Gen2_Content($input: UpdateCH_Gen2_ContentInput!) {
    updateCH_Gen2_Content(input: $input) {
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
export const deleteCH_Gen2_Content = /* GraphQL */ `
  mutation DeleteCH_Gen2_Content($input: DeleteCH_Gen2_ContentInput!) {
    deleteCH_Gen2_Content(input: $input) {
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
export const createCH_Gen2_User = /* GraphQL */ `
  mutation CreateCH_Gen2_User($input: CreateCH_Gen2_UserInput!) {
    createCH_Gen2_User(input: $input) {
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
export const updateCH_Gen2_User = /* GraphQL */ `
  mutation UpdateCH_Gen2_User($input: UpdateCH_Gen2_UserInput!) {
    updateCH_Gen2_User(input: $input) {
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
export const deleteCH_Gen2_User = /* GraphQL */ `
  mutation DeleteCH_Gen2_User($input: DeleteCH_Gen2_UserInput!) {
    deleteCH_Gen2_User(input: $input) {
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
export const createCH_Gen2_Country = /* GraphQL */ `
  mutation CreateCH_Gen2_Country($input: CreateCH_Gen2_CountryInput!) {
    createCH_Gen2_Country(input: $input) {
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
export const updateCH_Gen2_Country = /* GraphQL */ `
  mutation UpdateCH_Gen2_Country($input: UpdateCH_Gen2_CountryInput!) {
    updateCH_Gen2_Country(input: $input) {
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
export const deleteCH_Gen2_Country = /* GraphQL */ `
  mutation DeleteCH_Gen2_Country($input: DeleteCH_Gen2_CountryInput!) {
    deleteCH_Gen2_Country(input: $input) {
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
export const createCH_Gen2_Category = /* GraphQL */ `
  mutation CreateCH_Gen2_Category($input: CreateCH_Gen2_CategoryInput!) {
    createCH_Gen2_Category(input: $input) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCH_Gen2_Category = /* GraphQL */ `
  mutation UpdateCH_Gen2_Category($input: UpdateCH_Gen2_CategoryInput!) {
    updateCH_Gen2_Category(input: $input) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCH_Gen2_Category = /* GraphQL */ `
  mutation DeleteCH_Gen2_Category($input: DeleteCH_Gen2_CategoryInput!) {
    deleteCH_Gen2_Category(input: $input) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCH_Gen2_Genre = /* GraphQL */ `
  mutation CreateCH_Gen2_Genre($input: CreateCH_Gen2_GenreInput!) {
    createCH_Gen2_Genre(input: $input) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCH_Gen2_Genre = /* GraphQL */ `
  mutation UpdateCH_Gen2_Genre($input: UpdateCH_Gen2_GenreInput!) {
    updateCH_Gen2_Genre(input: $input) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCH_Gen2_Genre = /* GraphQL */ `
  mutation DeleteCH_Gen2_Genre($input: DeleteCH_Gen2_GenreInput!) {
    deleteCH_Gen2_Genre(input: $input) {
      id
      name
      sortOrder
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCH_Gen2_AudioTrack = /* GraphQL */ `
  mutation CreateCH_Gen2_AudioTrack($input: CreateCH_Gen2_AudioTrackInput!) {
    createCH_Gen2_AudioTrack(input: $input) {
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
export const updateCH_Gen2_AudioTrack = /* GraphQL */ `
  mutation UpdateCH_Gen2_AudioTrack($input: UpdateCH_Gen2_AudioTrackInput!) {
    updateCH_Gen2_AudioTrack(input: $input) {
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
export const deleteCH_Gen2_AudioTrack = /* GraphQL */ `
  mutation DeleteCH_Gen2_AudioTrack($input: DeleteCH_Gen2_AudioTrackInput!) {
    deleteCH_Gen2_AudioTrack(input: $input) {
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
export const createCH_Gen2_Subtitle = /* GraphQL */ `
  mutation CreateCH_Gen2_Subtitle($input: CreateCH_Gen2_SubtitleInput!) {
    createCH_Gen2_Subtitle(input: $input) {
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
export const updateCH_Gen2_Subtitle = /* GraphQL */ `
  mutation UpdateCH_Gen2_Subtitle($input: UpdateCH_Gen2_SubtitleInput!) {
    updateCH_Gen2_Subtitle(input: $input) {
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
export const deleteCH_Gen2_Subtitle = /* GraphQL */ `
  mutation DeleteCH_Gen2_Subtitle($input: DeleteCH_Gen2_SubtitleInput!) {
    deleteCH_Gen2_Subtitle(input: $input) {
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
export const createCH_Gen2_Favorite = /* GraphQL */ `
  mutation CreateCH_Gen2_Favorite($input: CreateCH_Gen2_FavoriteInput!) {
    createCH_Gen2_Favorite(input: $input) {
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
export const updateCH_Gen2_Favorite = /* GraphQL */ `
  mutation UpdateCH_Gen2_Favorite($input: UpdateCH_Gen2_FavoriteInput!) {
    updateCH_Gen2_Favorite(input: $input) {
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
export const deleteCH_Gen2_Favorite = /* GraphQL */ `
  mutation DeleteCH_Gen2_Favorite($input: DeleteCH_Gen2_FavoriteInput!) {
    deleteCH_Gen2_Favorite(input: $input) {
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
export const createCH_Gen2_Invoice = /* GraphQL */ `
  mutation CreateCH_Gen2_Invoice($input: CreateCH_Gen2_InvoiceInput!) {
    createCH_Gen2_Invoice(input: $input) {
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
export const updateCH_Gen2_Invoice = /* GraphQL */ `
  mutation UpdateCH_Gen2_Invoice($input: UpdateCH_Gen2_InvoiceInput!) {
    updateCH_Gen2_Invoice(input: $input) {
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
export const deleteCH_Gen2_Invoice = /* GraphQL */ `
  mutation DeleteCH_Gen2_Invoice($input: DeleteCH_Gen2_InvoiceInput!) {
    deleteCH_Gen2_Invoice(input: $input) {
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
export const createCH_Gen2_Notification = /* GraphQL */ `
  mutation CreateCH_Gen2_Notification(
    $input: CreateCH_Gen2_NotificationInput!
  ) {
    createCH_Gen2_Notification(input: $input) {
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
export const updateCH_Gen2_Notification = /* GraphQL */ `
  mutation UpdateCH_Gen2_Notification(
    $input: UpdateCH_Gen2_NotificationInput!
  ) {
    updateCH_Gen2_Notification(input: $input) {
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
export const deleteCH_Gen2_Notification = /* GraphQL */ `
  mutation DeleteCH_Gen2_Notification(
    $input: DeleteCH_Gen2_NotificationInput!
  ) {
    deleteCH_Gen2_Notification(input: $input) {
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
export const createCH_Gen2_Payment = /* GraphQL */ `
  mutation CreateCH_Gen2_Payment($input: CreateCH_Gen2_PaymentInput!) {
    createCH_Gen2_Payment(input: $input) {
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
export const updateCH_Gen2_Payment = /* GraphQL */ `
  mutation UpdateCH_Gen2_Payment($input: UpdateCH_Gen2_PaymentInput!) {
    updateCH_Gen2_Payment(input: $input) {
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
export const deleteCH_Gen2_Payment = /* GraphQL */ `
  mutation DeleteCH_Gen2_Payment($input: DeleteCH_Gen2_PaymentInput!) {
    deleteCH_Gen2_Payment(input: $input) {
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
export const createCH_Gen2_Review = /* GraphQL */ `
  mutation CreateCH_Gen2_Review($input: CreateCH_Gen2_ReviewInput!) {
    createCH_Gen2_Review(input: $input) {
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
export const updateCH_Gen2_Review = /* GraphQL */ `
  mutation UpdateCH_Gen2_Review($input: UpdateCH_Gen2_ReviewInput!) {
    updateCH_Gen2_Review(input: $input) {
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
export const deleteCH_Gen2_Review = /* GraphQL */ `
  mutation DeleteCH_Gen2_Review($input: DeleteCH_Gen2_ReviewInput!) {
    deleteCH_Gen2_Review(input: $input) {
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
export const createCH_Gen2_Subscription = /* GraphQL */ `
  mutation CreateCH_Gen2_Subscription(
    $input: CreateCH_Gen2_SubscriptionInput!
  ) {
    createCH_Gen2_Subscription(input: $input) {
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
export const updateCH_Gen2_Subscription = /* GraphQL */ `
  mutation UpdateCH_Gen2_Subscription(
    $input: UpdateCH_Gen2_SubscriptionInput!
  ) {
    updateCH_Gen2_Subscription(input: $input) {
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
export const deleteCH_Gen2_Subscription = /* GraphQL */ `
  mutation DeleteCH_Gen2_Subscription(
    $input: DeleteCH_Gen2_SubscriptionInput!
  ) {
    deleteCH_Gen2_Subscription(input: $input) {
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
export const createCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  mutation CreateCH_Gen2_SubscriptionPlan(
    $input: CreateCH_Gen2_SubscriptionPlanInput!
  ) {
    createCH_Gen2_SubscriptionPlan(input: $input) {
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
export const updateCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  mutation UpdateCH_Gen2_SubscriptionPlan(
    $input: UpdateCH_Gen2_SubscriptionPlanInput!
  ) {
    updateCH_Gen2_SubscriptionPlan(input: $input) {
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
export const deleteCH_Gen2_SubscriptionPlan = /* GraphQL */ `
  mutation DeleteCH_Gen2_SubscriptionPlan(
    $input: DeleteCH_Gen2_SubscriptionPlanInput!
  ) {
    deleteCH_Gen2_SubscriptionPlan(input: $input) {
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
export const createCH_Gen2_WatchHistory = /* GraphQL */ `
  mutation CreateCH_Gen2_WatchHistory(
    $input: CreateCH_Gen2_WatchHistoryInput!
  ) {
    createCH_Gen2_WatchHistory(input: $input) {
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
export const updateCH_Gen2_WatchHistory = /* GraphQL */ `
  mutation UpdateCH_Gen2_WatchHistory(
    $input: UpdateCH_Gen2_WatchHistoryInput!
  ) {
    updateCH_Gen2_WatchHistory(input: $input) {
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
export const deleteCH_Gen2_WatchHistory = /* GraphQL */ `
  mutation DeleteCH_Gen2_WatchHistory(
    $input: DeleteCH_Gen2_WatchHistoryInput!
  ) {
    deleteCH_Gen2_WatchHistory(input: $input) {
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
