// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3000',
  firebaseConfig: {
    apiKey: 'AIzaSyAjjPyB7rCuldOZ2r6fzz1KlRgTPf6rl94',
    authDomain: 'skill-board-api.firebaseapp.com',
    projectId: 'skill-board-api',
    storageBucket: 'skill-board-api.appspot.com',
    messagingSenderId: '365038795644',
    appId: '1:365038795644:web:d1834244f07c0c7476c2f9',
  },
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
