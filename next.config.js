module.exports = {
  i18n: {
    locales: [
      'en',
      'nl-nl',
      'en-nl',
      'nl-be',
      'en-be',
      'fr-be',
      'fr-fr',
      'en-fr',
    ],
    defaultLocale: 'en',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
};
