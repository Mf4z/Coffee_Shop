/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-0xnhnu-q.us', // the auth0 domain prefix
    audience: 'coffeeshopapi', // the audience set for the auth0 app
    clientId: 'p6GxwfyWD4aTCqYsVsFQLX2DenODvvYP', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
    // callbackURL: 'https://localhost:8100/tabs/user-page', // the base url of the running ionic application. 
  }
};
