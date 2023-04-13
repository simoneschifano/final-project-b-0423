/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  sassOptions: {
    includePaths: ["scss"],
    prependData: `
    @import "/mixins/_flex.scss",
    @import "/mixins/_size.scss",
    @import "/variables/_colors.scss",
    @import "/variables/_typography.scss",


    `,
  },
=======
>>>>>>> 7d0bd0b76807e119db40854c04e9db6f6b95b46a
};
module.exports = nextConfig;
