module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Handle .ts and .tsx files with ts-jest
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Supported file extensions
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)?(x)'], // Match test files
  };
  