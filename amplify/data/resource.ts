import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  // AudioTrack: a.model({
  //   id: a.id().required(),
  //   language: a.string().required(),
  //   code: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   contentAudioTracks: a.hasMany('ContentAudioTrack', 'audioId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // ContentAudioTrack: a.model({
  //   contentId: a.id().required(),
  //   audioId: a.id().required(),
  //   createdAt: a.datetime(),
  //   content: a.belongsTo('Content', 'contentId'),
  //   audioTrack: a.belongsTo('AudioTrack', 'audioId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // Category: a.model({
  //   id: a.id().required(),
  //   name: a.string().required(),
  //   sortOrder: a.integer().default(0),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   contentCategories: a.hasMany('ContentCategory', 'categoryId')
  // })
  // .authorization(allow => [allow.publicApiKey()]),

  // ContentCategory: a.model({
  //   contentId: a.id().required(),
  //   categoryId: a.id().required(),
  //   createdAt: a.datetime(),
  //   content: a.belongsTo('Content', 'contentId'),
  //   category: a.belongsTo('Category', 'categoryId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // Genres: a.model({
  //   id: a.id().required(),
  //   name: a.string().required(),
  //   sortOrder: a.integer().default(0),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   contentGenres: a.hasMany('ContentGenre', 'genreId') 
  // })
  // .identifier(["id", "sortOrder"])
  // .secondaryIndexes((index) => [
  //     index("id").name("byCreated").sortKeys(["createdAt"]),
  // ])
  // .authorization((allow) => [allow.publicApiKey()]),

  // ContentGenres: a.model({
  //   contentId: a.id().required(),
  //   genreId: a.id().required(),
  //   genreSortOrder: a.integer().required(),
  //   createdAt: a.datetime(),
  //   content: a.belongsTo('Content', 'contentId'),
  // }).authorization((allow) => [allow.publicApiKey()]),

  // Country: a.model({
  //   id: a.id().required(),
  //   name: a.string().required(),
  //   code: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   contentCountries: a.hasMany('ContentCountry', 'countryId')
  // }).authorization(allow => [allow.publicApiKey()]),
  
  // ContentCountry: a.model({
  //   contentId: a.id().required(),
  //   countryId: a.id().required(),
  //   createdAt: a.datetime(),
  //   content: a.belongsTo('Content', 'contentId'),
  //   country: a.belongsTo('Country', 'countryId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // Subtitle: a.model({
  //   id: a.id().required(),
  //   language: a.string().required(),
  //   code: a.string(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   contentSubtitles: a.hasMany('ContentSubtitle', 'subtitleId')
  // }).authorization(allow => [allow.publicApiKey()]),

  // ContentSubtitle: a.model({
  //   contentId: a.id().required(),
  //   subtitleId: a.id().required(),
  //   createdAt: a.datetime(),
  //   content: a.belongsTo('Content', 'contentId'),
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
    releaseDate: a.date(),
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
    sortOrder: a.integer().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    
  //  Relationships (will be connected in Phase 3)
    // audioTracks: a.hasMany('ContentAudioTrack', 'contentId'),
    // categories: a.hasMany('ContentCategory', 'contentId'),
    // countries: a.hasMany('ContentCountry', 'contentId'),
    // genres: a.hasMany('ContentGenre', 'contentId'),
    // subtitles: a.hasMany('ContentSubtitle', 'contentId'),
    // userFavorites: a.hasMany('UserFavorite', 'contentId'),
    // userReviews: a.hasMany('UserReview', 'contentId'),
    // userWatchHistories: a.hasMany('UserWatchHistory', 'contentId')
  })
  .identifier(['id', 'sortOrder'])
  .secondaryIndexes((index) => [
    index("titleName").name("byTitleName").sortKeys(["sortOrder", "createdAt"])
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
  //   contentId: a.id().required(),
  //   createdAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId'),
  //   content: a.belongsTo('Content', 'contentId')
  // }).authorization(allow => [allow.owner()]),


  // UserReview: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   contentId: a.id().required(),
  //   rating: a.integer().required(),
  //   reviewText: a.string(),
  //   isApproved: a.boolean().default(false),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId'),
  //   content: a.belongsTo('Content', 'contentId')
  // }).authorization(allow => [allow.owner()]),


  // UserWatchHistory: a.model({
  //   id: a.id().required(),
  //   userId: a.id().required(),
  //   contentId: a.id().required(),
  //   progress: a.integer().required(),
  //   duration: a.integer().required(),
  //   lastWatchedAt: a.datetime().required(),
  //   deviceInfo: a.json(),
  //   createdAt: a.datetime(),
  //   updatedAt: a.datetime(),
  //   user: a.belongsTo('User', 'userId'),
  //   content: a.belongsTo('Content', 'contentId')
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
  //   type: a.enum(['System', 'Payment', 'Content', 'Promotional']),
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