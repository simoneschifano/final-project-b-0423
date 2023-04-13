/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
<<<<<<< HEAD
    includePaths: ["src/styles"],
    prependData: `
    @import "/scss/mixins/_flex.scss",
    @import "/scss/mixins/_size.scss",
    @import "/scss/variables/_colors.scss",
    @import "/scss/variables/_typography.scss",
=======
    includePaths: ["src/styles/"],
    prependData: `
    @import "./src/styles/scss/mixins/_flex.scss",
    @import "./src/styles/scss/mixins/_size.scss",
    @import "./src/styles/scss/variables/_colors.scss",
    @import "./src/styles/scss/variables/_typography.scss",
>>>>>>> 2e27945cabda3f84af1b0f63d2035f430ddf89cc


    `,
  },
};
module.exports = nextConfig;
