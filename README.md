# App Android React Native

**Autor/Author**: Bryan James Paiva Dos Santos

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![React Native](https://img.shields.io/badge/React_Native-0.73.4-61dafb)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-50.0.0-000020)](https://expo.dev/)

## 🚀 Visão Geral

Aplicativo móvel desenvolvido com React Native e Expo, seguindo as melhores práticas de desenvolvimento para Android. O projeto utiliza JavaScript moderno (ES6+) e está configurado com ESLint e Prettier para garantir a qualidade do código.

## 🛠️ Tecnologias Utilizadas

- React Native 0.73.4
- Expo 50
- JavaScript (ES6+)
- React Navigation 6.x
- React Native Reanimated 3.x
- React Native Gesture Handler 2.14
- React Native Safe Area Context 4.8.2
- Expo Router 3.x
- Expo Status Bar 1.11.1

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para emulador Android)

## 🚀 Como executar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/app-android-react-native.git
   cd app-android-react-native
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   # Iniciar o servidor de desenvolvimento
   npx expo start
   
   # Para Android
   npx expo run:android
   
   # Para iOS (apenas em macOS)
   npx expo run:ios
   ```

4. **Execute no emulador ou dispositivo físico**
   - Use o aplicativo Expo Go no seu dispositivo móvel para escanear o QR code
   - Ou pressione `a` para abrir no Android Emulator

## 🏗️ Estrutura do Projeto

```
app-android-reactnative/
├── assets/              # Arquivos de mídia e fontes
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas do aplicativo
│   ├── navigation/      # Configuração de navegação
│   ├── utils/           # Funções utilitárias
│   ├── hooks/           # Hooks personalizados
│   ├── contexts/        # Contextos do React
│   ├── services/        # Chamadas de API e serviços
│   └── styles/          # Estilos globais
├── App.js               # Ponto de entrada do aplicativo
├── app.json             # Configuração do Expo
├── babel.config.js      # Configuração do Babel
└── metro.config.js      # Configuração do Metro Bundler
```

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙌 Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

2. **Primeiros Passos**
   - Comece modificando as cores e textos
   - Adicione novos botões e veja o que acontece
   - Experimente modificar os estilos

3. **Próximos Passos**
   - Crie novas telas
   - Adicione funcionalidades aos botões
   - Conecte-se a uma API

## 🇺🇸 Beginner's Guide to Mobile Development

Welcome to the world of mobile development! This project was created to help you understand the fundamentals of mobile app development using React Native and Expo.

### 🤔 What is this project?
This is a sample mobile application that demonstrates:
- Screen navigation
- User authentication
- Light/dark themes
- Reusable components
- State management

### 🧠 Key Concepts

1. **Components**
   - Building blocks of the user interface
   - Can be reused across the app
   - Examples: buttons, headers, cards

2. **State**
   - Data that can change during app usage
   - Example: logged-in user, dark/light theme

3. **Props**
   - Properties passed between components
   - Enable communication between different parts of the app

4. **Styling**
   - CSS-like styling for components
   - Styles can be defined inline or in separate files

### 🛠️ Getting Started with Coding

1. **Basic Concepts**
   - Learn the basics of JavaScript/TypeScript
   - Understand what components are in React
   - Practice creating simple interfaces

2. **First Steps**
   - Start by modifying colors and text
   - Add new buttons and see what happens
   - Experiment with changing styles

3. **Next Steps**
   - Create new screens
   - Add functionality to buttons
   - Connect to an API

---

## 🛠️ Tecnologias / Technologies

- ⚛️ React Native 0.73.4
- 🚀 Expo 50
- 📱 React Navigation 7
- 🔄 React Native Reanimated 3
- 🎨 Styled Components
- 📱 React Native Gesture Handler
- 🛡️ React Native Safe Area Context
- 📱 React Native Screens
- 🔍 TypeScript
- 🎨 ESLint + Prettier
- 🧪 Jest + Testing Library

## 📱 Funcionalidades / Features

- 🔑 Autenticação de usuário / User authentication
- 🏠 Navegação entre telas / Screen navigation
- 🌓 Suporte a tema claro/escuro / Light/dark theme support
- 📱 Interface responsiva / Responsive interface
- 🔄 Atualizações em tempo real / Real-time updates
- 📊 Animações fluidas / Smooth animations
- 🔒 Gerenciamento de estado / State management
- 🌐 Suporte a múltiplos idiomas / Multi-language support

## 🚀 Começando / Getting Started

### 📋 Pré-requisitos / Prerequisites

- Node.js (v18 ou superior / or higher)
- npm (v9 ou superior / or higher) ou Yarn
- Git
- Expo CLI (`npm install -g expo-cli`)
- Java Development Kit (JDK) 17
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS, apenas em macOS)
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (para emulador Android / for Android emulator) ou Xcode (para simulador iOS / for iOS simulator)

### 🔧 Instalação / Installation

1. **Clonar o repositório** / **Clone the repository**
   ```bash
   git clone https://github.com/seu-usuario/app-android-react-native.git
   cd app-android-react-native
   ```

2. **Instalar dependências** / **Install dependencies**
   ```bash
   npm install
   # ou / or
   yarn
   ```

3. **Configurar variáveis de ambiente** / **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações / Edit .env file with your settings
   ```

4. **Iniciar o servidor de desenvolvimento** / **Start development server**
   ```bash
   # Desenvolvimento / Development
   npm start
   # ou / or
   yarn start
   ```

5. **Executar em dispositivo ou emulador** / **Run on device or emulator**
   - Use o aplicativo Expo Go no seu dispositivo móvel para escanear o QR code
   - Ou pressione `a` para abrir no Android Emulator
   - Ou pressione `i` para abrir no iOS Simulator

## 🏗️ Estrutura do Projeto / Project Structure

```
AppAndroid-ReactNative/
├── app/                  # Código-fonte principal / Main source code
│   ├── (tabs)/           # Navegação por abas / Tab navigation
│   ├── screens/          # Telas do aplicativo / App screens
│   ├── styles/           # Estilos globais / Global styles
│   ├── _layout.js        # Configuração de layout raiz / Root layout config
│   └── +not-found.js     # Tela 404 / 404 screen
├── assets/               # Recursos estáticos / Static assets
├── components/           # Componentes reutilizáveis / Reusable components
├── constants/            # Constantes e temas / Constants and themes
├── hooks/                # Hooks personalizados / Custom hooks
├── services/             # Serviços e APIs / Services and APIs
├── types/                # Tipos TypeScript / TypeScript types
├── utils/                # Utilitários / Utilities
├── App.tsx               # Ponto de entrada do aplicativo / App entry point
└── index.js              # Registro do aplicativo / App registration
```

## 🧪 Testes / Testing

```bash
# Executar testes unitários / Run unit tests
npm test

# Executar testes em modo watch / Run tests in watch mode
npm test -- --watch

# Gerar relatório de cobertura / Generate coverage report
npm test -- --coverage
```

## 🧹 Linting e Formatação / Linting and Formatting

```bash
# Verificar problemas de lint / Check for linting issues
npm run lint

# Corrigir problemas de lint automaticamente / Automatically fix linting issues
npm run lint -- --fix

# Formatar código / Format code
npm run format
```

## 📦 Build e Deploy / Build and Deploy

### Android
```bash
# Build para Android / Build for Android
npx expo prebuild -p android
cd android && ./gradlew assembleRelease

# OU para gerar um APK assinado / OR to generate a signed APK
cd android && ./gradlew bundleRelease
```

### iOS
```bash
# Build para iOS / Build for iOS
npx expo prebuild -p ios
cd ios && pod install
# Abra o Xcode e faça o build manualmente / Open Xcode and build manually
```

## 🤝 Contribuindo / Contributing

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença / License

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feito com ❤️ por Bryan James Paiva Dos Santos com a ajuda da Inteligência Artificial WindSurf

Made with ❤️ by Bryan James Paiva Dos Santos with the help of WindSurf AI

## 📱 Features / Funcionalidades

- Navegação entre telas / Screen navigation
- Suporte a temas claro e escuro / Light and dark theme support
- Interface responsiva / Responsive interface
- Tratamento de erros / Error handling
- Componentes estilizados / Styled components

## 🛠️ Requirements / Pré-requisitos

- Node.js (version 16 or higher / versão 16 ou superior)
- npm or yarn
- Expo CLI (optional but recommended / opcional, mas recomendado)
- Android Studio / Xcode (for emulators / para emuladores)

## 🚀 Getting Started / Iniciando

1. **Clone the repository / Clone o repositório**
   ```bash
   git clone [REPOSITORY_URL]
   cd AppAndroid-ReactNative
   ```

2. **Install dependencies / Instale as dependências**
   ```bash
   npm install
   # or / ou
   yarn
   ```

3. **Start the development server / Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # or / ou
   yarn start
   ```

4. **Run on device or emulator / Execute no dispositivo ou emulador**
   - Use the Expo Go app on your mobile device to scan the QR code /
     Use o aplicativo Expo Go no seu dispositivo móvel para escanear o QR code
   - Or press `a` to open in Android Emulator /
     Ou pressione `a` para abrir no Android Emulator
   - Or press `i` to open in iOS Simulator /
     Ou pressione `i` para abrir no iOS Simulator

## 📂 Project Structure / Estrutura do Projeto

```
AppAndroid-ReactNative/
├── app/                  # Main source code / Código-fonte principal
│   ├── (tabs)/           # Tab navigation / Navegação por abas
│   ├── screens/          # App screens / Telas do aplicativo
│   ├── styles/           # Global styles / Estilos globais
│   ├── _layout.js        # Root layout config / Configuração de layout raiz
│   └── +not-found.js     # 404 screen / Tela de rota não encontrada
├── assets/               # Static files / Recursos estáticos
├── components/           # Reusable components / Componentes reutilizáveis
├── constants/            # Constants and themes / Constantes e temas
├── hooks/                # Custom hooks / Hooks personalizados
├── App.js                # App entry point / Ponto de entrada do aplicativo
└── index.js              # App registration / Registro do aplicativo
```

## 🎨 Themes / Temas

The app supports automatic light/dark themes based on device settings. Colors are defined in `constants/Colors.js`.
O aplicativo suporta temas claro e escuro automaticamente com base nas configurações do dispositivo. As cores são definidas em `constants/Colors.js`.

## 🔄 Navigation / Navegação

Navigation is managed by React Navigation with the following main routes:
A navegação é gerenciada pelo React Navigation com as seguintes rotas principais:

- `/` - Login screen / Tela de login
- `/home` - Home screen / Tela inicial
- `/profile` - User profile / Perfil do usuário

## 🐛 Debugging / Depuração

- **React Native Logs / Logs do React Native**:
  ```bash
  npx react-native log-android  # Android
  # or / ou
  # Check Xcode console for iOS / Verifique o console do Xcode para iOS
  ```

- **React DevTools**:
  ```bash
  npx react-devtools
  ```

- **Clear cache / Limpar cache**:
  ```bash
  npx react-native start --reset-cache
  ```

## 📦 Main Dependencies / Dependências Principais

- `@react-navigation/native` - Navigation / Navegação
- `react-native-gesture-handler` - Gestures / Gestos
- `react-native-reanimated` - Animations / Animações
- `react-native-safe-area-context` - Safe area for different devices / Área segura para diferentes dispositivos
- `react-native-screens` - Screen performance improvement / Melhora de desempenho de telas

## 🤝 Contributing / Contribuindo

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.
Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar um pull request.

## 📄 License / Licença

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Made with ❤️ by Bryan James Paiva Dos Santos with the help of WindSurf AI
Feito com ❤️ por Bryan James Paiva Dos Santos com a ajuda da Inteligência Artificial WindSurf

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
