/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles/"],
    prependData: `
    @import "./src/styles/scss/mixins/_flex.scss",
    @import "./src/styles/scss/mixins/_size.scss",
    @import "./src/styles/scss/variables/_colors.scss",
    @import "./src/styles/scss/variables/_typography.scss",


    `,
  },
};
module.exports = nextConfig;
