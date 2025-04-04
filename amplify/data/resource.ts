import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  AudioTrack: a.model({
    id: a.id().required(),
    language: a.string().required(),
    code: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
 //   contentAudioTracks: a.hasMany('ContentAudioTrack', 'audioId')
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