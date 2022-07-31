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
      {
        source: "/git",
        destination: "https://github.com/kibuikaCodes",
        permanent: true,
      },
      {
        source: "/ext-ppt",
        destination: "https://speakerdeck.com/kibuika/getting-started-with-chrome-extensions",
        permanent: true,
      },
      {
        source: "/grauchi-ext",
        destination: "https://github.com/kibuikaCodes/grauchi-chrome-extension",
        permanent: true,
      }
    ];
  }
};
