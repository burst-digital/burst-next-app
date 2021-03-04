const { PHASE_PRODUCTION_BUILD } = require('next/constants');

const defaultConfig = {
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
};

module.exports = phase => {
  const config = defaultConfig;

  if (phase === PHASE_PRODUCTION_BUILD) {
    config.distDir = '.next.proxy';
  }

  return config;
};
