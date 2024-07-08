export default {
  modulePaths: ['/shared/vendor/modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '\\.html$': '<rootDir>/tests/__mocks__/htmlMock.js',
    '\\.(gif|ttf|eot|svg|png|jpg|ogg|mp3)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/tests/battleship.test.js"],
};