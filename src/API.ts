/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAudioTrackInput = {
  id?: string | null,
  language: string,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelAudioTrackConditionInput = {
  language?: ModelStringInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAudioTrackConditionInput | null > | null,
  or?: Array< ModelAudioTrackConditionInput | null > | null,
  not?: ModelAudioTrackConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AudioTrack = {
  __typename: "AudioTrack",
  id: string,
  language: string,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  contentAudioTracks?: ModelContentAudioTrackConnection | null,
};

export type ModelContentAudioTrackConnection = {
  __typename: "ModelContentAudioTrackConnection",
  items:  Array<ContentAudioTrack | null >,
  nextToken?: string | null,
};

export type ContentAudioTrack = {
  __typename: "ContentAudioTrack",
  contentId: string,
  audioId: string,
  createdAt?: string | null,
  content?: Content | null,
  audioTrack?: AudioTrack | null,
  id: string,
  updatedAt: string,
};

export type Content = {
  __typename: "Content",
  id: string,
  partnerId?: string | null,
  title: string,
  localTitle: string,
  description?: string | null,
  releaseDate?: string | null,
  duration?: number | null,
  type?: ContentType | null,
  imagesDetails?: string | null,
  videoOriginal?: string | null,
  videoConverted: string,
  videoId: string,
  analyticsId?: number | null,
  maturityRating: string,
  audienceRating?: number | null,
  audienceLike?: number | null,
  audienceDislike?: number | null,
  isFeatured?: boolean | null,
  status?: ContentStatus | null,
  sortOrder: number,
  createdAt?: string | null,
  updatedAt?: string | null,
  audioTracks?: ModelContentAudioTrackConnection | null,
  categories?: ModelContentCategoryConnection | null,
  countries?: ModelContentCountryConnection | null,
  genres?: ModelContentGenreConnection | null,
  subtitles?: ModelContentSubtitleConnection | null,
  userFavorites?: ModelUserFavoriteConnection | null,
  userReviews?: ModelUserReviewConnection | null,
  userWatchHistories?: ModelUserWatchHistoryConnection | null,
};

export enum ContentType {
  Movie = "Movie",
  TVShow = "TVShow",
  WebSeries = "WebSeries",
  Live = "Live",
}


export enum ContentStatus {
  Active = "Active",
  Inactive = "Inactive",
  Draft = "Draft",
}


export type ModelContentCategoryConnection = {
  __typename: "ModelContentCategoryConnection",
  items:  Array<ContentCategory | null >,
  nextToken?: string | null,
};

export type ContentCategory = {
  __typename: "ContentCategory",
  contentId: string,
  categoryId: string,
  createdAt?: string | null,
  content?: Content | null,
  category?: Category | null,
  id: string,
  updatedAt: string,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  contentCategories?: ModelContentCategoryConnection | null,
};

export type ModelContentCountryConnection = {
  __typename: "ModelContentCountryConnection",
  items:  Array<ContentCountry | null >,
  nextToken?: string | null,
};

export type ContentCountry = {
  __typename: "ContentCountry",
  contentId: string,
  countryId: string,
  createdAt?: string | null,
  content?: Content | null,
  country?: Country | null,
  id: string,
  updatedAt: string,
};

export type Country = {
  __typename: "Country",
  id: string,
  name: string,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  contentCountries?: ModelContentCountryConnection | null,
};

export type ModelContentGenreConnection = {
  __typename: "ModelContentGenreConnection",
  items:  Array<ContentGenre | null >,
  nextToken?: string | null,
};

export type ContentGenre = {
  __typename: "ContentGenre",
  contentId: string,
  genreId: string,
  createdAt?: string | null,
  content?: Content | null,
  genre?: Genre | null,
  id: string,
  updatedAt: string,
};

export type Genre = {
  __typename: "Genre",
  id: string,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  contentGenres?: ModelContentGenreConnection | null,
};

export type ModelContentSubtitleConnection = {
  __typename: "ModelContentSubtitleConnection",
  items:  Array<ContentSubtitle | null >,
  nextToken?: string | null,
};

export type ContentSubtitle = {
  __typename: "ContentSubtitle",
  contentId: string,
  subtitleId: string,
  createdAt?: string | null,
  content?: Content | null,
  subtitle?: Subtitle | null,
  id: string,
  updatedAt: string,
};

export type Subtitle = {
  __typename: "Subtitle",
  id: string,
  language: string,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  contentSubtitles?: ModelContentSubtitleConnection | null,
};

export type ModelUserFavoriteConnection = {
  __typename: "ModelUserFavoriteConnection",
  items:  Array<UserFavorite | null >,
  nextToken?: string | null,
};

export type UserFavorite = {
  __typename: "UserFavorite",
  id: string,
  userId: string,
  contentId: string,
  createdAt?: string | null,
  user?: User | null,
  content?: Content | null,
  updatedAt: string,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  cognitoId: string,
  email: string,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  profilePicture?: string | null,
  dateOfBirth?: string | null,
  gender?: UserGender | null,
  country?: string | null,
  languagePreference?: string | null,
  maturityPreference?: string | null,
  status?: UserStatus | null,
  lastLogin?: string | null,
  accountStatus?: UserAccountStatus | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userFavorites?: ModelUserFavoriteConnection | null,
  invoices?: ModelInvoiceConnection | null,
  logs?: ModelLogConnection | null,
  notifications?: ModelNotificationConnection | null,
  payments?: ModelPaymentConnection | null,
  userReviews?: ModelUserReviewConnection | null,
  userSubscriptions?: ModelUserSubscriptionConnection | null,
  userWatchHistories?: ModelUserWatchHistoryConnection | null,
  owner?: string | null,
};

export enum UserGender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
  PreferNotToSay = "PreferNotToSay",
}


export enum UserStatus {
  Active = "Active",
  Inactive = "Inactive",
  Cancelled = "Cancelled",
  Expired = "Expired",
}


export enum UserAccountStatus {
  Active = "Active",
  Suspended = "Suspended",
  Deleted = "Deleted",
}


export type ModelInvoiceConnection = {
  __typename: "ModelInvoiceConnection",
  items:  Array<Invoice | null >,
  nextToken?: string | null,
};

export type Invoice = {
  __typename: "Invoice",
  id: string,
  userId: string,
  userSubscriptionId?: string | null,
  paymentId?: string | null,
  invoiceNumber: string,
  amount: number,
  currency?: string | null,
  taxAmount?: number | null,
  discountAmount?: number | null,
  totalAmount: number,
  billingPeriod?: string | null,
  invoiceDate: string,
  dueDate: string,
  status?: InvoiceStatus | null,
  pdfUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  userSubscription?: UserSubscription | null,
  payment?: Payment | null,
  owner?: string | null,
};

export enum InvoiceStatus {
  Draft = "Draft",
  Sent = "Sent",
  Paid = "Paid",
  Overdue = "Overdue",
  Cancelled = "Cancelled",
}


export type UserSubscription = {
  __typename: "UserSubscription",
  id: string,
  userId: string,
  planId: string,
  startDate: string,
  endDate: string,
  status?: UserSubscriptionStatus | null,
  autoRenew?: boolean | null,
  paymentMethod?: string | null,
  lastPaymentDate?: string | null,
  nextBillingDate?: string | null,
  cancellationDate?: string | null,
  cancellationReason?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  plan?: SubscriptionPlan | null,
  invoices?: ModelInvoiceConnection | null,
  payments?: ModelPaymentConnection | null,
  owner?: string | null,
};

export enum UserSubscriptionStatus {
  Active = "Active",
  Inactive = "Inactive",
  Cancelled = "Cancelled",
  Expired = "Expired",
  Pending = "Pending",
}


export type SubscriptionPlan = {
  __typename: "SubscriptionPlan",
  id: string,
  name: string,
  description?: string | null,
  price: number,
  currency?: string | null,
  billingCycle?: SubscriptionPlanBillingCycle | null,
  durationDays: number,
  maxScreens?: number | null,
  videoQuality?: SubscriptionPlanVideoQuality | null,
  isActive?: boolean | null,
  features?: string | null,
  sortOrder?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userSubscriptions?: ModelUserSubscriptionConnection | null,
};

export enum SubscriptionPlanBillingCycle {
  Monthly = "Monthly",
  Quarterly = "Quarterly",
  Yearly = "Yearly",
  Lifetime = "Lifetime",
}


export enum SubscriptionPlanVideoQuality {
  SD = "SD",
  HD = "HD",
  FHD = "FHD",
  UHD = "UHD",
}


export type ModelUserSubscriptionConnection = {
  __typename: "ModelUserSubscriptionConnection",
  items:  Array<UserSubscription | null >,
  nextToken?: string | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type Payment = {
  __typename: "Payment",
  id: string,
  userId: string,
  userSubscriptionId?: string | null,
  amount: number,
  currency?: string | null,
  paymentMethod: string,
  paymentGateway: string,
  transactionId: string,
  status?: PaymentStatus | null,
  paymentDate: string,
  description?: string | null,
  metadata?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  userSubscription?: UserSubscription | null,
  invoices?: ModelInvoiceConnection | null,
  owner?: string | null,
};

export enum PaymentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Failed = "Failed",
  Refunded = "Refunded",
}


export type ModelLogConnection = {
  __typename: "ModelLogConnection",
  items:  Array<Log | null >,
  nextToken?: string | null,
};

export type Log = {
  __typename: "Log",
  id: string,
  userId?: string | null,
  action: string,
  entityType?: string | null,
  entityId?: string | null,
  ipAddress?: string | null,
  userAgent?: string | null,
  metadata?: string | null,
  createdAt?: string | null,
  user?: User | null,
  updatedAt: string,
  owner?: string | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  userId: string,
  title: string,
  message: string,
  type?: NotificationType | null,
  isRead?: boolean | null,
  relatedId?: string | null,
  relatedType?: string | null,
  createdAt?: string | null,
  readAt?: string | null,
  user?: User | null,
  updatedAt: string,
  owner?: string | null,
};

export enum NotificationType {
  System = "System",
  Payment = "Payment",
  Content = "Content",
  Promotional = "Promotional",
}


export type ModelUserReviewConnection = {
  __typename: "ModelUserReviewConnection",
  items:  Array<UserReview | null >,
  nextToken?: string | null,
};

export type UserReview = {
  __typename: "UserReview",
  id: string,
  userId: string,
  contentId: string,
  rating: number,
  reviewText?: string | null,
  isApproved?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  content?: Content | null,
  owner?: string | null,
};

export type ModelUserWatchHistoryConnection = {
  __typename: "ModelUserWatchHistoryConnection",
  items:  Array<UserWatchHistory | null >,
  nextToken?: string | null,
};

export type UserWatchHistory = {
  __typename: "UserWatchHistory",
  id: string,
  userId: string,
  contentId: string,
  progress: number,
  duration: number,
  lastWatchedAt: string,
  deviceInfo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User | null,
  content?: Content | null,
  owner?: string | null,
};

export type UpdateAudioTrackInput = {
  id: string,
  language?: string | null,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteAudioTrackInput = {
  id: string,
};

export type CreateContentAudioTrackInput = {
  contentId: string,
  audioId: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelContentAudioTrackConditionInput = {
  contentId?: ModelIDInput | null,
  audioId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelContentAudioTrackConditionInput | null > | null,
  or?: Array< ModelContentAudioTrackConditionInput | null > | null,
  not?: ModelContentAudioTrackConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateContentAudioTrackInput = {
  contentId?: string | null,
  audioId?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteContentAudioTrackInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateContentCategoryInput = {
  contentId: string,
  categoryId: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelContentCategoryConditionInput = {
  contentId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelContentCategoryConditionInput | null > | null,
  or?: Array< ModelContentCategoryConditionInput | null > | null,
  not?: ModelContentCategoryConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateContentCategoryInput = {
  contentId?: string | null,
  categoryId?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteContentCategoryInput = {
  id: string,
};

export type CreateGenreInput = {
  id?: string | null,
  name: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelGenreConditionInput = {
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGenreConditionInput | null > | null,
  or?: Array< ModelGenreConditionInput | null > | null,
  not?: ModelGenreConditionInput | null,
};

export type UpdateGenreInput = {
  id: string,
  name?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteGenreInput = {
  id: string,
};

export type CreateContentGenreInput = {
  contentId: string,
  genreId: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelContentGenreConditionInput = {
  contentId?: ModelIDInput | null,
  genreId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelContentGenreConditionInput | null > | null,
  or?: Array< ModelContentGenreConditionInput | null > | null,
  not?: ModelContentGenreConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateContentGenreInput = {
  contentId?: string | null,
  genreId?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteContentGenreInput = {
  id: string,
};

export type CreateCountryInput = {
  id?: string | null,
  name: string,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelCountryConditionInput = {
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCountryConditionInput | null > | null,
  or?: Array< ModelCountryConditionInput | null > | null,
  not?: ModelCountryConditionInput | null,
};

export type UpdateCountryInput = {
  id: string,
  name?: string | null,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCountryInput = {
  id: string,
};

export type CreateContentCountryInput = {
  contentId: string,
  countryId: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelContentCountryConditionInput = {
  contentId?: ModelIDInput | null,
  countryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelContentCountryConditionInput | null > | null,
  or?: Array< ModelContentCountryConditionInput | null > | null,
  not?: ModelContentCountryConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateContentCountryInput = {
  contentId?: string | null,
  countryId?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteContentCountryInput = {
  id: string,
};

export type CreateSubtitleInput = {
  id?: string | null,
  language: string,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSubtitleConditionInput = {
  language?: ModelStringInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubtitleConditionInput | null > | null,
  or?: Array< ModelSubtitleConditionInput | null > | null,
  not?: ModelSubtitleConditionInput | null,
};

export type UpdateSubtitleInput = {
  id: string,
  language?: string | null,
  code?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSubtitleInput = {
  id: string,
};

export type CreateContentSubtitleInput = {
  contentId: string,
  subtitleId: string,
  createdAt?: string | null,
  id?: string | null,
};

export type ModelContentSubtitleConditionInput = {
  contentId?: ModelIDInput | null,
  subtitleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelContentSubtitleConditionInput | null > | null,
  or?: Array< ModelContentSubtitleConditionInput | null > | null,
  not?: ModelContentSubtitleConditionInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateContentSubtitleInput = {
  contentId?: string | null,
  subtitleId?: string | null,
  createdAt?: string | null,
  id: string,
};

export type DeleteContentSubtitleInput = {
  id: string,
};

export type CreateSubscriptionPlanInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  price: number,
  currency?: string | null,
  billingCycle?: SubscriptionPlanBillingCycle | null,
  durationDays: number,
  maxScreens?: number | null,
  videoQuality?: SubscriptionPlanVideoQuality | null,
  isActive?: boolean | null,
  features?: string | null,
  sortOrder?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionPlanConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  billingCycle?: ModelSubscriptionPlanBillingCycleInput | null,
  durationDays?: ModelIntInput | null,
  maxScreens?: ModelIntInput | null,
  videoQuality?: ModelSubscriptionPlanVideoQualityInput | null,
  isActive?: ModelBooleanInput | null,
  features?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubscriptionPlanConditionInput | null > | null,
  or?: Array< ModelSubscriptionPlanConditionInput | null > | null,
  not?: ModelSubscriptionPlanConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSubscriptionPlanBillingCycleInput = {
  eq?: SubscriptionPlanBillingCycle | null,
  ne?: SubscriptionPlanBillingCycle | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSubscriptionPlanVideoQualityInput = {
  eq?: SubscriptionPlanVideoQuality | null,
  ne?: SubscriptionPlanVideoQuality | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSubscriptionPlanInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  currency?: string | null,
  billingCycle?: SubscriptionPlanBillingCycle | null,
  durationDays?: number | null,
  maxScreens?: number | null,
  videoQuality?: SubscriptionPlanVideoQuality | null,
  isActive?: boolean | null,
  features?: string | null,
  sortOrder?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSubscriptionPlanInput = {
  id: string,
};

export type CreateContentInput = {
  id?: string | null,
  partnerId?: string | null,
  title: string,
  localTitle: string,
  description?: string | null,
  releaseDate?: string | null,
  duration?: number | null,
  type?: ContentType | null,
  imagesDetails?: string | null,
  videoOriginal?: string | null,
  videoConverted: string,
  videoId: string,
  analyticsId?: number | null,
  maturityRating: string,
  audienceRating?: number | null,
  audienceLike?: number | null,
  audienceDislike?: number | null,
  isFeatured?: boolean | null,
  status?: ContentStatus | null,
  sortOrder: number,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelContentConditionInput = {
  partnerId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  localTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  releaseDate?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  type?: ModelContentTypeInput | null,
  imagesDetails?: ModelStringInput | null,
  videoOriginal?: ModelStringInput | null,
  videoConverted?: ModelStringInput | null,
  videoId?: ModelIDInput | null,
  analyticsId?: ModelIntInput | null,
  maturityRating?: ModelStringInput | null,
  audienceRating?: ModelFloatInput | null,
  audienceLike?: ModelIntInput | null,
  audienceDislike?: ModelIntInput | null,
  isFeatured?: ModelBooleanInput | null,
  status?: ModelContentStatusInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentConditionInput | null > | null,
  or?: Array< ModelContentConditionInput | null > | null,
  not?: ModelContentConditionInput | null,
};

export type ModelContentTypeInput = {
  eq?: ContentType | null,
  ne?: ContentType | null,
};

export type ModelContentStatusInput = {
  eq?: ContentStatus | null,
  ne?: ContentStatus | null,
};

export type UpdateContentInput = {
  id: string,
  partnerId?: string | null,
  title?: string | null,
  localTitle?: string | null,
  description?: string | null,
  releaseDate?: string | null,
  duration?: number | null,
  type?: ContentType | null,
  imagesDetails?: string | null,
  videoOriginal?: string | null,
  videoConverted?: string | null,
  videoId?: string | null,
  analyticsId?: number | null,
  maturityRating?: string | null,
  audienceRating?: number | null,
  audienceLike?: number | null,
  audienceDislike?: number | null,
  isFeatured?: boolean | null,
  status?: ContentStatus | null,
  sortOrder?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteContentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  cognitoId: string,
  email: string,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  profilePicture?: string | null,
  dateOfBirth?: string | null,
  gender?: UserGender | null,
  country?: string | null,
  languagePreference?: string | null,
  maturityPreference?: string | null,
  status?: UserStatus | null,
  lastLogin?: string | null,
  accountStatus?: UserAccountStatus | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  cognitoId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelUserGenderInput | null,
  country?: ModelStringInput | null,
  languagePreference?: ModelStringInput | null,
  maturityPreference?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  lastLogin?: ModelStringInput | null,
  accountStatus?: ModelUserAccountStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserGenderInput = {
  eq?: UserGender | null,
  ne?: UserGender | null,
};

export type ModelUserStatusInput = {
  eq?: UserStatus | null,
  ne?: UserStatus | null,
};

export type ModelUserAccountStatusInput = {
  eq?: UserAccountStatus | null,
  ne?: UserAccountStatus | null,
};

export type UpdateUserInput = {
  id: string,
  cognitoId?: string | null,
  email?: string | null,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  profilePicture?: string | null,
  dateOfBirth?: string | null,
  gender?: UserGender | null,
  country?: string | null,
  languagePreference?: string | null,
  maturityPreference?: string | null,
  status?: UserStatus | null,
  lastLogin?: string | null,
  accountStatus?: UserAccountStatus | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserSubscriptionInput = {
  id?: string | null,
  userId: string,
  planId: string,
  startDate: string,
  endDate: string,
  status?: UserSubscriptionStatus | null,
  autoRenew?: boolean | null,
  paymentMethod?: string | null,
  lastPaymentDate?: string | null,
  nextBillingDate?: string | null,
  cancellationDate?: string | null,
  cancellationReason?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserSubscriptionConditionInput = {
  userId?: ModelIDInput | null,
  planId?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  status?: ModelUserSubscriptionStatusInput | null,
  autoRenew?: ModelBooleanInput | null,
  paymentMethod?: ModelStringInput | null,
  lastPaymentDate?: ModelStringInput | null,
  nextBillingDate?: ModelStringInput | null,
  cancellationDate?: ModelStringInput | null,
  cancellationReason?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserSubscriptionConditionInput | null > | null,
  or?: Array< ModelUserSubscriptionConditionInput | null > | null,
  not?: ModelUserSubscriptionConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserSubscriptionStatusInput = {
  eq?: UserSubscriptionStatus | null,
  ne?: UserSubscriptionStatus | null,
};

export type UpdateUserSubscriptionInput = {
  id: string,
  userId?: string | null,
  planId?: string | null,
  startDate?: string | null,
  endDate?: string | null,
  status?: UserSubscriptionStatus | null,
  autoRenew?: boolean | null,
  paymentMethod?: string | null,
  lastPaymentDate?: string | null,
  nextBillingDate?: string | null,
  cancellationDate?: string | null,
  cancellationReason?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserSubscriptionInput = {
  id: string,
};

export type CreatePaymentInput = {
  id?: string | null,
  userId: string,
  userSubscriptionId?: string | null,
  amount: number,
  currency?: string | null,
  paymentMethod: string,
  paymentGateway: string,
  transactionId: string,
  status?: PaymentStatus | null,
  paymentDate: string,
  description?: string | null,
  metadata?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPaymentConditionInput = {
  userId?: ModelIDInput | null,
  userSubscriptionId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  paymentGateway?: ModelStringInput | null,
  transactionId?: ModelStringInput | null,
  status?: ModelPaymentStatusInput | null,
  paymentDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPaymentStatusInput = {
  eq?: PaymentStatus | null,
  ne?: PaymentStatus | null,
};

export type UpdatePaymentInput = {
  id: string,
  userId?: string | null,
  userSubscriptionId?: string | null,
  amount?: number | null,
  currency?: string | null,
  paymentMethod?: string | null,
  paymentGateway?: string | null,
  transactionId?: string | null,
  status?: PaymentStatus | null,
  paymentDate?: string | null,
  description?: string | null,
  metadata?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePaymentInput = {
  id: string,
};

export type CreateInvoiceInput = {
  id?: string | null,
  userId: string,
  userSubscriptionId?: string | null,
  paymentId?: string | null,
  invoiceNumber: string,
  amount: number,
  currency?: string | null,
  taxAmount?: number | null,
  discountAmount?: number | null,
  totalAmount: number,
  billingPeriod?: string | null,
  invoiceDate: string,
  dueDate: string,
  status?: InvoiceStatus | null,
  pdfUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelInvoiceConditionInput = {
  userId?: ModelIDInput | null,
  userSubscriptionId?: ModelIDInput | null,
  paymentId?: ModelIDInput | null,
  invoiceNumber?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  taxAmount?: ModelFloatInput | null,
  discountAmount?: ModelFloatInput | null,
  totalAmount?: ModelFloatInput | null,
  billingPeriod?: ModelStringInput | null,
  invoiceDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  status?: ModelInvoiceStatusInput | null,
  pdfUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInvoiceConditionInput | null > | null,
  or?: Array< ModelInvoiceConditionInput | null > | null,
  not?: ModelInvoiceConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelInvoiceStatusInput = {
  eq?: InvoiceStatus | null,
  ne?: InvoiceStatus | null,
};

export type UpdateInvoiceInput = {
  id: string,
  userId?: string | null,
  userSubscriptionId?: string | null,
  paymentId?: string | null,
  invoiceNumber?: string | null,
  amount?: number | null,
  currency?: string | null,
  taxAmount?: number | null,
  discountAmount?: number | null,
  totalAmount?: number | null,
  billingPeriod?: string | null,
  invoiceDate?: string | null,
  dueDate?: string | null,
  status?: InvoiceStatus | null,
  pdfUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteInvoiceInput = {
  id: string,
};

export type CreateUserFavoriteInput = {
  id?: string | null,
  userId: string,
  contentId: string,
  createdAt?: string | null,
};

export type ModelUserFavoriteConditionInput = {
  userId?: ModelIDInput | null,
  contentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelUserFavoriteConditionInput | null > | null,
  or?: Array< ModelUserFavoriteConditionInput | null > | null,
  not?: ModelUserFavoriteConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateUserFavoriteInput = {
  id: string,
  userId?: string | null,
  contentId?: string | null,
  createdAt?: string | null,
};

export type DeleteUserFavoriteInput = {
  id: string,
};

export type CreateUserReviewInput = {
  id?: string | null,
  userId: string,
  contentId: string,
  rating: number,
  reviewText?: string | null,
  isApproved?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserReviewConditionInput = {
  userId?: ModelIDInput | null,
  contentId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  reviewText?: ModelStringInput | null,
  isApproved?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserReviewConditionInput | null > | null,
  or?: Array< ModelUserReviewConditionInput | null > | null,
  not?: ModelUserReviewConditionInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateUserReviewInput = {
  id: string,
  userId?: string | null,
  contentId?: string | null,
  rating?: number | null,
  reviewText?: string | null,
  isApproved?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserReviewInput = {
  id: string,
};

export type CreateUserWatchHistoryInput = {
  id?: string | null,
  userId: string,
  contentId: string,
  progress: number,
  duration: number,
  lastWatchedAt: string,
  deviceInfo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserWatchHistoryConditionInput = {
  userId?: ModelIDInput | null,
  contentId?: ModelIDInput | null,
  progress?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  lastWatchedAt?: ModelStringInput | null,
  deviceInfo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserWatchHistoryConditionInput | null > | null,
  or?: Array< ModelUserWatchHistoryConditionInput | null > | null,
  not?: ModelUserWatchHistoryConditionInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateUserWatchHistoryInput = {
  id: string,
  userId?: string | null,
  contentId?: string | null,
  progress?: number | null,
  duration?: number | null,
  lastWatchedAt?: string | null,
  deviceInfo?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserWatchHistoryInput = {
  id: string,
};

export type CreateLogInput = {
  id?: string | null,
  userId?: string | null,
  action: string,
  entityType?: string | null,
  entityId?: string | null,
  ipAddress?: string | null,
  userAgent?: string | null,
  metadata?: string | null,
  createdAt?: string | null,
};

export type ModelLogConditionInput = {
  userId?: ModelIDInput | null,
  action?: ModelStringInput | null,
  entityType?: ModelStringInput | null,
  entityId?: ModelStringInput | null,
  ipAddress?: ModelStringInput | null,
  userAgent?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelLogConditionInput | null > | null,
  or?: Array< ModelLogConditionInput | null > | null,
  not?: ModelLogConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateLogInput = {
  id: string,
  userId?: string | null,
  action?: string | null,
  entityType?: string | null,
  entityId?: string | null,
  ipAddress?: string | null,
  userAgent?: string | null,
  metadata?: string | null,
  createdAt?: string | null,
};

export type DeleteLogInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  userId: string,
  title: string,
  message: string,
  type?: NotificationType | null,
  isRead?: boolean | null,
  relatedId?: string | null,
  relatedType?: string | null,
  createdAt?: string | null,
  readAt?: string | null,
};

export type ModelNotificationConditionInput = {
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  type?: ModelNotificationTypeInput | null,
  isRead?: ModelBooleanInput | null,
  relatedId?: ModelStringInput | null,
  relatedType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  readAt?: ModelStringInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelNotificationTypeInput = {
  eq?: NotificationType | null,
  ne?: NotificationType | null,
};

export type UpdateNotificationInput = {
  id: string,
  userId?: string | null,
  title?: string | null,
  message?: string | null,
  type?: NotificationType | null,
  isRead?: boolean | null,
  relatedId?: string | null,
  relatedType?: string | null,
  createdAt?: string | null,
  readAt?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type ModelAudioTrackFilterInput = {
  id?: ModelIDInput | null,
  language?: ModelStringInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAudioTrackFilterInput | null > | null,
  or?: Array< ModelAudioTrackFilterInput | null > | null,
  not?: ModelAudioTrackFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAudioTrackConnection = {
  __typename: "ModelAudioTrackConnection",
  items:  Array<AudioTrack | null >,
  nextToken?: string | null,
};

export type ModelContentAudioTrackFilterInput = {
  contentId?: ModelIDInput | null,
  audioId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentAudioTrackFilterInput | null > | null,
  or?: Array< ModelContentAudioTrackFilterInput | null > | null,
  not?: ModelContentAudioTrackFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelContentCategoryFilterInput = {
  contentId?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentCategoryFilterInput | null > | null,
  or?: Array< ModelContentCategoryFilterInput | null > | null,
  not?: ModelContentCategoryFilterInput | null,
};

export type ModelGenreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGenreFilterInput | null > | null,
  or?: Array< ModelGenreFilterInput | null > | null,
  not?: ModelGenreFilterInput | null,
};

export type ModelGenreConnection = {
  __typename: "ModelGenreConnection",
  items:  Array<Genre | null >,
  nextToken?: string | null,
};

export type ModelContentGenreFilterInput = {
  contentId?: ModelIDInput | null,
  genreId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentGenreFilterInput | null > | null,
  or?: Array< ModelContentGenreFilterInput | null > | null,
  not?: ModelContentGenreFilterInput | null,
};

export type ModelCountryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCountryFilterInput | null > | null,
  or?: Array< ModelCountryFilterInput | null > | null,
  not?: ModelCountryFilterInput | null,
};

export type ModelCountryConnection = {
  __typename: "ModelCountryConnection",
  items:  Array<Country | null >,
  nextToken?: string | null,
};

export type ModelContentCountryFilterInput = {
  contentId?: ModelIDInput | null,
  countryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentCountryFilterInput | null > | null,
  or?: Array< ModelContentCountryFilterInput | null > | null,
  not?: ModelContentCountryFilterInput | null,
};

export type ModelSubtitleFilterInput = {
  id?: ModelIDInput | null,
  language?: ModelStringInput | null,
  code?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubtitleFilterInput | null > | null,
  or?: Array< ModelSubtitleFilterInput | null > | null,
  not?: ModelSubtitleFilterInput | null,
};

export type ModelSubtitleConnection = {
  __typename: "ModelSubtitleConnection",
  items:  Array<Subtitle | null >,
  nextToken?: string | null,
};

export type ModelContentSubtitleFilterInput = {
  contentId?: ModelIDInput | null,
  subtitleId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentSubtitleFilterInput | null > | null,
  or?: Array< ModelContentSubtitleFilterInput | null > | null,
  not?: ModelContentSubtitleFilterInput | null,
};

export type ModelSubscriptionPlanFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  billingCycle?: ModelSubscriptionPlanBillingCycleInput | null,
  durationDays?: ModelIntInput | null,
  maxScreens?: ModelIntInput | null,
  videoQuality?: ModelSubscriptionPlanVideoQualityInput | null,
  isActive?: ModelBooleanInput | null,
  features?: ModelStringInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlanFilterInput | null > | null,
  not?: ModelSubscriptionPlanFilterInput | null,
};

export type ModelSubscriptionPlanConnection = {
  __typename: "ModelSubscriptionPlanConnection",
  items:  Array<SubscriptionPlan | null >,
  nextToken?: string | null,
};

export type ModelContentFilterInput = {
  id?: ModelIDInput | null,
  partnerId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  localTitle?: ModelStringInput | null,
  description?: ModelStringInput | null,
  releaseDate?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  type?: ModelContentTypeInput | null,
  imagesDetails?: ModelStringInput | null,
  videoOriginal?: ModelStringInput | null,
  videoConverted?: ModelStringInput | null,
  videoId?: ModelIDInput | null,
  analyticsId?: ModelIntInput | null,
  maturityRating?: ModelStringInput | null,
  audienceRating?: ModelFloatInput | null,
  audienceLike?: ModelIntInput | null,
  audienceDislike?: ModelIntInput | null,
  isFeatured?: ModelBooleanInput | null,
  status?: ModelContentStatusInput | null,
  sortOrder?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContentFilterInput | null > | null,
  or?: Array< ModelContentFilterInput | null > | null,
  not?: ModelContentFilterInput | null,
};

export type ModelContentConnection = {
  __typename: "ModelContentConnection",
  items:  Array<Content | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  cognitoId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelUserGenderInput | null,
  country?: ModelStringInput | null,
  languagePreference?: ModelStringInput | null,
  maturityPreference?: ModelStringInput | null,
  status?: ModelUserStatusInput | null,
  lastLogin?: ModelStringInput | null,
  accountStatus?: ModelUserAccountStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserSubscriptionFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  planId?: ModelIDInput | null,
  startDate?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  status?: ModelUserSubscriptionStatusInput | null,
  autoRenew?: ModelBooleanInput | null,
  paymentMethod?: ModelStringInput | null,
  lastPaymentDate?: ModelStringInput | null,
  nextBillingDate?: ModelStringInput | null,
  cancellationDate?: ModelStringInput | null,
  cancellationReason?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserSubscriptionFilterInput | null > | null,
  or?: Array< ModelUserSubscriptionFilterInput | null > | null,
  not?: ModelUserSubscriptionFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  userSubscriptionId?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  paymentMethod?: ModelStringInput | null,
  paymentGateway?: ModelStringInput | null,
  transactionId?: ModelStringInput | null,
  status?: ModelPaymentStatusInput | null,
  paymentDate?: ModelStringInput | null,
  description?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  userSubscriptionId?: ModelIDInput | null,
  paymentId?: ModelIDInput | null,
  invoiceNumber?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  currency?: ModelStringInput | null,
  taxAmount?: ModelFloatInput | null,
  discountAmount?: ModelFloatInput | null,
  totalAmount?: ModelFloatInput | null,
  billingPeriod?: ModelStringInput | null,
  invoiceDate?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  status?: ModelInvoiceStatusInput | null,
  pdfUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelInvoiceFilterInput | null > | null,
  or?: Array< ModelInvoiceFilterInput | null > | null,
  not?: ModelInvoiceFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserFavoriteFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  contentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFavoriteFilterInput | null > | null,
  or?: Array< ModelUserFavoriteFilterInput | null > | null,
  not?: ModelUserFavoriteFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserReviewFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  contentId?: ModelIDInput | null,
  rating?: ModelIntInput | null,
  reviewText?: ModelStringInput | null,
  isApproved?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserReviewFilterInput | null > | null,
  or?: Array< ModelUserReviewFilterInput | null > | null,
  not?: ModelUserReviewFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserWatchHistoryFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  contentId?: ModelIDInput | null,
  progress?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  lastWatchedAt?: ModelStringInput | null,
  deviceInfo?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserWatchHistoryFilterInput | null > | null,
  or?: Array< ModelUserWatchHistoryFilterInput | null > | null,
  not?: ModelUserWatchHistoryFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelLogFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  action?: ModelStringInput | null,
  entityType?: ModelStringInput | null,
  entityId?: ModelStringInput | null,
  ipAddress?: ModelStringInput | null,
  userAgent?: ModelStringInput | null,
  metadata?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelLogFilterInput | null > | null,
  or?: Array< ModelLogFilterInput | null > | null,
  not?: ModelLogFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  title?: ModelStringInput | null,
  message?: ModelStringInput | null,
  type?: ModelNotificationTypeInput | null,
  isRead?: ModelBooleanInput | null,
  relatedId?: ModelStringInput | null,
  relatedType?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  readAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionAudioTrackFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  language?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAudioTrackFilterInput | null > | null,
  or?: Array< ModelSubscriptionAudioTrackFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionContentAudioTrackFilterInput = {
  contentId?: ModelSubscriptionIDInput | null,
  audioId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentAudioTrackFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentAudioTrackFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionContentCategoryFilterInput = {
  contentId?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentCategoryFilterInput | null > | null,
};

export type ModelSubscriptionGenreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGenreFilterInput | null > | null,
  or?: Array< ModelSubscriptionGenreFilterInput | null > | null,
};

export type ModelSubscriptionContentGenreFilterInput = {
  contentId?: ModelSubscriptionIDInput | null,
  genreId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentGenreFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentGenreFilterInput | null > | null,
};

export type ModelSubscriptionCountryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCountryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCountryFilterInput | null > | null,
};

export type ModelSubscriptionContentCountryFilterInput = {
  contentId?: ModelSubscriptionIDInput | null,
  countryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentCountryFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentCountryFilterInput | null > | null,
};

export type ModelSubscriptionSubtitleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  language?: ModelSubscriptionStringInput | null,
  code?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubtitleFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubtitleFilterInput | null > | null,
};

export type ModelSubscriptionContentSubtitleFilterInput = {
  contentId?: ModelSubscriptionIDInput | null,
  subtitleId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentSubtitleFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentSubtitleFilterInput | null > | null,
};

export type ModelSubscriptionSubscriptionPlanFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  billingCycle?: ModelSubscriptionStringInput | null,
  durationDays?: ModelSubscriptionIntInput | null,
  maxScreens?: ModelSubscriptionIntInput | null,
  videoQuality?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  features?: ModelSubscriptionStringInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSubscriptionPlanFilterInput | null > | null,
  or?: Array< ModelSubscriptionSubscriptionPlanFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  partnerId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  localTitle?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  releaseDate?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  type?: ModelSubscriptionStringInput | null,
  imagesDetails?: ModelSubscriptionStringInput | null,
  videoOriginal?: ModelSubscriptionStringInput | null,
  videoConverted?: ModelSubscriptionStringInput | null,
  videoId?: ModelSubscriptionIDInput | null,
  analyticsId?: ModelSubscriptionIntInput | null,
  maturityRating?: ModelSubscriptionStringInput | null,
  audienceRating?: ModelSubscriptionFloatInput | null,
  audienceLike?: ModelSubscriptionIntInput | null,
  audienceDislike?: ModelSubscriptionIntInput | null,
  isFeatured?: ModelSubscriptionBooleanInput | null,
  status?: ModelSubscriptionStringInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoId?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  dateOfBirth?: ModelSubscriptionStringInput | null,
  gender?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  languagePreference?: ModelSubscriptionStringInput | null,
  maturityPreference?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  lastLogin?: ModelSubscriptionStringInput | null,
  accountStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserSubscriptionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  planId?: ModelSubscriptionIDInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  autoRenew?: ModelSubscriptionBooleanInput | null,
  paymentMethod?: ModelSubscriptionStringInput | null,
  lastPaymentDate?: ModelSubscriptionStringInput | null,
  nextBillingDate?: ModelSubscriptionStringInput | null,
  cancellationDate?: ModelSubscriptionStringInput | null,
  cancellationReason?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserSubscriptionFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserSubscriptionFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  userSubscriptionId?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  paymentMethod?: ModelSubscriptionStringInput | null,
  paymentGateway?: ModelSubscriptionStringInput | null,
  transactionId?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  paymentDate?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionInvoiceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  userSubscriptionId?: ModelSubscriptionIDInput | null,
  paymentId?: ModelSubscriptionIDInput | null,
  invoiceNumber?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  currency?: ModelSubscriptionStringInput | null,
  taxAmount?: ModelSubscriptionFloatInput | null,
  discountAmount?: ModelSubscriptionFloatInput | null,
  totalAmount?: ModelSubscriptionFloatInput | null,
  billingPeriod?: ModelSubscriptionStringInput | null,
  invoiceDate?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  pdfUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
  or?: Array< ModelSubscriptionInvoiceFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserFavoriteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  contentId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFavoriteFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFavoriteFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  contentId?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionIntInput | null,
  reviewText?: ModelSubscriptionStringInput | null,
  isApproved?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserReviewFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionUserWatchHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  contentId?: ModelSubscriptionIDInput | null,
  progress?: ModelSubscriptionIntInput | null,
  duration?: ModelSubscriptionIntInput | null,
  lastWatchedAt?: ModelSubscriptionStringInput | null,
  deviceInfo?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserWatchHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserWatchHistoryFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  action?: ModelSubscriptionStringInput | null,
  entityType?: ModelSubscriptionStringInput | null,
  entityId?: ModelSubscriptionStringInput | null,
  ipAddress?: ModelSubscriptionStringInput | null,
  userAgent?: ModelSubscriptionStringInput | null,
  metadata?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionLogFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  message?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  relatedId?: ModelSubscriptionStringInput | null,
  relatedType?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  readAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateAudioTrackMutationVariables = {
  input: CreateAudioTrackInput,
  condition?: ModelAudioTrackConditionInput | null,
};

export type CreateAudioTrackMutation = {
  createAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateAudioTrackMutationVariables = {
  input: UpdateAudioTrackInput,
  condition?: ModelAudioTrackConditionInput | null,
};

export type UpdateAudioTrackMutation = {
  updateAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteAudioTrackMutationVariables = {
  input: DeleteAudioTrackInput,
  condition?: ModelAudioTrackConditionInput | null,
};

export type DeleteAudioTrackMutation = {
  deleteAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateContentAudioTrackMutationVariables = {
  input: CreateContentAudioTrackInput,
  condition?: ModelContentAudioTrackConditionInput | null,
};

export type CreateContentAudioTrackMutation = {
  createContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentAudioTrackMutationVariables = {
  input: UpdateContentAudioTrackInput,
  condition?: ModelContentAudioTrackConditionInput | null,
};

export type UpdateContentAudioTrackMutation = {
  updateContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentAudioTrackMutationVariables = {
  input: DeleteContentAudioTrackInput,
  condition?: ModelContentAudioTrackConditionInput | null,
};

export type DeleteContentAudioTrackMutation = {
  deleteContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateContentCategoryMutationVariables = {
  input: CreateContentCategoryInput,
  condition?: ModelContentCategoryConditionInput | null,
};

export type CreateContentCategoryMutation = {
  createContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentCategoryMutationVariables = {
  input: UpdateContentCategoryInput,
  condition?: ModelContentCategoryConditionInput | null,
};

export type UpdateContentCategoryMutation = {
  updateContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentCategoryMutationVariables = {
  input: DeleteContentCategoryInput,
  condition?: ModelContentCategoryConditionInput | null,
};

export type DeleteContentCategoryMutation = {
  deleteContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateGenreMutationVariables = {
  input: CreateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type CreateGenreMutation = {
  createGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateGenreMutationVariables = {
  input: UpdateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type UpdateGenreMutation = {
  updateGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteGenreMutationVariables = {
  input: DeleteGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type DeleteGenreMutation = {
  deleteGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateContentGenreMutationVariables = {
  input: CreateContentGenreInput,
  condition?: ModelContentGenreConditionInput | null,
};

export type CreateContentGenreMutation = {
  createContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentGenreMutationVariables = {
  input: UpdateContentGenreInput,
  condition?: ModelContentGenreConditionInput | null,
};

export type UpdateContentGenreMutation = {
  updateContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentGenreMutationVariables = {
  input: DeleteContentGenreInput,
  condition?: ModelContentGenreConditionInput | null,
};

export type DeleteContentGenreMutation = {
  deleteContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateCountryMutationVariables = {
  input: CreateCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type CreateCountryMutation = {
  createCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateCountryMutationVariables = {
  input: UpdateCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type UpdateCountryMutation = {
  updateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteCountryMutationVariables = {
  input: DeleteCountryInput,
  condition?: ModelCountryConditionInput | null,
};

export type DeleteCountryMutation = {
  deleteCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateContentCountryMutationVariables = {
  input: CreateContentCountryInput,
  condition?: ModelContentCountryConditionInput | null,
};

export type CreateContentCountryMutation = {
  createContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentCountryMutationVariables = {
  input: UpdateContentCountryInput,
  condition?: ModelContentCountryConditionInput | null,
};

export type UpdateContentCountryMutation = {
  updateContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentCountryMutationVariables = {
  input: DeleteContentCountryInput,
  condition?: ModelContentCountryConditionInput | null,
};

export type DeleteContentCountryMutation = {
  deleteContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateSubtitleMutationVariables = {
  input: CreateSubtitleInput,
  condition?: ModelSubtitleConditionInput | null,
};

export type CreateSubtitleMutation = {
  createSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateSubtitleMutationVariables = {
  input: UpdateSubtitleInput,
  condition?: ModelSubtitleConditionInput | null,
};

export type UpdateSubtitleMutation = {
  updateSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteSubtitleMutationVariables = {
  input: DeleteSubtitleInput,
  condition?: ModelSubtitleConditionInput | null,
};

export type DeleteSubtitleMutation = {
  deleteSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateContentSubtitleMutationVariables = {
  input: CreateContentSubtitleInput,
  condition?: ModelContentSubtitleConditionInput | null,
};

export type CreateContentSubtitleMutation = {
  createContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentSubtitleMutationVariables = {
  input: UpdateContentSubtitleInput,
  condition?: ModelContentSubtitleConditionInput | null,
};

export type UpdateContentSubtitleMutation = {
  updateContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentSubtitleMutationVariables = {
  input: DeleteContentSubtitleInput,
  condition?: ModelContentSubtitleConditionInput | null,
};

export type DeleteContentSubtitleMutation = {
  deleteContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type CreateSubscriptionPlanMutationVariables = {
  input: CreateSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type CreateSubscriptionPlanMutation = {
  createSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateSubscriptionPlanMutationVariables = {
  input: UpdateSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type UpdateSubscriptionPlanMutation = {
  updateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteSubscriptionPlanMutationVariables = {
  input: DeleteSubscriptionPlanInput,
  condition?: ModelSubscriptionPlanConditionInput | null,
};

export type DeleteSubscriptionPlanMutation = {
  deleteSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateContentMutationVariables = {
  input: CreateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type CreateContentMutation = {
  createContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateContentMutationVariables = {
  input: UpdateContentInput,
  condition?: ModelContentConditionInput | null,
};

export type UpdateContentMutation = {
  updateContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteContentMutationVariables = {
  input: DeleteContentInput,
  condition?: ModelContentConditionInput | null,
};

export type DeleteContentMutation = {
  deleteContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateUserSubscriptionMutationVariables = {
  input: CreateUserSubscriptionInput,
  condition?: ModelUserSubscriptionConditionInput | null,
};

export type CreateUserSubscriptionMutation = {
  createUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserSubscriptionMutationVariables = {
  input: UpdateUserSubscriptionInput,
  condition?: ModelUserSubscriptionConditionInput | null,
};

export type UpdateUserSubscriptionMutation = {
  updateUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserSubscriptionMutationVariables = {
  input: DeleteUserSubscriptionInput,
  condition?: ModelUserSubscriptionConditionInput | null,
};

export type DeleteUserSubscriptionMutation = {
  deleteUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateInvoiceMutationVariables = {
  input: CreateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type CreateInvoiceMutation = {
  createInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateInvoiceMutationVariables = {
  input: UpdateInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type UpdateInvoiceMutation = {
  updateInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteInvoiceMutationVariables = {
  input: DeleteInvoiceInput,
  condition?: ModelInvoiceConditionInput | null,
};

export type DeleteInvoiceMutation = {
  deleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateUserFavoriteMutationVariables = {
  input: CreateUserFavoriteInput,
  condition?: ModelUserFavoriteConditionInput | null,
};

export type CreateUserFavoriteMutation = {
  createUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserFavoriteMutationVariables = {
  input: UpdateUserFavoriteInput,
  condition?: ModelUserFavoriteConditionInput | null,
};

export type UpdateUserFavoriteMutation = {
  updateUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserFavoriteMutationVariables = {
  input: DeleteUserFavoriteInput,
  condition?: ModelUserFavoriteConditionInput | null,
};

export type DeleteUserFavoriteMutation = {
  deleteUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserReviewMutationVariables = {
  input: CreateUserReviewInput,
  condition?: ModelUserReviewConditionInput | null,
};

export type CreateUserReviewMutation = {
  createUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserReviewMutationVariables = {
  input: UpdateUserReviewInput,
  condition?: ModelUserReviewConditionInput | null,
};

export type UpdateUserReviewMutation = {
  updateUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserReviewMutationVariables = {
  input: DeleteUserReviewInput,
  condition?: ModelUserReviewConditionInput | null,
};

export type DeleteUserReviewMutation = {
  deleteUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateUserWatchHistoryMutationVariables = {
  input: CreateUserWatchHistoryInput,
  condition?: ModelUserWatchHistoryConditionInput | null,
};

export type CreateUserWatchHistoryMutation = {
  createUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateUserWatchHistoryMutationVariables = {
  input: UpdateUserWatchHistoryInput,
  condition?: ModelUserWatchHistoryConditionInput | null,
};

export type UpdateUserWatchHistoryMutation = {
  updateUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteUserWatchHistoryMutationVariables = {
  input: DeleteUserWatchHistoryInput,
  condition?: ModelUserWatchHistoryConditionInput | null,
};

export type DeleteUserWatchHistoryMutation = {
  deleteUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateLogMutationVariables = {
  input: CreateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type CreateLogMutation = {
  createLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLogMutationVariables = {
  input: UpdateLogInput,
  condition?: ModelLogConditionInput | null,
};

export type UpdateLogMutation = {
  updateLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLogMutationVariables = {
  input: DeleteLogInput,
  condition?: ModelLogConditionInput | null,
};

export type DeleteLogMutation = {
  deleteLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetAudioTrackQueryVariables = {
  id: string,
};

export type GetAudioTrackQuery = {
  getAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListAudioTracksQueryVariables = {
  id?: string | null,
  filter?: ModelAudioTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAudioTracksQuery = {
  listAudioTracks?:  {
    __typename: "ModelAudioTrackConnection",
    items:  Array< {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentAudioTrackQueryVariables = {
  id: string,
};

export type GetContentAudioTrackQuery = {
  getContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListContentAudioTracksQueryVariables = {
  filter?: ModelContentAudioTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentAudioTracksQuery = {
  listContentAudioTracks?:  {
    __typename: "ModelContentAudioTrackConnection",
    items:  Array< {
      __typename: "ContentAudioTrack",
      contentId: string,
      audioId: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  id?: string | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentCategoryQueryVariables = {
  id: string,
};

export type GetContentCategoryQuery = {
  getContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListContentCategoriesQueryVariables = {
  filter?: ModelContentCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentCategoriesQuery = {
  listContentCategories?:  {
    __typename: "ModelContentCategoryConnection",
    items:  Array< {
      __typename: "ContentCategory",
      contentId: string,
      categoryId: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGenreQueryVariables = {
  id: string,
};

export type GetGenreQuery = {
  getGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListGenresQueryVariables = {
  id?: string | null,
  filter?: ModelGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListGenresQuery = {
  listGenres?:  {
    __typename: "ModelGenreConnection",
    items:  Array< {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentGenreQueryVariables = {
  id: string,
};

export type GetContentGenreQuery = {
  getContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListContentGenresQueryVariables = {
  filter?: ModelContentGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentGenresQuery = {
  listContentGenres?:  {
    __typename: "ModelContentGenreConnection",
    items:  Array< {
      __typename: "ContentGenre",
      contentId: string,
      genreId: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCountryQueryVariables = {
  id: string,
};

export type GetCountryQuery = {
  getCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListCountriesQueryVariables = {
  id?: string | null,
  filter?: ModelCountryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCountriesQuery = {
  listCountries?:  {
    __typename: "ModelCountryConnection",
    items:  Array< {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentCountryQueryVariables = {
  id: string,
};

export type GetContentCountryQuery = {
  getContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListContentCountriesQueryVariables = {
  filter?: ModelContentCountryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentCountriesQuery = {
  listContentCountries?:  {
    __typename: "ModelContentCountryConnection",
    items:  Array< {
      __typename: "ContentCountry",
      contentId: string,
      countryId: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubtitleQueryVariables = {
  id: string,
};

export type GetSubtitleQuery = {
  getSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListSubtitlesQueryVariables = {
  id?: string | null,
  filter?: ModelSubtitleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSubtitlesQuery = {
  listSubtitles?:  {
    __typename: "ModelSubtitleConnection",
    items:  Array< {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentSubtitleQueryVariables = {
  id: string,
};

export type GetContentSubtitleQuery = {
  getContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type ListContentSubtitlesQueryVariables = {
  filter?: ModelContentSubtitleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentSubtitlesQuery = {
  listContentSubtitles?:  {
    __typename: "ModelContentSubtitleConnection",
    items:  Array< {
      __typename: "ContentSubtitle",
      contentId: string,
      subtitleId: string,
      createdAt?: string | null,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubscriptionPlanQueryVariables = {
  id: string,
};

export type GetSubscriptionPlanQuery = {
  getSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListSubscriptionPlansQueryVariables = {
  id?: string | null,
  filter?: ModelSubscriptionPlanFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSubscriptionPlansQuery = {
  listSubscriptionPlans?:  {
    __typename: "ModelSubscriptionPlanConnection",
    items:  Array< {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContentQueryVariables = {
  id: string,
};

export type GetContentQuery = {
  getContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListContentsQueryVariables = {
  id?: string | null,
  filter?: ModelContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentConnection",
    items:  Array< {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  id?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserSubscriptionQueryVariables = {
  id: string,
};

export type GetUserSubscriptionQuery = {
  getUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUserSubscriptionsQueryVariables = {
  id?: string | null,
  filter?: ModelUserSubscriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserSubscriptionsQuery = {
  listUserSubscriptions?:  {
    __typename: "ModelUserSubscriptionConnection",
    items:  Array< {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListPaymentsQueryVariables = {
  id?: string | null,
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetInvoiceQueryVariables = {
  id: string,
};

export type GetInvoiceQuery = {
  getInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListInvoicesQueryVariables = {
  id?: string | null,
  filter?: ModelInvoiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListInvoicesQuery = {
  listInvoices?:  {
    __typename: "ModelInvoiceConnection",
    items:  Array< {
      __typename: "Invoice",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      paymentId?: string | null,
      invoiceNumber: string,
      amount: number,
      currency?: string | null,
      taxAmount?: number | null,
      discountAmount?: number | null,
      totalAmount: number,
      billingPeriod?: string | null,
      invoiceDate: string,
      dueDate: string,
      status?: InvoiceStatus | null,
      pdfUrl?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserFavoriteQueryVariables = {
  id: string,
};

export type GetUserFavoriteQuery = {
  getUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserFavoritesQueryVariables = {
  id?: string | null,
  filter?: ModelUserFavoriteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserFavoritesQuery = {
  listUserFavorites?:  {
    __typename: "ModelUserFavoriteConnection",
    items:  Array< {
      __typename: "UserFavorite",
      id: string,
      userId: string,
      contentId: string,
      createdAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserReviewQueryVariables = {
  id: string,
};

export type GetUserReviewQuery = {
  getUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUserReviewsQueryVariables = {
  id?: string | null,
  filter?: ModelUserReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserReviewsQuery = {
  listUserReviews?:  {
    __typename: "ModelUserReviewConnection",
    items:  Array< {
      __typename: "UserReview",
      id: string,
      userId: string,
      contentId: string,
      rating: number,
      reviewText?: string | null,
      isApproved?: boolean | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserWatchHistoryQueryVariables = {
  id: string,
};

export type GetUserWatchHistoryQuery = {
  getUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListUserWatchHistoriesQueryVariables = {
  id?: string | null,
  filter?: ModelUserWatchHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUserWatchHistoriesQuery = {
  listUserWatchHistories?:  {
    __typename: "ModelUserWatchHistoryConnection",
    items:  Array< {
      __typename: "UserWatchHistory",
      id: string,
      userId: string,
      contentId: string,
      progress: number,
      duration: number,
      lastWatchedAt: string,
      deviceInfo?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLogQueryVariables = {
  id: string,
};

export type GetLogQuery = {
  getLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLogsQueryVariables = {
  id?: string | null,
  filter?: ModelLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListLogsQuery = {
  listLogs?:  {
    __typename: "ModelLogConnection",
    items:  Array< {
      __typename: "Log",
      id: string,
      userId?: string | null,
      action: string,
      entityType?: string | null,
      entityId?: string | null,
      ipAddress?: string | null,
      userAgent?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNotificationsQueryVariables = {
  id?: string | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userId: string,
      title: string,
      message: string,
      type?: NotificationType | null,
      isRead?: boolean | null,
      relatedId?: string | null,
      relatedType?: string | null,
      createdAt?: string | null,
      readAt?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAudioTrackSubscriptionVariables = {
  filter?: ModelSubscriptionAudioTrackFilterInput | null,
};

export type OnCreateAudioTrackSubscription = {
  onCreateAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateAudioTrackSubscriptionVariables = {
  filter?: ModelSubscriptionAudioTrackFilterInput | null,
};

export type OnUpdateAudioTrackSubscription = {
  onUpdateAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteAudioTrackSubscriptionVariables = {
  filter?: ModelSubscriptionAudioTrackFilterInput | null,
};

export type OnDeleteAudioTrackSubscription = {
  onDeleteAudioTrack?:  {
    __typename: "AudioTrack",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentAudioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateContentAudioTrackSubscriptionVariables = {
  filter?: ModelSubscriptionContentAudioTrackFilterInput | null,
};

export type OnCreateContentAudioTrackSubscription = {
  onCreateContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentAudioTrackSubscriptionVariables = {
  filter?: ModelSubscriptionContentAudioTrackFilterInput | null,
};

export type OnUpdateContentAudioTrackSubscription = {
  onUpdateContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentAudioTrackSubscriptionVariables = {
  filter?: ModelSubscriptionContentAudioTrackFilterInput | null,
};

export type OnDeleteContentAudioTrackSubscription = {
  onDeleteContentAudioTrack?:  {
    __typename: "ContentAudioTrack",
    contentId: string,
    audioId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    audioTrack?:  {
      __typename: "AudioTrack",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCategories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateContentCategorySubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryFilterInput | null,
};

export type OnCreateContentCategorySubscription = {
  onCreateContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentCategorySubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryFilterInput | null,
};

export type OnUpdateContentCategorySubscription = {
  onUpdateContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentCategorySubscriptionVariables = {
  filter?: ModelSubscriptionContentCategoryFilterInput | null,
};

export type OnDeleteContentCategorySubscription = {
  onDeleteContentCategory?:  {
    __typename: "ContentCategory",
    contentId: string,
    categoryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    category?:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGenreSubscriptionVariables = {
  filter?: ModelSubscriptionGenreFilterInput | null,
};

export type OnCreateGenreSubscription = {
  onCreateGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateGenreSubscriptionVariables = {
  filter?: ModelSubscriptionGenreFilterInput | null,
};

export type OnUpdateGenreSubscription = {
  onUpdateGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteGenreSubscriptionVariables = {
  filter?: ModelSubscriptionGenreFilterInput | null,
};

export type OnDeleteGenreSubscription = {
  onDeleteGenre?:  {
    __typename: "Genre",
    id: string,
    name: string,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentGenres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateContentGenreSubscriptionVariables = {
  filter?: ModelSubscriptionContentGenreFilterInput | null,
};

export type OnCreateContentGenreSubscription = {
  onCreateContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentGenreSubscriptionVariables = {
  filter?: ModelSubscriptionContentGenreFilterInput | null,
};

export type OnUpdateContentGenreSubscription = {
  onUpdateContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentGenreSubscriptionVariables = {
  filter?: ModelSubscriptionContentGenreFilterInput | null,
};

export type OnDeleteContentGenreSubscription = {
  onDeleteContentGenre?:  {
    __typename: "ContentGenre",
    contentId: string,
    genreId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    genre?:  {
      __typename: "Genre",
      id: string,
      name: string,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null,
};

export type OnCreateCountrySubscription = {
  onCreateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null,
};

export type OnUpdateCountrySubscription = {
  onUpdateCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteCountrySubscriptionVariables = {
  filter?: ModelSubscriptionCountryFilterInput | null,
};

export type OnDeleteCountrySubscription = {
  onDeleteCountry?:  {
    __typename: "Country",
    id: string,
    name: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentCountries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateContentCountrySubscriptionVariables = {
  filter?: ModelSubscriptionContentCountryFilterInput | null,
};

export type OnCreateContentCountrySubscription = {
  onCreateContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentCountrySubscriptionVariables = {
  filter?: ModelSubscriptionContentCountryFilterInput | null,
};

export type OnUpdateContentCountrySubscription = {
  onUpdateContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentCountrySubscriptionVariables = {
  filter?: ModelSubscriptionContentCountryFilterInput | null,
};

export type OnDeleteContentCountrySubscription = {
  onDeleteContentCountry?:  {
    __typename: "ContentCountry",
    contentId: string,
    countryId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    country?:  {
      __typename: "Country",
      id: string,
      name: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubtitleSubscriptionVariables = {
  filter?: ModelSubscriptionSubtitleFilterInput | null,
};

export type OnCreateSubtitleSubscription = {
  onCreateSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateSubtitleSubscriptionVariables = {
  filter?: ModelSubscriptionSubtitleFilterInput | null,
};

export type OnUpdateSubtitleSubscription = {
  onUpdateSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteSubtitleSubscriptionVariables = {
  filter?: ModelSubscriptionSubtitleFilterInput | null,
};

export type OnDeleteSubtitleSubscription = {
  onDeleteSubtitle?:  {
    __typename: "Subtitle",
    id: string,
    language: string,
    code?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    contentSubtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateContentSubtitleSubscriptionVariables = {
  filter?: ModelSubscriptionContentSubtitleFilterInput | null,
};

export type OnCreateContentSubtitleSubscription = {
  onCreateContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentSubtitleSubscriptionVariables = {
  filter?: ModelSubscriptionContentSubtitleFilterInput | null,
};

export type OnUpdateContentSubtitleSubscription = {
  onUpdateContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentSubtitleSubscriptionVariables = {
  filter?: ModelSubscriptionContentSubtitleFilterInput | null,
};

export type OnDeleteContentSubtitleSubscription = {
  onDeleteContentSubtitle?:  {
    __typename: "ContentSubtitle",
    contentId: string,
    subtitleId: string,
    createdAt?: string | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    subtitle?:  {
      __typename: "Subtitle",
      id: string,
      language: string,
      code?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    id: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
};

export type OnCreateSubscriptionPlanSubscription = {
  onCreateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
};

export type OnUpdateSubscriptionPlanSubscription = {
  onUpdateSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteSubscriptionPlanSubscriptionVariables = {
  filter?: ModelSubscriptionSubscriptionPlanFilterInput | null,
};

export type OnDeleteSubscriptionPlanSubscription = {
  onDeleteSubscriptionPlan?:  {
    __typename: "SubscriptionPlan",
    id: string,
    name: string,
    description?: string | null,
    price: number,
    currency?: string | null,
    billingCycle?: SubscriptionPlanBillingCycle | null,
    durationDays: number,
    maxScreens?: number | null,
    videoQuality?: SubscriptionPlanVideoQuality | null,
    isActive?: boolean | null,
    features?: string | null,
    sortOrder?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnCreateContentSubscription = {
  onCreateContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnUpdateContentSubscription = {
  onUpdateContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteContentSubscriptionVariables = {
  filter?: ModelSubscriptionContentFilterInput | null,
};

export type OnDeleteContentSubscription = {
  onDeleteContent?:  {
    __typename: "Content",
    id: string,
    partnerId?: string | null,
    title: string,
    localTitle: string,
    description?: string | null,
    releaseDate?: string | null,
    duration?: number | null,
    type?: ContentType | null,
    imagesDetails?: string | null,
    videoOriginal?: string | null,
    videoConverted: string,
    videoId: string,
    analyticsId?: number | null,
    maturityRating: string,
    audienceRating?: number | null,
    audienceLike?: number | null,
    audienceDislike?: number | null,
    isFeatured?: boolean | null,
    status?: ContentStatus | null,
    sortOrder: number,
    createdAt?: string | null,
    updatedAt?: string | null,
    audioTracks?:  {
      __typename: "ModelContentAudioTrackConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelContentCategoryConnection",
      nextToken?: string | null,
    } | null,
    countries?:  {
      __typename: "ModelContentCountryConnection",
      nextToken?: string | null,
    } | null,
    genres?:  {
      __typename: "ModelContentGenreConnection",
      nextToken?: string | null,
    } | null,
    subtitles?:  {
      __typename: "ModelContentSubtitleConnection",
      nextToken?: string | null,
    } | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    cognitoId: string,
    email: string,
    username?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    profilePicture?: string | null,
    dateOfBirth?: string | null,
    gender?: UserGender | null,
    country?: string | null,
    languagePreference?: string | null,
    maturityPreference?: string | null,
    status?: UserStatus | null,
    lastLogin?: string | null,
    accountStatus?: UserAccountStatus | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    userFavorites?:  {
      __typename: "ModelUserFavoriteConnection",
      nextToken?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    logs?:  {
      __typename: "ModelLogConnection",
      nextToken?: string | null,
    } | null,
    notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    userReviews?:  {
      __typename: "ModelUserReviewConnection",
      nextToken?: string | null,
    } | null,
    userSubscriptions?:  {
      __typename: "ModelUserSubscriptionConnection",
      nextToken?: string | null,
    } | null,
    userWatchHistories?:  {
      __typename: "ModelUserWatchHistoryConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionUserSubscriptionFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscriptionSubscription = {
  onCreateUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionUserSubscriptionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscriptionSubscription = {
  onUpdateUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionSubscriptionVariables = {
  filter?: ModelSubscriptionUserSubscriptionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscriptionSubscription = {
  onDeleteUserSubscription?:  {
    __typename: "UserSubscription",
    id: string,
    userId: string,
    planId: string,
    startDate: string,
    endDate: string,
    status?: UserSubscriptionStatus | null,
    autoRenew?: boolean | null,
    paymentMethod?: string | null,
    lastPaymentDate?: string | null,
    nextBillingDate?: string | null,
    cancellationDate?: string | null,
    cancellationReason?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    plan?:  {
      __typename: "SubscriptionPlan",
      id: string,
      name: string,
      description?: string | null,
      price: number,
      currency?: string | null,
      billingCycle?: SubscriptionPlanBillingCycle | null,
      durationDays: number,
      maxScreens?: number | null,
      videoQuality?: SubscriptionPlanVideoQuality | null,
      isActive?: boolean | null,
      features?: string | null,
      sortOrder?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    amount: number,
    currency?: string | null,
    paymentMethod: string,
    paymentGateway: string,
    transactionId: string,
    status?: PaymentStatus | null,
    paymentDate: string,
    description?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    invoices?:  {
      __typename: "ModelInvoiceConnection",
      nextToken?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
  owner?: string | null,
};

export type OnCreateInvoiceSubscription = {
  onCreateInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
  owner?: string | null,
};

export type OnUpdateInvoiceSubscription = {
  onUpdateInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteInvoiceSubscriptionVariables = {
  filter?: ModelSubscriptionInvoiceFilterInput | null,
  owner?: string | null,
};

export type OnDeleteInvoiceSubscription = {
  onDeleteInvoice?:  {
    __typename: "Invoice",
    id: string,
    userId: string,
    userSubscriptionId?: string | null,
    paymentId?: string | null,
    invoiceNumber: string,
    amount: number,
    currency?: string | null,
    taxAmount?: number | null,
    discountAmount?: number | null,
    totalAmount: number,
    billingPeriod?: string | null,
    invoiceDate: string,
    dueDate: string,
    status?: InvoiceStatus | null,
    pdfUrl?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    userSubscription?:  {
      __typename: "UserSubscription",
      id: string,
      userId: string,
      planId: string,
      startDate: string,
      endDate: string,
      status?: UserSubscriptionStatus | null,
      autoRenew?: boolean | null,
      paymentMethod?: string | null,
      lastPaymentDate?: string | null,
      nextBillingDate?: string | null,
      cancellationDate?: string | null,
      cancellationReason?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    payment?:  {
      __typename: "Payment",
      id: string,
      userId: string,
      userSubscriptionId?: string | null,
      amount: number,
      currency?: string | null,
      paymentMethod: string,
      paymentGateway: string,
      transactionId: string,
      status?: PaymentStatus | null,
      paymentDate: string,
      description?: string | null,
      metadata?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionUserFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserFavoriteSubscription = {
  onCreateUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionUserFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserFavoriteSubscription = {
  onUpdateUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserFavoriteSubscriptionVariables = {
  filter?: ModelSubscriptionUserFavoriteFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserFavoriteSubscription = {
  onDeleteUserFavorite?:  {
    __typename: "UserFavorite",
    id: string,
    userId: string,
    contentId: string,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserReviewSubscriptionVariables = {
  filter?: ModelSubscriptionUserReviewFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserReviewSubscription = {
  onCreateUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserReviewSubscriptionVariables = {
  filter?: ModelSubscriptionUserReviewFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserReviewSubscription = {
  onUpdateUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserReviewSubscriptionVariables = {
  filter?: ModelSubscriptionUserReviewFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserReviewSubscription = {
  onDeleteUserReview?:  {
    __typename: "UserReview",
    id: string,
    userId: string,
    contentId: string,
    rating: number,
    reviewText?: string | null,
    isApproved?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserWatchHistorySubscriptionVariables = {
  filter?: ModelSubscriptionUserWatchHistoryFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserWatchHistorySubscription = {
  onCreateUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserWatchHistorySubscriptionVariables = {
  filter?: ModelSubscriptionUserWatchHistoryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserWatchHistorySubscription = {
  onUpdateUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserWatchHistorySubscriptionVariables = {
  filter?: ModelSubscriptionUserWatchHistoryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserWatchHistorySubscription = {
  onDeleteUserWatchHistory?:  {
    __typename: "UserWatchHistory",
    id: string,
    userId: string,
    contentId: string,
    progress: number,
    duration: number,
    lastWatchedAt: string,
    deviceInfo?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    content?:  {
      __typename: "Content",
      id: string,
      partnerId?: string | null,
      title: string,
      localTitle: string,
      description?: string | null,
      releaseDate?: string | null,
      duration?: number | null,
      type?: ContentType | null,
      imagesDetails?: string | null,
      videoOriginal?: string | null,
      videoConverted: string,
      videoId: string,
      analyticsId?: number | null,
      maturityRating: string,
      audienceRating?: number | null,
      audienceLike?: number | null,
      audienceDislike?: number | null,
      isFeatured?: boolean | null,
      status?: ContentStatus | null,
      sortOrder: number,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
  owner?: string | null,
};

export type OnCreateLogSubscription = {
  onCreateLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
  owner?: string | null,
};

export type OnUpdateLogSubscription = {
  onUpdateLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLogSubscriptionVariables = {
  filter?: ModelSubscriptionLogFilterInput | null,
  owner?: string | null,
};

export type OnDeleteLogSubscription = {
  onDeleteLog?:  {
    __typename: "Log",
    id: string,
    userId?: string | null,
    action: string,
    entityType?: string | null,
    entityId?: string | null,
    ipAddress?: string | null,
    userAgent?: string | null,
    metadata?: string | null,
    createdAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    userId: string,
    title: string,
    message: string,
    type?: NotificationType | null,
    isRead?: boolean | null,
    relatedId?: string | null,
    relatedType?: string | null,
    createdAt?: string | null,
    readAt?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      cognitoId: string,
      email: string,
      username?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      profilePicture?: string | null,
      dateOfBirth?: string | null,
      gender?: UserGender | null,
      country?: string | null,
      languagePreference?: string | null,
      maturityPreference?: string | null,
      status?: UserStatus | null,
      lastLogin?: string | null,
      accountStatus?: UserAccountStatus | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
