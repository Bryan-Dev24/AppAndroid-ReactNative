const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

// Configuração base do Metro
const defaultConfig = getDefaultConfig(__dirname);

/**
 * Configuração estendida do Metro para melhor desempenho e suporte a recursos avançados
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // Ativa a minificação em produção
    minifierConfig: {
      keep_classnames: true, // Necessário para algumas bibliotecas
      keep_fnames: true,    // Mantém nomes de funções para melhor debugging
      mangle: {
        toplevel: true,
      },
      output: {
        comments: false,
        ascii_only: true,
      },
      sourceMap: true,
    },
    // Habilita o uso de workers para transformação em paralelo
    workerThreads: true,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    ...defaultConfig.resolver,
    // Extensões de arquivo suportadas
    assetExts: [
      ...defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      'cjs',
      'db',
      'sqlite',
      'mp3',
      'ttf',
      'otf',
      'png',
      'jpg',
      'jpeg',
      'gif',
      'webp',
    ],
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          if (target.hasOwnProperty(name)) {
            return target[name];
          }
          return path.join(process.cwd(), `node_modules/${name}`);
        },
      }
    ),
  },
  // Configuração de cache
  cacheStores: [
    new (require('metro-cache')).FileStore({
      root: path.join(__dirname, 'node_modules/.cache/metro'),
    }),
  ],
  // Configuração de watch
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, '../../node_modules'),
  ],
};

module.exports = config;
