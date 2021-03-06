require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `GetMeFit Beta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
            apiKey: process.env.GATSBY_FIREBASE_API_KEY,
            authDomain:  process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
            projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
            storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.GATSBY_FIREBASE_APP_ID
          }
      }
    }
  ]
}
