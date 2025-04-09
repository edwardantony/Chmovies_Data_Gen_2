import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
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
  }).authorization(allow => [allow.publicApiKey()]),

  // Categories Model
Categories: a.model({
  id: a.id().required(),
  name: a.string().required(),
  sortOrder: a.integer(),
  createdAt: a.datetime(),
  updatedAt: a.datetime(),
  titlesCategories: a.hasMany('TitlesCategories', 'categoryId'),
})
.secondaryIndexes((index) => [
  index('name').name('categorybyName'),
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
  name: a.string().required(),
  sortOrder: a.integer(),
  createdAt: a.datetime(),
  updatedAt: a.datetime(),
  titlesGenres: a.hasMany('TitlesGenres', 'genreId'),
})
.secondaryIndexes((index) => [
  index('name').name('genrebyName'),
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

  // Country: a.model({
  //   id: a.id().required(),
  //   name: a.string().required(),
  //   code: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   titlesCountries: a.hasMany('TitlesCountry', 'countryId')
  // }).authorization(allow => [allow.publicApiKey()]),
  
  // TitlesCountry: a.model({
  //   titleId: a.id().required(),
  //   countryId: a.id().required(),
  //   createdAt: a.datetime(),
  //   titles: a.belongsTo('Titles', 'titleId'),
  //   country: a.belongsTo('Country', 'countryId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // Subtitle: a.model({
  //   id: a.id().required(),
  //   language: a.string().required(),
  //   code: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   titlesSubtitles: a.hasMany('TitlesSubtitle', 'subtitleId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // TitlesSubtitle: a.model({
  //   titleId: a.id().required(),
  //   subtitleId: a.id().required(),
  //   createdAt: a.datetime(),
  //   titles: a.belongsTo('Titles', 'titleId'),
  //   subtitle: a.belongsTo('Subtitle', 'subtitleId')
  // }).authorization(allow => [allow.publicApiKey()]),


  // SubscriptionPlan: a.model({
  //   id: a.id().required(),
  //   name: a.string().required(),
  //   description: a.string(),
  //   price: a.float().required(),
  //   currency: a.string().default('USD'),
  //   billingCycle: a.enum(['Monthly', 'Quarterly', 'Yearly', 'Lifetime']),
  //   durationDays: a.integer().required(),
  //   maxScreens: a.integer().default(1),
  //   videoQuality: a.enum(['SD', 'HD', 'FHD', 'UHD']),
  //   isActive: a.boolean().default(true),
  //   features: a.json(),
  //   sortOrder: a.integer().default(0),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   userSubscriptions: a.hasMany('UserSubscription', 'planId')
  // }).authorization(allow => [allow.publicApiKey()]),


  Titles: a.model({
    id: a.id().required(),
    partnerId: a.id(),
    titleName: a.string().required(),
    localTitleName: a.string(),
    description: a.string(),
    releaseYear: a.integer().required(),
    duration: a.integer().default(0),
    type: a.enum(['Movie', 'TVShow', 'WebSeries', 'Live']),
    imagesDetails: a.json(),
    videoOriginal: a.json(),
    videoConverted: a.json(),
    analyticsId: a.string(),
    maturityRating: a.string(),
    audienceRating: a.float().default(0),
    audienceLike: a.integer().default(0),
    audienceDislike: a.integer().default(0),
    isFeatured: a.boolean().default(false),
    status: a.enum(['Active', 'Inactive', 'Draft']),
    sortOrder: a.integer(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
  //  Relationships (will be connected in Phase 3)
    categories: a.hasMany('TitlesCategories', 'titleId'),
    genres: a.hasMany('TitlesGenres', 'titleId'),
    audioTracks: a.hasMany('TitlesAudioTracks', 'titleId'),
    // countries: a.hasMany('TitlesCountry', 'titleId'),
    // subtitles: a.hasMany('TitlesSubtitle', 'titleId'),
    // userFavorites: a.hasMany('UserFavorite', 'titleId'),
    // userReviews: a.hasMany('UserReview', 'titleId'),
    // userWatchHistories: a.hasMany('UserWatchHistory', 'titleId')
  })
  .secondaryIndexes((index) => [
    index("titleName").name("byTitleName"),
    index("releaseYear").name("titlebyReleaseYear"),
  ])
  .authorization(allow => [allow.publicApiKey()]),

  // User: a.model({
  //   id: a.id().required(),
  //   cognitoId: a.string().required(),
  //   email: a.string().required(),
  //   username: a.string(),
  //   firstName: a.string(),
  //   lastName: a.string(),
  //   phoneNumber: a.string(),
  //   profilePicture: a.string(),
  //   dateOfBirth: a.date(),
  //   gender: a.enum(['Male', 'Female', 'Other', 'PreferNotToSay']),
  //   country: a.string(),
  //   languagePreference: a.string().default('en'),
  //   maturityPreference: a.string().default('PG'),
  //   status: a.enum(['Active', 'Inactive', 'Cancelled', 'Expired']),
  //   lastLogin: a.datetime(),
  //   accountStatus: a.enum(['Active', 'Suspended', 'Deleted']),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
    
  //   Relationships (will be connected in later phases)
  //    userFavorites: a.hasMany('UserFavorite', 'userId'),
  //    invoices: a.hasMany('Invoice', 'userId'),
  //    logs: a.hasMany('Log', 'userId'),
  //    notifications: a.hasMany('Notification', 'userId'),
  //    payments: a.hasMany('Payment', 'userId'),
  //    userReviews: a.hasMany('UserReview', 'userId'),
  //    userSubscriptions: a.hasMany('UserSubscription', 'userId'),
  //    userWatchHistories: a.hasMany('UserWatchHistory', 'userId')
  // }).authorization(allow => [allow.owner()]),

  // UserSubscription: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   planId: a.id().required(),
  //   startDate: a.date().required(),
  //   endDate: a.date().required(),
  //   status: a.enum(['Active', 'Inactive', 'Cancelled', 'Expired', 'Pending']),
  //   autoRenew: a.boolean().default(true),
  //   paymentMethod: a.string(),
  //   lastPaymentDate: a.datetime(),
  //   nextBillingDate: a.date(),
  //   cancellationDate: a.date(),
  //   cancellationReason: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
    
  //   // Relationships
  //   user: a.belongsTo('User', 'userId'),
  //   plan: a.belongsTo('SubscriptionPlan', 'planId'),
  //   invoices: a.hasMany('Invoice', 'userSubscriptionId'),
  //   payments: a.hasMany('Payment', 'userSubscriptionId')
  // }).authorization(allow => [allow.owner()]),

  // Payment: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   userSubscriptionId: a.id(),
  //   amount: a.float().required(),
  //   currency: a.string().default('USD'),
  //   paymentMethod: a.string().required(),
  //   paymentGateway: a.string().required(),
  //   transactionId: a.string().required(),
  //   status: a.enum(['Pending', 'Completed', 'Failed', 'Refunded']),
  //   paymentDate: a.datetime().required(),
  //   description: a.string(),
  //   metadata: a.json(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
    
  //   // Relationships
  //   user: a.belongsTo('User', 'userId'),
  //   userSubscription: a.belongsTo('UserSubscription', 'userSubscriptionId'),
  //   invoices: a.hasMany('Invoice', 'paymentId')
  // }).authorization(allow => [allow.owner()]),


  // Invoice: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   userSubscriptionId: a.id(),
  //   paymentId: a.id(),
  //   invoiceNumber: a.string().required(),
  //   amount: a.float().required(),
  //   currency: a.string().default('USD'),
  //   taxAmount: a.float(),
  //   discountAmount: a.float(),
  //   totalAmount: a.float().required(),
  //   billingPeriod: a.string(),
  //   invoiceDate: a.date().required(),
  //   dueDate: a.date().required(),
  //   status: a.enum(['Draft', 'Sent', 'Paid', 'Overdue', 'Cancelled']),
  //   pdfUrl: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
    
  //   // Relationships
  //   user: a.belongsTo('User', 'userId'),
  //   userSubscription: a.belongsTo('UserSubscription', 'userSubscriptionId'),
  //   payment: a.belongsTo('Payment', 'paymentId')
  // }).authorization(allow => [allow.owner()]),

  // UserFavorite: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   titleId: a.id().required(),
  //   createdAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId'),
  //   title: a.belongsTo('Titles', 'titleId')
  // }).authorization(allow => [allow.owner()]),


  // UserReview: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   titleId: a.id().required(),
  //   rating: a.integer().required(),
  //   reviewText: a.string(),
  //   isApproved: a.boolean().default(false),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId'),
  //   title: a.belongsTo('Titles', 'titleId')
  // }).authorization(allow => [allow.owner()]),


  // UserWatchHistory: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   titleId: a.id().required(),
  //   progress: a.integer().required(),
  //   duration: a.integer().required(),
  //   lastWatchedAt: a.datetime().required(),
  //   deviceInfo: a.json(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId'),
  //   title: a.belongsTo('Titles', 'titleId')
  // }).authorization(allow => [allow.owner()]),

  // Log: a.model({
  //   id: a.id().required(),
  //   userId: a.id(),
  //   action: a.string().required(),
  //   entityType: a.string(),
  //   entityId: a.string(),
  //   ipAddress: a.string(),
  //   userAgent: a.string(),
  //   metadata: a.json(),
  //   createdAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId')
  // }).authorization(allow => [allow.owner()]),

  // Notification: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   title: a.string().required(),
  //   message: a.string().required(),
  //   type: a.enum(['System', 'Payment', 'Titles', 'Promotional']),
  //   isRead: a.boolean().default(false),
  //   relatedId: a.string(),
  //   relatedType: a.string(),
  //   createdAt: a.datetime(),
  //   readAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId')
  // }).authorization(allow => [allow.owner()])

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