const devConfig = {
  MONGO_URL: 'mongodb://localhost/NodeJsApi-dev',
  JWT_SECRET: 'secretKey',
};

const testConfig = {
  MONGO_URL: 'mongodb://localhost/NodeJsApi-test',
  JWT_SECRET: 'secretKey',
};

const prodConfig = {
  MONGO_URL: 'mongodb://localhost/NodeJsApi-pro',
  JWT_SECRET: 'secretKey',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default :
      return prodConfig;
  }
}

export default{
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
