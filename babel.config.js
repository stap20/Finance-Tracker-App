module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './app/assets',
          '@components': './app/components',
          '@config': './app/config',
          '@constants': './app/constants',
          '@hooks': './app/hooks',
          '@navigation': './app/navigation',
          '@screens': './app/screens',
          '@styles': './app/styles',
          '@theme':'./app/styles/theme/ThemeContext',
          '@store': './app/store',
          '@utils': './app/utils',
        },
      },
    ],
  ],
};
