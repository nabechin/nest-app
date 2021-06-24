module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testMatch: [
    '**/(*.)+(spec|test).+(ts|tsx|js)',
    '**/__test__/**/*.+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
