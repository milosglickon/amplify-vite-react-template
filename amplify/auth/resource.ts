import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
        google: {
            clientId: secret('GOOGLE_CLIENT_ID'),
            // projectId:"iris-connector",
            // authUri:"https://accounts.google.com/o/oauth2/auth",
            // "token_uri":"https://oauth2.googleapis.com/token",
            // "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
            clientSecret:secret('GOOGLE_CLIENT_SECRET'),
            // "javascript_origins":[
            //    "http://localhost:5173",
            //    "https://master.d1bgkh197sfkvu.amplifyapp.com",
            //    "https://cvanalyzer.auth.eu-west-1.amazoncognito.com"
          
        },
        callbackUrls:[
               "https://master.d1bgkh197sfkvu.amplifyapp.com",
               "http://localhost:5173",
               "https://cvanalyzer.auth.eu-west-1.amazoncognito.com/oauth2/idpresponse"
            ],
            logoutUrls:[
                "https://master.d1bgkh197sfkvu.amplifyapp.com",
                "http://localhost:5173",
                "https://cvanalyzer.auth.eu-west-1.amazoncognito.com/oauth2/idpresponse"
             ],
    }
  },
});
