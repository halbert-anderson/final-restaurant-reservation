module.exports = {
  setupFiles: ["./jest.setup.js"],
  testTimeout: 20000,
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  coverageDirectory: './coverage/',
  collectCoverage: true,
};
