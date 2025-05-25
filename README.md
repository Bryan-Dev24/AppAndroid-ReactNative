# App Android React-Native

**Autor**: Bryan James Paiva Dos Santos | [Desenvolvido com WindSurf AI IDE!](https://windsurfai.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![React Native](https://img.shields.io/badge/React_Native-0.73.4-61dafb)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-50.0.0-000020)](https://expo.dev/)

## 🚀 Visão Geral

Aplicativo móvel desenvolvido com React Native e Expo, seguindo as melhores práticas de desenvolvimento para Android. O projeto utiliza JavaScript moderno (ES6+) e está configurado com ESLint e Prettier para garantir a qualidade do código.

## 🛠️ Tecnologias

### Principais Bibliotecas
[![React Navigation](https://img.shields.io/badge/React_Navigation-6.x-6a51b2)](https://reactnavigation.org/)
[![React Native Reanimated](https://img.shields.io/badge/Reanimated-3.x-3f4d9f)](https://docs.swmansion.com/react-native-reanimated/)
[![React Native Gesture Handler](https://img.shields.io/badge/Gesture_Handler-2.14-3f4d9f)](https://docs.swmansion.com/react-native-gesture-handler/)
[![React Native Safe Area Context](https://img.shields.io/badge/Safe_Area-4.8.2-3f4d9f)](https://github.com/th3rdwave/react-native-safe-area-context)
[![Expo Router](https://img.shields.io/badge/Expo_Router-3.x-000020)](https://expo.github.io/router/)

### Ferramentas de Desenvolvimento
[![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4b32c3)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.2.5-ff69b4)](https://prettier.io/)
[![Babel](https://img.shields.io/badge/Babel-7.23.9-f9dc3e?logo=babel&logoColor=white)](https://babeljs.io/)
[![Metro](https://img.shields.io/badge/Metro-0.77.0-f24e1e)](https://facebook.github.io/metro/)

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 9 ou superior) ou Yarn
- Git
- Expo CLI (`npm install -g expo-cli`)
- Java Development Kit (JDK) 17
- Android Studio (para desenvolvimento Android)
- Xcode (apenas para desenvolvimento iOS no macOS)

## 🚀 Iniciando o Projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/app-android-react-native.git
   cd app-android-react-native
   ```

2. **Instale as dependências**
   ```bash
   npm install download && npm install react-native-screens react-native-safe-area-context &&
   npm install @react-native/native @react-native/stack && npm install @expo/vector-icons
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```

4. **Execute a aplicação**
   - Android: `npx expo run:android`
   - iOS (macOS): `npx expo run:ios`
   - Dispositivo físico: Escaneie o QR Code com o app Expo Go

## 🏗️ Estrutura do Projeto

```

AppAndroid-ReactNative/
├── app/                  # Código-fonte principal
│   ├── (tabs)/           # Navegação por abas
│   ├── screens/          # Telas do aplicativo
│   ├── styles/           # Estilos globais
│   ├── _layout.js        # Configuração de layout raiz config
│   └── +not-found.js     # Tela 404
├── assets/               # Recursos estáticos
├── components/           # Componentes reutilizáveis
├── constants/            # Constantes e temas
├── hooks/                # Hooks personalizados
├── App.js                # Ponto de entrada do aplicativo
└── index.js              # Registro do aplicativo

```

## 🎯 Funcionalidades

- 🔑 Autenticação de usuário
- 🏠 Navegação entre telas
- 🌓 Suporte a tema claro/escuro
- 📱 Interface responsiva
- 🔄 Atualizações em tempo real
- 📊 Animações fluidas
- 🔒 Gerenciamento de estado
- 🌐 Internacionalização

## 🧠 Conceitos Importantes

### Componentes
- Blocos fundamentais da interface
- Reutilizáveis em toda a aplicação
- Exemplos: botões, cabeçalhos, cartões

### Estado e Props
- **Estado**: Dados que podem mudar
- **Props**: Comunicação entre componentes
- Gerenciamento com Context API ou Redux

### Estilização
- Estilos em JavaScript
- Suporte a temas
- Animações com Reanimated

## 📝 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📚 Recursos de Aprendizado

- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
- [Documentação do Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
   ```

## **Configurar variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

## **Iniciar o servidor de desenvolvimento**
   ```bash
   # Servidor de Desenvolvimento (Comando para ver o resultado!)
   npx expo start
   # ou
   yarn start
   ```

## **Executar em dispositivo ou emulador**
   - Use o aplicativo Expo Go no seu dispositivo móvel para escanear o QR code
   - Ou pressione `a` para abrir no Android Emulator
   - Ou pressione `i` para abrir no iOS Simulator
   - Ou pressione `w` para abrir no navegador do Computador

## 🧪 Testes

```bash
# Executar testes unitário
npm test

# Executar testes em modo watch
npm test -- --watch

# Gerar relatório de cobertura
npm test -- --coverage
```

## 🧹 Linting e Formatação

```bash
# Verificar problemas de lint
npm run lint

# Corrigir problemas de lint automaticamente
npm run lint --force --fix

# Formatar código
npm run format
```

## 📦 Build e Deploy

### Android
```bash
# Build para Android
npx expo prebuild -p android
cd android && ./gradlew assembleRelease

# OU para gerar um APK assinado
cd android && ./gradlew bundleRelease
```

### iOS
```bash
# Build para iOS
npx expo prebuild -p ios
cd ios && pod install
# Abra o Xcode e faça o construa manualmente
```

## 📄 Licença

Este projeto está resguardado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---


## 🔄Navegação

A navegação é gerenciada pelo React Navigation com as seguintes rotas principais:

- `/` - Login screen / Tela de login
- `/home` - Home screen / Tela inicial
- `/profile` - User profile / Perfil do usuário

## 🐛 Depuração

- **Logs do React Native**:
  ```bash
  npx react-native log-android  # Android
  # or / ou
  # Check Xcode console for iOS / Verifique o console do Xcode para iOS
  ```

- **React DevTools**:
  ```bash
  npx react-devtools
  ```

- **Sem cache**:
  ```bash
  npx react-native start --reset-cache
  ```

## 📦 Dependências Principais

- `@react-navigation/native` - Navegação
- `react-native-gesture-handler` - Gestos
- `react-native-reanimated` - Animações
- `react-native-safe-area-context` - Área segura para diferentes dispositivos
- `react-native-screens` - Melhora de desempenho de telas

---

Feito com ❤️ por Bryan James Paiva Dos Santos com a ajuda da Inteligência Artificial WindSurf

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.