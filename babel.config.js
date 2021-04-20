module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins module-resolver is added to accommodate babel-plugin-module-resolver
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@supports': './src/supports',
        },
      },
    ],
  ],
};
