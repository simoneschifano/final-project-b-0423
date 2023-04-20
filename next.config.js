/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://api.coingecko.com/api/v3/coins/",
    // keys for Firebase
    NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY:
      "AIzaSyC8S8XhOshznlBdh1CBxka7-QsdPts2eGo",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "crypie-final-project.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "crypie-final-project",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "crypie-final-project.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "821323060897",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:821323060897:web:554d9763a20962ae9482e0",
  },
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
      @import "./src/styles/scss/mixins/flex.scss";
      @import "./src/styles/scss/mixins/size.scss";
      @import "./src/styles/scss/variables/colors.scss";
      @import "./src/styles/scss/variables/typography.scss";
    `,
  },
};

module.exports = nextConfig;
