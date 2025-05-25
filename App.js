import React, { useMemo } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import LoginScreen from '@/app/screens/LoginScreen';
import HomeScreen from '@/app/screens/HomeScreen';
import ProfileScreen from '@/app/screens/ProfileScreen';

const Stack = createStackNavigator();

/**
 * Componente principal do aplicativo que configura a navegação e o tema
 */
export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  // Cores baseadas no tema
  const colors = useMemo(() => ({
    background: isDark ? Colors.dark.background : Colors.light.background,
    text: isDark ? Colors.dark.text : Colors.light.text,
    header: isDark ? Colors.dark.primary : Colors.light.primary,
    border: isDark ? Colors.dark.border : Colors.light.border,
    accent: isDark ? Colors.dark.accent : Colors.light.accent,
  }), [isDark]);
  
  const headerBackground = colors.header;

  // Configuração de estilo global para o cabeçalho
  const screenOptions = useMemo(
    () => ({
      headerStyle: {
        backgroundColor: colors.header,
        elevation: 0, // Remove sombra no Android
        shadowOpacity: 0, // Remove sombra no iOS
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: colors.background,
      },
      animationEnabled: true,
    }),
    [colors],
  );

  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={headerBackground}
      />
      <NavigationContainer
        theme={{
          dark: isDark,
          colors: {
            ...(isDark ? DarkTheme.colors : DefaultTheme.colors),
            primary: colors.header,
            background: colors.background,
            card: colors.header,
            text: colors.text,
            border: colors.border,
            notification: colors.accent,
          },
        }}
      >
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={screenOptions}
        >
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ 
              title: 'Login',
              headerShown: false, // Esconde o cabeçalho na tela de login
            }}
          />
          <Stack.Screen 
            name="MainTabs" 
            component={HomeScreen} 
            options={{ 
              headerShown: false,
              gestureEnabled: false, // Desativa o gesto de voltar na tela inicial
            }}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ 
              title: 'Perfil',
              headerBackTitle: 'Voltar',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}