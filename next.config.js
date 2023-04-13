/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
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
