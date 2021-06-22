module.exports = {
  roots: ['<rootDir>'],
  testMatch: [
    '**/(*.)+(spec|test).+(ts|tsx|js)',
    '**/__test__/**/*.+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
