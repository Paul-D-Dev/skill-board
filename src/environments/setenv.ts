// Documentation : https://www.ninadsubba.in/blog/setup-dotenv-to-access-environment-variables-in-angular

const { writeFile } = require('fs')
const { argv } = require('yargs')
// read environment variables from .env file
require('dotenv').config()

// read the command line arguments passed with yargs
const environment = argv.environment
const isProduction = environment === 'prod'
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   apiURL: "${process.env['API_URL']}",
   firebaseConfig: {
     apiKey: "${process.env['FIRE_API_KEY']}",
     authDomain: "${process.env['FIRE_AUTH_DOMAIN']}",
     projectId: "${process.env['FIRE_PROJECT_ID']}",
     storageBucket: "${process.env['FIRE_STORAGE_BUCKET']}",
     messagingSenderId: "${process.env['FIRE_MESSAGING_SENDER_ID']}",
     appId: "${process.env['FIRE_APP_ID']}",
    },
};
`

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err)
  }
  console.log(`Wrote variables to ${targetPath}`)
})
