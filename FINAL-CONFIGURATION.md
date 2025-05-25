# Configuração do Projeto React Native

**Autor**: Bryan James Paiva Dos Santos (com a ajuda da Inteligência Artificial WindSurf)

**Última Atualização**: 25/05/2025 03:50 (Horário de São Paulo, Brasil)

**Tecnologias Principais**:
- React Native 0.73.4
- Expo 50
- JavaScript (ES6+)
- React Navigation 6.x
- Expo Router 3.x

---

## 🇧🇷 Português (Brasil)

## 1. Estrutura do Projeto

```
AppAndroid-ReactNative/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.js    # Configuração das abas
│   │   ├── explore.js    # Tela de exploração
│   │   └── index.js      # Tela inicial (Home)
│   ├── +not-found.js     # Tela 404
│   ├── _layout.js        # Layout raiz
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   └── ProfileScreen.js
│   └── styles/
│       └── globalStyles.js
├── components/           # Componentes reutilizáveis
├── constants/            # Constantes e temas
├── hooks/                # Hooks personalizados
└── assets/               # Recursos estáticos
```

## 2. Configuração do Ambiente

### 2.1. Instalação

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npx expo start
```

### 2.2. Aliases de Importação

O projeto está configurado com os seguintes aliases:

- `@/` - Raiz do projeto
- `@app/` - Pasta app/
- `@components/` - Componentes reutilizáveis
- `@constants/` - Constantes e temas
- `@hooks/` - Hooks personalizados
- `@assets/` - Recursos estáticos

## 3. Guia de Estilo

### 3.1. Importações

```javascript
// Componentes
import { ThemedText } from '@/components/ThemedText';

// Telas
import LoginScreen from '@/app/screens/LoginScreen';

// Estilos
import { globalStyles } from '@/app/styles/globalStyles';

// Cores
import { Colors } from '@/constants/Colors';

// Hooks
export { useThemeColor } from '@/hooks/useThemeColor';
```

### 3.2. Tema

O suporte a tema claro/escuro está configurado em:
- `constants/Colors.js` - Cores do tema
- `hooks/useColorScheme.js` - Lógica do tema
- `components/Themed*.js` - Componentes com suporte a tema

## 4. Solução de Problemas

### 4.1. Limpar Cache

```bash
# Limpar cache do Metro
npx react-native start --reset-cache

# Ou com Expo
npx expo start -c
```

### 4.2. Reinstalar Dependências

```bash
rm -rf node_modules
npm install
```

### 4.3. Problemas de Navegação

Verifique se todas as rotas estão definidas em `app/_layout.js` e que os nomes das rotas correspondem exatamente aos nomes dos arquivos.

### 4.4. Problemas de Estilo

- Verifique se os estilos estão sendo importados corretamente
- Certifique-se de que todas as cores referenciadas estão definidas em `Colors.js`
- Verifique se os componentes personalizados estão recebendo as props corretas

### 4.3. Erro: Fonte não encontrada
1. Verifique se todas as fontes necessárias estão instaladas:
   ```bash
   npx expo install @expo-google-fonts/inter @expo-google-fonts/space-mono
   ```
2. Verifique se os arquivos de fonte estão na pasta `assets/fonts/`

### 4.4. Limpeza de Cache
Para limpar o cache do Metro e do React Native:
```bash
# Limpar cache do Metro
npx react-native start --reset-cache

# Limpar cache do React Native (Android)
cd android
./gradlew clean
cd ..

# Limpar cache do npm
npm cache clean --force

# Remover node_modules e reinstalar
rm -rf node_modules
npm install
```

### 4.5. Problemas de Navegação
- Verifique se todas as rotas estão definidas corretamente em `app/_layout.js`
- Certifique-se de que os nomes das rotas correspondem exatamente aos nomes dos arquivos
- Verifique se todos os componentes de tela estão sendo importados corretamente

### 4.6. Problemas de Estilo
- Verifique se os estilos estão sendo importados corretamente
- Certifique-se de que todas as cores e estilos referenciados estão definidos
- Verifique se os componentes personalizados estão recebendo as props corretas

## 5. Verificações Finais

1. Certifique-se de que o Node.js versão 16 ou superior está instalado
2. Instale o aplicativo Expo Go no seu dispositivo móvel
3. Conecte-se na mesma rede Wi-Fi do seu computador
4. Escaneie o QR code com o aplicativo Expo Go

##

# React Native Project Configuration

**Author**: Bryan James Paiva Dos Santos (com a ajuda da Inteligência Artificial WindSurf)

**Last Update**: 05/25/2025 02:50 (US Eastern Time)

**Main Technologies**:
- React Native 0.73.4
- Expo 50
- JavaScript (ES6+)
- React Navigation 6.x
- Expo Router 3.x

---

## 🇺🇸 English (United States)

## 1. Project Structure

```
AppAndroid-ReactNative/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.js    # Tabs configuration
│   │   ├── explore.js    # Explore screen
│   │   └── index.js      # Home screen
│   ├── +not-found.js     # 404 screen
│   ├── _layout.js        # Root layout
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   └── ProfileScreen.js
│   └── styles/
│       └── globalStyles.js
├── components/           # Reusable components
├── constants/            # Constants and themes
├── hooks/                # Custom hooks
└── assets/               # Static assets
```

## 2. Environment Setup

### 2.1. Installation

```bash
# Install dependencies
npm install

# Start development server
npx expo start
```

### 2.2. Import Aliases

The project is configured with the following aliases:

- `@/` - Project root (`src/`)
- `@app/` - `app/` folder
- `@screens/` - Application screens
- `@hooks/` - Custom hooks
- `@styles/` - Global styles
- `@constants/` - Constants and themes
- `@assets/` - Static assets (images, fonts, etc.)

## 3. Style Guide

### 3.1. Imports

```javascript
// Components
import { ThemedText } from '@/components/ThemedText';

// Screens
import LoginScreen from '@/app/screens/LoginScreen';

// Styles
import { globalStyles } from '@/app/styles/globalStyles';

// Colors
import { Colors } from '@/constants/Colors';

// Hooks
export { useThemeColor } from '@/hooks/useThemeColor';
```

### 3.2. Theme

Dark/light theme support is configured in:
- `constants/Colors.js` - Theme colors
- `hooks/useColorScheme.js` - Theme logic
- `components/Themed*.js` - Theme-aware components

## 4. Troubleshooting

### 4.1. Clear Cache

```bash
# Clear Metro cache
npx react-native start --reset-cache

# Or with Expo
npx expo start -c
```

### 4.2. Reinstall Dependencies

```bash
rm -rf node_modules
npm install
```

### 4.3. Navigation Issues

Make sure all routes are properly defined in `app/_layout.js` and that route names exactly match the file names.

### 4.4. Styling Issues

- Verify that styles are being imported correctly
- Ensure all referenced colors are defined in `Colors.js`
- Check that custom components are receiving the correct props

### 4.5. Font Not Found
1. Make sure all required fonts are installed:
   ```bash
   npx expo install @expo-google-fonts/inter @expo-google-fonts/space-mono
   ```
2. Verify that font files are in the `assets/fonts/` folder

### 4.6. Cache Cleanup
To clear Metro and React Native cache:
```bash
# Clear Metro cache
npx react-native start --reset-cache

# Clear React Native cache (Android)
cd android
./gradlew clean
cd ..

# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

## 5. Final Checks

1. Make sure Node.js version 16 or higher is installed
2. Install the Expo Go app on your mobile device
3. Connect to the same Wi-Fi network as your computer
4. Scan the QR code with the Expo Go app
