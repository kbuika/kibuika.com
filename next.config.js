module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: { 
    nftTracing: true 
  },
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/the_kibuika",
        permanent: true,
      },
    ];
  }
};
