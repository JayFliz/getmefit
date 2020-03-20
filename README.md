<div align="center">
    <img src="static/getmefit-logo.png" alt="Logo" width='100px' margin height='auto'/>
</div>

# Get Me Fit
Get Me Fit is a platform where fitness instructors can host & sell their classes live & online to support people isolating at home

## Stack
- [Gatsby](https://www.gatsbyjs.org)
- [Firebase](https://firebase.google.com/)
- [Stripe Connect](https://stripe.com/gb/connect)
- [Tailwind](https://tailwindcss.com/) -- Up for discussion


## How it works
- Gatsby renders all unauthenticated routes as usual static pages.
- Authenticated routes are whitelisted as client-only (`/app/*`).
- Logged-out users are redirected to the login page if they attempt to visit private routes.
- Logged-in users will see their private content.

## Getting Started

1. Create the `.env` by copying `.env.example`
2. Fill in correct Enviroment Details (Firebase)
2. run `npm install`
4. run `gatsby develop`

## Production
The production version is hosted on Netlify. Whenever a new PR get's merged into master Netlify will rebuild by running `gatsby build`. Production enviroment variables have also been added to Netlify

## Extra Reads
- [Client-only Routes](https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/) are being used for authentication
- [Gatsby Plugin Firebase](https://www.gatsbyjs.org/packages/gatsby-plugin-firebase/)  is being used to import and set the firebase SDK
