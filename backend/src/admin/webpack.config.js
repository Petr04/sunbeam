'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

  const modifiedConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        // ...config.resolve.fallback,
        // Modifying config doesn't take effect for some reason
        "http": require.resolve("stream-http"),
        "url": require.resolve("url/"),
        "zlib": require.resolve("browserify-zlib"),
        "assert": require.resolve("assert/"),
        "stream": require.resolve("stream-browserify"),
        "tty": require.resolve("tty-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "https": require.resolve("https-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "querystring": require.resolve("querystring-es3"),
        "timers": require.resolve("timers-browserify"),
        "fs": false,
      },
    },
  }

  return modifiedConfig
};
