const { withSentryConfig } = require ("@sentry/nextjs");

const moduleExports = {
    // Your existing next.js config here
};

const SentryWebpackPluginOptions = {
    silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);