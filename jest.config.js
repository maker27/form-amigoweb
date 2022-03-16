module.exports = {
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^.+\\.svg$': 'jest-svg-transformer'
    }
};
