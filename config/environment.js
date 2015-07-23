/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dig',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://www.google-analytics.com/",
      'font-src': "'self' http://*.bootstrapcdn.com https://*.bootstrapcdn.com http://fonts.gstatic.com https://fonts.gstatic.com",
      'connect-src': "'self' http://ccmixter.org",
      'img-src': "'self' http://ccmixter.org http://tunetrack.net http://*.bootstrapcdn.com https://*.bootstrapcdn.com https://static.fsf.org data",
      'style-src': "'self' 'unsafe-inline' http://*.bootstrapcdn.com https://*.bootstrapcdn.com http://fonts.googleapis.com https://fonts.googleapis.com",
      'media-src': "'self' http://ccmixter.org"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
