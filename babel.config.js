module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json'],
          alias: {
            // Aliases principais
            '@': '.',
            '@app': './app',
            '@assets': './assets',
            
            // Pastas comuns
            '@components': './app/components',
            '@screens': './app/screens',
            '@hooks': './app/hooks',
            '@constants': './app/constants',
            '@styles': './app/styles',
            '@utils': './app/utils',
            
            // Contextos e serviços (se existirem)
            '@contexts': './app/contexts',
            '@services': './app/services',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
