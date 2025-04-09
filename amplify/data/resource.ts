import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({

  Casts: a.model({
    id: a.id().required(),
    name: a.string().required(),
    role: a.string(),
    characterName: a.string(),
    profilePicture: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  
    // Relationship
    titlesCasts: a.hasMany('TitlesCasts', 'castId')
  }).authorization(allow => [allow.publicApiKey()]),

  TitlesCasts: a.model({
    titleId: a.id().required(),
    castId: a.id().required(),
    createdAt: a.datetime(),
  
    // Relationships
    title: a.belongsTo('Titles', 'titleId'),
    cast: a.belongsTo('Casts', 'castId')
  })
  .identifier(['titleId', 'castId'])
  .authorization(allow => [allow.publicApiKey()]),


  Crews: a.model({
    id: a.id().required(),
    name: a.string().required(),
    job: a.string().required(),
    profilePicture: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  
    // Relationship
    titlesCrews: a.hasMany('TitlesCrews', 'crewId')
  }).authorization(allow => [allow.publicApiKey()]),

  TitlesCrews: a.model({
    titleId: a.id().required(),
    crewId: a.id().required(),
    createdAt: a.datetime(),
  
    // Relationships
    title: a.belongsTo('Titles', 'titleId'),
    crew: a.belongsTo('Crews', 'crewId')
  })
  .identifier(['titleId', 'crewId'])
  .authorization(allow => [allow.publicApiKey()]),



  AudioTracks: a.model({
    id: a.id().required(),
    language: a.string().required(),
    code: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    titlesAudioTracks: a.hasMany('TitlesAudioTracks', 'audioId')
  }).authorization(allow => [allow.publicApiKey()]),

  TitlesAudioTracks: a.model({
    titleId: a.id().required(),
    audioId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    audioTrack: a.belongsTo('AudioTracks', 'audioId')
  })
  .identifier(['titleId', 'audioId'])
  .authorization(allow => [allow.publicApiKey()]),

  // Categories Model
  Categories: a.model({
    id: a.id().required(),
    categoryName: a.string().required(),
    categorySymbol: a.string(),
    sortOrder: a.integer(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    titlesCategories: a.hasMany('TitlesCategories', 'categoryId'),
  })
  .secondaryIndexes((index) => [
    index('categoryName').name('categorybyName'),
  ])
  .authorization((allow) => [allow.publicApiKey()]),

  // TitlesCategories Join Model
  TitlesCategories: a.model({
    titleId: a.id().required(),
    categoryId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    category: a.belongsTo('Categories', 'categoryId'),
  })
  .identifier(['titleId', 'categoryId'])
  .authorization((allow) => [allow.publicApiKey()]),
    
  // Genres Model
  Genres: a.model({
    id: a.id().required(),
    genreName: a.string().required(),
    genreSymbol: a.string(),
    sortOrder: a.integer(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    titlesGenres: a.hasMany('TitlesGenres', 'genreId'),
  })
  .secondaryIndexes((index) => [
    index('genreName').name('genrebyName'),
  ])
  .authorization((allow) => [allow.publicApiKey()]),

  // TitlesGenres Join Model
  TitlesGenres: a.model({
    titleId: a.id().required(),
    genreId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    genre: a.belongsTo('Genres', 'genreId'),
  })
  .identifier(['titleId', 'genreId'])
  .authorization((allow) => [allow.publicApiKey()]),

  Countries: a.model({
    id: a.id().required(),
    name: a.string().required(),
    code: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    titlesCountries: a.hasMany('TitlesCountries', 'countryId')
  }).authorization(allow => [allow.publicApiKey()]),
    
  TitlesCountries: a.model({
    titleId: a.id().required(),
    countryId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    country: a.belongsTo('Countries', 'countryId')
  })
  .identifier(['titleId', 'countryId'])
  .authorization(allow => [allow.publicApiKey()]),

  Subtitles: a.model({
    id: a.id().required(),
    language: a.string().required(),
    code: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    titlesSubtitles: a.hasMany('TitlesSubtitles', 'subtitleId')
  }).authorization(allow => [allow.publicApiKey()]),

  TitlesSubtitles: a.model({
    titleId: a.id().required(),
    subtitleId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    subtitle: a.belongsTo('Subtitles', 'subtitleId')
  })
  .identifier(['titleId', 'subtitleId'])
  .authorization(allow => [allow.publicApiKey()]),

  SubscriptionPlans: a.model({
    id: a.id().required(),
    name: a.string().required(),
    description: a.string(),
    price: a.float().required(),
    currency: a.string().default('USD'),
    billingCycle: a.enum(['Monthly', 'Quarterly', 'Yearly', 'Lifetime']),
    durationDays: a.integer().required(),
    maxScreens: a.integer().default(1),
    videoQuality: a.enum(['SD', 'HD', 'FHD', 'UHD']),
    isActive: a.boolean().default(false),
    features: a.json(),
    sortOrder: a.integer(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    // Relationships 
    userSubscriptions: a.hasMany('UserSubscriptions', 'planId'),
    titlesSubscriptionPlans: a.hasMany('TitlesSubscriptionPlans', 'planId')
  }).authorization(allow => [allow.publicApiKey()]),

  TitlesSubscriptionPlans: a.model({
    titleId: a.id().required(),
    planId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    subscriptionPlan: a.belongsTo('SubscriptionPlans', 'planId')
  })
  .identifier(['titleId', 'planId'])
  .authorization(allow => [allow.publicApiKey()]),


  MaturityRatings: a.model({
    id: a.id().required(),
    country: a.string().required(),
    rating: a.string().required(),
    description: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  
    // Relationships
    titlesMaturityRatings: a.hasMany('TitlesMaturityRatings', 'maturityRatingId')
  })
  .authorization(allow => [allow.publicApiKey()]),

  TitlesMaturityRatings: a.model({
    titleId: a.id().required(),
    maturityRatingId: a.id().required(),
    createdAt: a.datetime(),
    title: a.belongsTo('Titles', 'titleId'),
    maturityRating: a.belongsTo('MaturityRatings', 'maturityRatingId')
  })
  .identifier(['titleId', 'maturityRatingId'])
  .authorization(allow => [allow.publicApiKey()]),


  Titles: a.model({
    id: a.id().required(),
    partnerId: a.id(),
    titleName: a.string().required(),
    localTitleName: a.string(),
    description: a.string(),
    releaseYear: a.integer().required(),
    duration: a.integer().default(0),
    type: a.enum(['Movie', 'TVShow', 'WebSeries', 'Live']),
    showTitleIn: a.enum(['CableTV', 'OTT', 'All', 'Draft']),
    tags: a.json(),
    imagesDetails: a.json(),
    videoOriginal: a.json(),
    videoConverted: a.json(),
    analyticsId: a.string(),
    imdbRating: a.float().default(0),
    audienceRating: a.float().default(0),
    audienceLike: a.integer().default(0),
    audienceDislike: a.integer().default(0),
    isFeatured: a.boolean().default(false),
    status: a.enum(['Active', 'Inactive', 'Draft']),
    sortOrder: a.integer(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
    // Relationships
    categories: a.hasMany('TitlesCategories', 'titleId'),
    genres: a.hasMany('TitlesGenres', 'titleId'),
    audioTracks: a.hasMany('TitlesAudioTracks', 'titleId'),
    countries: a.hasMany('TitlesCountries', 'titleId'),
    subtitles: a.hasMany('TitlesSubtitles', 'titleId'),
    subscriptionPlans: a.hasMany('TitlesSubscriptionPlans', 'titleId'),
    maturityRatings: a.hasMany('TitlesMaturityRatings', 'titleId'),
    userFavorites: a.hasMany('UserFavorites', 'titleId'),
    userReviews: a.hasMany('UserReviews', 'titleId'),
    userReactions: a.hasMany('UserReactions', 'titleId'),
    userWatchHistories: a.hasMany('UserWatchHistories', 'titleId'),
    casts: a.hasMany('TitlesCasts', 'titleId'),
    crews: a.hasMany('TitlesCrews', 'titleId'),
  })
  .secondaryIndexes((index) => [
    index("titleName").name("byTitleName"),
    index("releaseYear").name("titlebyReleaseYear"),
  ])
  .authorization(allow => [allow.publicApiKey()]),

  Users: a.model({
    id: a.id().required(),
    cognitoId: a.string().required(),
    email: a.string().required(),
    username: a.string(),
    firstName: a.string(),
    lastName: a.string(),
    phoneNumber: a.string(),
    profilePicture: a.string(),
    dateOfBirth: a.date(),
    gender: a.enum(['Male', 'Female', 'Other', 'PreferNotToSay']),
    role: a.json(),
    country: a.string(),
    status: a.enum(['Active', 'Inactive', 'Cancelled', 'Expired']),
    lastLogin: a.datetime(),
    accountStatus: a.enum(['Active', 'Suspended', 'Deleted']),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
  //  Relationships (will be connected in later phases)
    userFavorites: a.hasMany('UserFavorites', 'userId'),
    invoices: a.hasMany('Invoices', 'userId'),
    logs: a.hasMany('Logs', 'userId'),
    notifications: a.hasMany('Notifications', 'userId'),
    payments: a.hasMany('Payments', 'userId'),
    userReviews: a.hasMany('UserReviews', 'userId'),
    userProfiles: a.hasMany('UserProfiles', 'userId'),
    userReactions: a.hasMany('UserReactions', 'userId'),
    userSubscriptions: a.hasMany('UserSubscriptions', 'userId'),
    userWatchHistories: a.hasMany('UserWatchHistories', 'userId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),


  UserProfiles: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    profileName: a.string().required(),
    pin: a.integer(),
    languagePreference: a.json(),
    isActive: a.boolean().default(true),
    avatar: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),

    // Relationships
    user: a.belongsTo('Users', 'userId'),
  })  
  .secondaryIndexes(index => [
    index('userId').name('byUserId'),
  ])
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  UserSubscriptions: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    planId: a.id().required(),
    startDate: a.date().required(),
    endDate: a.date().required(),
    status: a.enum(['Active', 'Inactive', 'Cancelled', 'Expired', 'Pending']),
    autoRenew: a.boolean().default(true),
    paymentMethod: a.string(),
    lastPaymentDate: a.datetime(),
    nextBillingDate: a.date(),
    cancellationDate: a.date(),
    cancellationReason: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
    // Relationships
   user: a.belongsTo('Users', 'userId'),
   plan: a.belongsTo('SubscriptionPlans', 'planId'),
   invoice: a.hasMany('Invoices', 'userSubscriptionId'),
   payment: a.hasMany('Payments', 'userSubscriptionId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  Payments: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    userSubscriptionId: a.id(),
    amount: a.float().required(),
    currency: a.string().default('USD'),
    paymentMethod: a.string().required(),
    paymentGateway: a.string().required(),
    transactionId: a.string().required(),
    status: a.enum(['Pending', 'Completed', 'Failed', 'Refunded']),
    paymentDate: a.datetime().required(),
    description: a.string(),
    metadata: a.json(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
    // Relationships
    user: a.belongsTo('Users', 'userId'),
    userSubscription: a.belongsTo('UserSubscriptions', 'userSubscriptionId'),
    invoices: a.hasMany('Invoices', 'paymentId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  Invoices: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    userSubscriptionId: a.id(),
    paymentId: a.id(),
    invoiceNumber: a.string().required(),
    amount: a.float().required(),
    currency: a.string().default('USD'),
    taxAmount: a.float(),
    discountAmount: a.float(),
    totalAmount: a.float().required(),
    billingPeriod: a.string(),
    invoiceDate: a.date().required(),
    dueDate: a.date().required(),
    status: a.enum(['Draft', 'Sent', 'Paid', 'Overdue', 'Cancelled']),
    pdfUrl: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
    // Relationships
     user: a.belongsTo('Users', 'userId'),
     userSubscription: a.belongsTo('UserSubscriptions', 'userSubscriptionId'),
     payment: a.belongsTo('Payments', 'paymentId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  UserFavorites: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    titleId: a.id().required(),
    createdAt: a.datetime(),

    // Relationships
    user: a.belongsTo('Users', 'userId'),
    title: a.belongsTo('Titles', 'titleId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  UserReviews: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    titleId: a.id().required(),
    rating: a.integer().required(),
    reviewText: a.string(),
    isApproved: a.boolean().default(false),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),

    // Relationships
    user: a.belongsTo('Users', 'userId'),
    title: a.belongsTo('Titles', 'titleId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  UserReactions: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    titleId: a.id().required(),
    reactionType: a.enum(['Like', 'Dislike']),
    createdAt: a.datetime(),
    // Relationships
    user: a.belongsTo('Users', 'userId'),
    title: a.belongsTo('Titles', 'titleId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),


  UserWatchHistories: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    titleId: a.id().required(),
    progress: a.integer().required(),
    duration: a.integer().required(),
    lastWatchedAt: a.datetime().required(),
    deviceInfo: a.json(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    // Relationships
    user: a.belongsTo('Users', 'userId'),
    title: a.belongsTo('Titles', 'titleId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  Logs: a.model({
    id: a.id().required(),
    userId: a.id(),
    action: a.string().required(),
    entityType: a.string(),
    entityId: a.string(),
    ipAddress: a.string(),
    userAgent: a.string(),
    metadata: a.json(),
    createdAt: a.datetime(),

    // Relationships
    user: a.belongsTo('Users', 'userId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  Notifications: a.model({
    id: a.id().required(),
    userId: a.id().required(),
    title: a.string().required(),
    message: a.string().required(),
    type: a.enum(['System', 'Payment', 'Titles', 'Promotional']),
    isRead: a.boolean().default(false),
    relatedId: a.string(),
    relatedType: a.string(),
    createdAt: a.datetime(),
    readAt: a.datetime(),

    // Relationships
    user: a.belongsTo('Users', 'userId')
  })
  .authorization(allow => [
    allow.owner(),
    allow.group('Admin'),
    allow.group('Moderator').to(['read', 'update'])
  ]),

  }).authorization(allow => [allow.authenticated()]);




  
  export type Schema = ClientSchema<typeof schema>;
  
  export const data = defineData({
    schema,
    authorizationModes: {
      defaultAuthorizationMode: "apiKey",
      apiKeyAuthorizationMode: {
        expiresInDays: 30,
      },
    },
  });