import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

/**
 * Tela exibida quando uma rota não é encontrada
 */
export default function NotFoundScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const errorColor = isDark ? Colors.dark.error : Colors.light.error;
  const backgroundColor = isDark ? Colors.dark.background : Colors.light.background;
  const textColor = isDark ? Colors.dark.text : Colors.light.text;
  const borderColor = isDark ? Colors.dark.border : Colors.light.border;

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <Stack.Screen options={{ title: 'Página não encontrada' }} />
      
      <View style={styles.content}>
        <View style={[styles.errorIcon, { borderColor: errorColor }]}>
          <ThemedText style={[styles.errorIconText, { color: errorColor }]}>
            !
          </ThemedText>
        </View>
        
        <ThemedText type="title" style={[styles.title, { color: textColor }]}>
          Oops! Página não encontrada
        </ThemedText>
        
        <ThemedText style={[styles.message, { color: textColor }]}>
          A página que você está tentando acessar não existe ou foi movida.
        </ThemedText>
        
        <Link href="/" asChild>
          <Pressable style={[styles.button, { borderColor }]}>
            <ThemedText style={[styles.buttonText, { color: textColor }]}>
              Voltar para o início
            </ThemedText>
          </Pressable>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  errorIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 59, 48, 0.1)',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  errorIconText: {
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  message: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.8,
  },
  button: {
    width: '100%',
    maxWidth: 280,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
