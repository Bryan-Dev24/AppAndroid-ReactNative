import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Configuração de estilo global para o cabeçalho
const screenOptions = {
  headerStyle: {
    backgroundColor: Colors.light.primary,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerBackTitleVisible: false,
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <SafeAreaProvider>
      <StatusBar 
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={colorScheme === 'dark' ? Colors.dark.background : Colors.light.background}
      />
      <Stack
        screenOptions={{
          ...screenOptions,
          headerStyle: {
            backgroundColor: colorScheme === 'dark' 
              ? Colors.dark.primary 
              : Colors.light.primary,
          },
          contentStyle: {
            backgroundColor: colorScheme === 'dark' 
              ? Colors.dark.background 
              : Colors.light.background,
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Login',
            headerShown: false
          }} 
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false 
          }} 
        />
        <Stack.Screen 
          name="profile" 
          options={{ 
            title: 'Perfil',
            headerShown: true
          }} 
        />
      </Stack>
    </SafeAreaProvider>
  );
}
