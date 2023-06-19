export default {
    testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    'i18next': '<rootDir>/test/__mocks__/reacti18nextMock.js'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}