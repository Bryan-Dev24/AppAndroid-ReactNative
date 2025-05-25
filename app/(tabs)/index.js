import { StyleSheet, View, ScrollView, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

/**
 * Tela inicial do aplicativo
 */
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const backgroundColor = isDark ? Colors.dark.background : Colors.light.background;
  const textColor = isDark ? Colors.dark.text : Colors.light.text;
  const cardBackground = isDark ? '#1C1C1E' : '#FFFFFF';
  const borderColor = isDark ? Colors.dark.border : Colors.light.border;

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText type="title" style={[styles.title, { color: textColor }]}>
            Bem-vindo ao App
          </ThemedText>
          <ThemedText style={[styles.subtitle, { color: textColor }]}>
            Sua jornada começa aqui
          </ThemedText>
        </View>

        <View style={[styles.card, { backgroundColor: cardBackground, borderColor }]}>
          <ThemedText type="title" style={styles.cardTitle}>📱 Recursos</ThemedText>
          <View style={styles.featureItem}>
            <ThemedText>• Navegação por abas</ThemedText>
          </View>
          <View style={styles.featureItem}>
            <ThemedText>• Tema claro/escuro</ThemedText>
          </View>
          <View style={styles.featureItem}>
            <ThemedText>• Interface responsiva</ThemedText>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: cardBackground, borderColor }]}>
          <ThemedText type="title" style={styles.cardTitle}>🚀 Começando</ThemedText>
          <ThemedText style={styles.cardText}>
            Explore o aplicativo usando o menu de navegação na parte inferior da tela.
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 48, // Espaço extra para a barra de navegação
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8,
    textAlign: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
  },
  featureItem: {
    marginBottom: 8,
    marginLeft: 8,
  },
});
