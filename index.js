import 'expo-router/entry';
import { registerRootComponent } from 'expo';
import { LogBox } from 'react-native';

/**
 * Configuração inicial do aplicativo
 * 
 * Este arquivo é o ponto de entrada principal do aplicativo React Native.
 * Configura os avisos iniciais e inicia o aplicativo.
 */

// Ignorar avisos específicos
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'AsyncStorage has been extracted from react-native core',
]);

// Importar o componente principal do aplicativo
import App from './app';

// Registrar o componente raiz para inicialização
try {
  registerRootComponent(App);
} catch (error) {
  console.error('Falha ao inicializar o aplicativo:', error);
}
