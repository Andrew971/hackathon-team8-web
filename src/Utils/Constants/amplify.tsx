
const {
  REACT_APP_AWS_COGNITO_REGION,
  REACT_APP_AWS_COGNITO_POOL_ID,
  REACT_APP_AWS_COGNITO__CLIENT_POOL_ID,
  REACT_APP_AWS_COGNITO__IDENTITY_POOL_ID
} = process.env

console.log(REACT_APP_AWS_COGNITO_REGION,
  REACT_APP_AWS_COGNITO_POOL_ID,
  REACT_APP_AWS_COGNITO__CLIENT_POOL_ID,
  REACT_APP_AWS_COGNITO__IDENTITY_POOL_ID,)
export default {
  Auth: {
      // identityPoolId: 'ca-central-1:a621778f-c837-400d-a2d6-d0e3ec4192c5',
      identityPoolId: REACT_APP_AWS_COGNITO__IDENTITY_POOL_ID,

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      
      // REQUIRED - Amazon Cognito Region
      region: REACT_APP_AWS_COGNITO_REGION,

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      // identityPoolRegion: 'XX-XXXX-X',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: REACT_APP_AWS_COGNITO_POOL_ID,

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: REACT_APP_AWS_COGNITO__CLIENT_POOL_ID,

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,

      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      // cookieStorage: {
      // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      //     domain: '.yourdomain.com',
      // // OPTIONAL - Cookie path
      //     path: '/',
      // // OPTIONAL - Cookie expiration in days
      //     expires: 365,
      // // OPTIONAL - Cookie secure flag
      // // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      //     secure: true
      // },

      // OPTIONAL - customized storage object
      // storage: new MyStorage(),
      
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      // authenticationFlowType: 'USER_PASSWORD_AUTH',

      // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
      clientMetadata: { myCustomKey: 'myCustomValue' },

  },
  Interactions: {
    bots: {
      "ScheduleAppointment": {
        "name": "ScheduleAppointment",
        "alias": "$LATEST",
        "region": "us-east-1",
        // sessionAttributes: { attr1: "val1", attr2: "val2" }

      },
      // sessionAttributes: { attr1: "val1", attr2: "val2" }

    },
    sessionAttributes: { attr1: "val1", attr2: "val2" }

  }
}