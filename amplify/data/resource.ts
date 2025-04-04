import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  AudioTrack: a.model({
    id: a.id().required(),
    language: a.string().required(),
    code: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    contentAudioTracks: a.hasMany('ContentAudioTrack', 'audioId')
  }).authorization(allow => [allow.publicApiKey()]),

  ContentAudioTrack: a.model({
    contentId: a.id().required(),
    audioId: a.id().required(),
    createdAt: a.datetime(),
  //  content: a.belongsTo('Content', 'contentId'),
    audioTrack: a.belongsTo('AudioTrack', 'audioId')
  }).authorization(allow => [allow.publicApiKey()]),

  

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