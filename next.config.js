/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["src/styles/scss"],
    prependData: `
    @import "/mixins/_flex.scss",
    @import "/mixins/_size.scss",
    @import "/variables/_colors.scss",
    @import "/variables/_typography.scss",


    `,
  },
};
module.exports = nextConfig;
