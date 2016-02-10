/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'del-sur',
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
      'script-src': "'self' 'unsafe-inline' http://b.mxpnl.net/ http://trendtext.eu/ http://www.google-analytics.com https://www.google-analytics.com http://maps.googleapis.com https://www.youtube.com https://s.ytimg.com http://cdn.inspectlet.com http://hn.inspectlet.com", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' data: http://fonts.gstatic.com http://fonts.googleapis.com https://fonts.gstatic.com https://fonts.googleapis.com" , // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' https://cr-input.mxpnl.net/ http://hn.inspectlet.com wss://inspectletws.herokuapp.com/ https://tgld.mockable.io/", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': "'self' data: http://csi.gstatic.com http://hn.inspectlet.com/",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com https://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'",
      'frame-src': "'self' https://www.youtube.com" // `media-src` will be omitted from policy, browser will fallback to default-src for media resources.
    }
  };

  ENV['mandrill'] = {
  api: {
    host: 'https://mandrillapp.com/api/1.0/',
    key: 'fmIaJ8mIhMO77ofYQEdP6w'
  },

  smtp: {
    host: 'smtp.mandrillapp.com',
    port: 587,
    username: 'carlos@tgld.co',
    password: 'fmIaJ8mIhMO77ofYQEdP6w'
  },


  };

  ENV.imgManager = {
  // how many times to try to load an image (default: 1)
  maxTries: 3,
  // wait 10 milliseconds before trying to load more images (default: 1)
  delay: 10,
  // how many images to try to load in a raw (if 0 then it'll load all at once) (default: 0)
  batchSize: 0,
  // should we start loading a source image only when it appear in the viewport (default: true)
  lazyLoad: false,
  // the image to use while loading the real image (default: null)
  loadingSrc: 'assets/loading-img.png',
  // the image to use when an image has failed to load (default: null)
  errorSrc: 'assets/error-img.png',
  // in the `rules`, you can define specific settings for each image depending on its `src` (default: null)
  rules: [
    // for use with google contacts photos for example:
    {match: 'www.google.com/m8/feeds/photos', delay: 1000, batchSize: 10},
    // do not try to load any external image (for dev env for example):
    {match: /^https?:\/\//, maxTries: 0}
  ],
  // ------ global only settings (show with their default values) -----
  // css class to use when loading an image
  loadingClass: 'loading',
  // css class to use when the load was successful
  successClass: 'success',
  // css class to use when the load has failed
  errorClass: 'error'
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
