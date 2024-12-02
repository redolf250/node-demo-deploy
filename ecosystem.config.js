module.exports = {
    apps: [
      {
        name: 'sample-api',
        script: 'index.js',
        watch: true,
        env: {
          NODE_ENV: 'development',
          CUSTOM_ENV_VAR: 'value', // Custom variables
        },
      },
    ],
  };
  