import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type PlayerListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayerList'>;

interface Player {
  id: string;
  name: string;
  position: string;
  team: string;
  number: string;
  age: number;
  height: string;
  weight: string;
  attributes: {
    physical: number;
    technical: number;
    mental: number;
    experience: number;
  };
  color: string;
}

const PlayerListScreen: React.FC = () => {
  const navigation = useNavigation<PlayerListScreenNavigationProp>();
  
  const [searchText, setSearchText] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [selectedAttribute, setSelectedAttribute] = useState<string>('all');

  // Hardcoded players data
  const players: Player[] = [
    {
      id: '1',
      name: 'Rui Pedro',
      position: 'Guarda-redes',
      team: 'Quinta Sobrado',
      number: '1',
      age: 29,
      height: '1.85m',
      weight: '78kg',
      attributes: { physical: 8, technical: 9, mental: 8, experience: 8 },
      color: '#FF6B6B'
    },
    {
      id: '2',
      name: 'Telmo Silva',
      position: 'Guarda-redes',
      team: 'Quinta Sobrado',
      number: '12',
      age: 25,
      height: '1.82m',
      weight: '75kg',
      attributes: { physical: 7, technical: 7, mental: 6, experience: 5 },
      color: '#FF6B6B'
    },
    {
      id: '3',
      name: 'Tomás Videira',
      position: 'Fixo',
      team: 'Quinta Sobrado',
      number: '2',
      age: 27,
      height: '1.78m',
      weight: '80kg',
      attributes: { physical: 8, technical: 8, mental: 7, experience: 6 },
      color: '#4ECDC4'
    },
    {
      id: '4',
      name: 'Pedro Santos',
      position: 'Fixo',
      team: 'Benfica',
      number: '3',
      age: 24,
      height: '1.80m',
      weight: '82kg',
      attributes: { physical: 9, technical: 8, mental: 8, experience: 5 },
      color: '#4ECDC4'
    },
    {
      id: '5',
      name: 'Gonçalo Pinheiro',
      position: 'Fixo',
      team: 'Quinta Sobrado',
      number: '4',
      age: 26,
      height: '1.79m',
      weight: '79kg',
      attributes: { physical: 7, technical: 7, mental: 6, experience: 4 },
      color: '#4ECDC4'
    },
    {
      id: '6',
      name: 'Ricky Costa',
      position: 'Ala',
      team: 'Quinta Sobrado',
      number: '5',
      age: 23,
      height: '1.75m',
      weight: '70kg',
      attributes: { physical: 9, technical: 8, mental: 7, experience: 4 },
      color: '#45B7D1'
    },
    {
      id: '7',
      name: 'Rodrigo Raposo',
      position: 'Ala',
      team: 'Quinta Sobrado',
      number: '6',
      age: 28,
      height: '1.77m',
      weight: '73kg',
      attributes: { physical: 8, technical: 9, mental: 8, experience: 7 },
      color: '#45B7D1'
    },
    {
      id: '8',
      name: 'Tiago Magalhães',
      position: 'Ala',
      team: 'Sporting CP',
      number: '7',
      age: 25,
      height: '1.76m',
      weight: '71kg',
      attributes: { physical: 9, technical: 8, mental: 7, experience: 5 },
      color: '#45B7D1'
    },
    {
      id: '9',
      name: 'Osvaldo Pereira',
      position: 'Ala',
      team: 'Quinta Sobrado',
      number: '8',
      age: 24,
      height: '1.74m',
      weight: '69kg',
      attributes: { physical: 8, technical: 7, mental: 6, experience: 3 },
      color: '#45B7D1'
    },
    {
      id: '10',
      name: 'Pedro Costa',
      position: 'Ala',
      team: 'Benfica',
      number: '9',
      age: 26,
      height: '1.78m',
      weight: '72kg',
      attributes: { physical: 8, technical: 9, mental: 8, experience: 6 },
      color: '#45B7D1'
    },
    {
      id: '11',
      name: 'Gonçalo Silva',
      position: 'Ala',
      team: 'Quinta Sobrado',
      number: '10',
      age: 22,
      height: '1.73m',
      weight: '68kg',
      attributes: { physical: 7, technical: 6, mental: 5, experience: 2 },
      color: '#45B7D1'
    },
    {
      id: '12',
      name: 'Ihor Kovalenko',
      position: 'Pivot',
      team: 'Quinta Sobrado',
      number: '11',
      age: 30,
      height: '1.85m',
      weight: '85kg',
      attributes: { physical: 9, technical: 9, mental: 8, experience: 9 },
      color: '#FFE66D'
    },
    {
      id: '13',
      name: 'Pirika Santos',
      position: 'Pivot',
      team: 'Sporting CP',
      number: '13',
      age: 27,
      height: '1.83m',
      weight: '83kg',
      attributes: { physical: 8, technical: 8, mental: 7, experience: 6 },
      color: '#FFE66D'
    },
    {
      id: '14',
      name: 'Moita Silva',
      position: 'Pivot',
      team: 'Quinta Sobrado',
      number: '14',
      age: 29,
      height: '1.87m',
      weight: '88kg',
      attributes: { physical: 9, technical: 7, mental: 6, experience: 7 },
      color: '#FFE66D'
    },
  ];

  const teams = ['all', ...Array.from(new Set(players.map(p => p.team)))];
  const positions = ['all', ...Array.from(new Set(players.map(p => p.position)))];
  const attributes = [
    { key: 'all', label: 'Todos' },
    { key: 'physical', label: 'Físico' },
    { key: 'technical', label: 'Técnico' },
    { key: 'mental', label: 'Mental' },
    { key: 'experience', label: 'Experiência' }
  ];

  const filterPlayers = () => {
    return players.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchText.toLowerCase()) ||
                           player.team.toLowerCase().includes(searchText.toLowerCase());
      const matchesTeam = selectedTeam === 'all' || player.team === selectedTeam;
      const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition;
      
      let matchesAttribute = true;
      if (selectedAttribute !== 'all') {
        const attributeValue = player.attributes[selectedAttribute as keyof typeof player.attributes];
        matchesAttribute = attributeValue >= 7; // Filter players with 7+ in selected attribute
      }

      return matchesSearch && matchesTeam && matchesPosition && matchesAttribute;
    });
  };

  const getAttributeColor = (value: number) => {
    if (value >= 9) return '#059669';
    if (value >= 7) return '#f59e0b';
    return '#dc2626';
  };

  const renderFilterButton = (title: string, value: string, selectedValue: string, onPress: (value: string) => void) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        { backgroundColor: selectedValue === value ? '#1e3a8a' : '#f3f4f6' }
      ]}
      onPress={() => onPress(value)}
    >
      <Text style={[
        styles.filterButtonText,
        { color: selectedValue === value ? '#ffffff' : '#374151' }
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const renderPlayer = (player: Player) => (
    <TouchableOpacity 
      key={player.id} 
      style={[styles.playerCard, { borderLeftColor: player.color }]}
      onPress={() => navigation.navigate('PlayerDetail', { playerId: player.id })}
    >
      <View style={styles.playerHeader}>
        <View style={[styles.playerNumber, { backgroundColor: player.color }]}>
          <Text style={styles.numberText}>{player.number}</Text>
        </View>
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerDetails}>
            {player.position} • {player.team} • {player.age} anos
          </Text>
          <Text style={styles.playerPhysical}>
            {player.height} • {player.weight}
          </Text>
        </View>
      </View>
      
      <View style={styles.attributesRow}>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeLabel}>Físico</Text>
          <Text style={[styles.attributeValue, { color: getAttributeColor(player.attributes.physical) }]}>
            {player.attributes.physical}/10
          </Text>
        </View>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeLabel}>Técnico</Text>
          <Text style={[styles.attributeValue, { color: getAttributeColor(player.attributes.technical) }]}>
            {player.attributes.technical}/10
          </Text>
        </View>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeLabel}>Mental</Text>
          <Text style={[styles.attributeValue, { color: getAttributeColor(player.attributes.mental) }]}>
            {player.attributes.mental}/10
          </Text>
        </View>
        <View style={styles.attributeItem}>
          <Text style={styles.attributeLabel}>Exp</Text>
          <Text style={[styles.attributeValue, { color: getAttributeColor(player.attributes.experience) }]}>
            {player.attributes.experience}/10
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const filteredPlayers = filterPlayers();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>← Voltar</Text>
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Jogadores</Text>
            <Text style={styles.headerSubtitle}>Lista de Jogadores</Text>
          </View>
        </View>

        {/* Add Button */}
        <View style={styles.addButtonContainer}>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddPlayer')}
          >
            <Text style={styles.addButtonText}>+ Adicionar Jogador</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Procurar jogador ou equipa..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Filters */}
        <View style={styles.filtersContainer}>
          <Text style={styles.filtersTitle}>Filtros</Text>
          
          {/* Team Filter */}
          <Text style={styles.filterSectionTitle}>Equipa</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
            {teams.map((team, index) => 
              <View key={`team-${team}-${index}`}>
                {renderFilterButton(
                  team === 'all' ? 'Todas' : team, 
                  team, 
                  selectedTeam, 
                  setSelectedTeam
                )}
              </View>
            )}
          </ScrollView>

          {/* Position Filter */}
          <Text style={styles.filterSectionTitle}>Posição</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
            {positions.map((position, index) => 
              <View key={`position-${position}-${index}`}>
                {renderFilterButton(
                  position === 'all' ? 'Todas' : position, 
                  position, 
                  selectedPosition, 
                  setSelectedPosition
                )}
              </View>
            )}
          </ScrollView>

          {/* Attribute Filter */}
          <Text style={styles.filterSectionTitle}>Atributo (7+)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
            {attributes.map((attr, index) => 
              <View key={`attr-${attr.key}-${index}`}>
                {renderFilterButton(
                  attr.label, 
                  attr.key, 
                  selectedAttribute, 
                  setSelectedAttribute
                )}
              </View>
            )}
          </ScrollView>
        </View>

        {/* Results */}
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>
            {filteredPlayers.length} jogador{filteredPlayers.length !== 1 ? 'es' : ''} encontrado{filteredPlayers.length !== 1 ? 's' : ''}
          </Text>
          <View style={styles.playersList}>
            {filteredPlayers.map(renderPlayer)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 20,
    zIndex: 1,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerContent: {
    flex: 1, // Takes available space for title and subtitle
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
  },
  addButtonContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#059669',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  addButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#059669',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  addButtonText: {
    color: '#059669',
    fontSize: 16,
    fontWeight: '600',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  searchInput: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#1f2937',
  },
  filtersContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  filtersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 16,
  },
  filterSectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginTop: 12,
    marginBottom: 8,
  },
  filterRow: {
    marginBottom: 12,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  resultsContainer: {
    padding: 16,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16,
  },
  playersList: {
    gap: 12,
  },
  playerCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  playerNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  playerDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  playerPhysical: {
    fontSize: 12,
    color: '#9ca3af',
  },
  attributesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attributeItem: {
    alignItems: 'center',
    flex: 1,
  },
  attributeLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  attributeValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default PlayerListScreen; 