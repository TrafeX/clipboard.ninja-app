// Flat config, required by ESLint 9+. The legacy `.eslintrc.js` (`extends:
// '@react-native'`) was dropped in the 9.x upgrade; `@react-native/eslint-config`
// ships the flat variant under the `/flat` export.
//
// ESLint 10 is not an option yet: @react-native/eslint-config@0.87.0 peer-depends
// on `eslint@^8.0.0 || ^9.0.0`, so `npm ci` fails outright on 10.x.
const reactNativeConfig = require('@react-native/eslint-config/flat');

module.exports = [
  {
    ignores: ['android/**', 'vendor/**'],
  },
  ...reactNativeConfig,
];
