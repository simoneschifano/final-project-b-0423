/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `
    @import "/scss/mixins/_flex.scss",
    @import "/scss/mixins/_size.scss",
    @import "/scss/variables/_colors.scss",
    @import "/scss/variables/_typography.scss",


    `,
  },
};

module.exports = nextConfig;
