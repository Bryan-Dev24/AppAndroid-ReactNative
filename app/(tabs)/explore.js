import { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, useColorScheme } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// Dados de exemplo para a lista de itens
const sampleItems = [
  { id: '1', title: 'Item 1', description: 'Descrição do item 1' },
  { id: '2', title: 'Item 2', description: 'Descrição do item 2' },
  { id: '3', title: 'Item 3', description: 'Descrição do item 3' },
  { id: '4', title: 'Item 4', description: 'Descrição do item 4' },
  { id: '5', title: 'Item 5', description: 'Descrição do item 5' },
];

/**
 * Tela de exploração com lista de itens e barra de pesquisa
 */
export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  
  const backgroundColor = isDark ? Colors.dark.background : Colors.light.background;
  const textColor = isDark ? Colors.dark.text : Colors.light.text;
  const cardBackground = isDark ? '#1C1C1E' : '#FFFFFF';
  const borderColor = isDark ? Colors.dark.border : Colors.light.border;
  const placeholderColor = isDark ? Colors.dark.placeholder : Colors.light.placeholder;
  
  // Filtrar itens com base na pesquisa
  const filteredItems = sampleItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={[styles.item, { backgroundColor: cardBackground, borderColor }]}>
      <ThemedText style={styles.itemTitle}>{item.title}</ThemedText>
      <ThemedText style={[styles.itemDescription, { color: placeholderColor }]}>
        {item.description}
      </ThemedText>
    </View>
  );

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <View style={[styles.searchContainer, { backgroundColor: cardBackground, borderColor }]}>
        <Ionicons 
          name="search" 
          size={20} 
          color={placeholderColor} 
          style={styles.searchIcon} 
        />
        <TextInput
          style={[styles.searchInput, { color: textColor }]}
          placeholder="Pesquisar..."
          placeholderTextColor={placeholderColor}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <ThemedText style={styles.emptyText}>
              Nenhum item encontrado
            </ThemedText>
          </View>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  listContent: {
    padding: 16,
    paddingTop: 0,
  },
  item: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    opacity: 0.8,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    opacity: 0.6,
    textAlign: 'center',
  },
});
