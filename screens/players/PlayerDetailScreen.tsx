import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type PlayerDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PlayerDetail'>;
type PlayerDetailScreenRouteProp = RouteProp<RootStackParamList, 'PlayerDetail'>;

interface Attribute {
  id: string;
  name: string;
  value: string;
  category: string;
  color: string;
}

interface PlayerData {
  id: string;
  name: string;
  position: string;
  birthday: string;
  number: string;
  team: string;
  attributes: Attribute[];
}

const PlayerDetailScreen: React.FC = () => {
  const navigation = useNavigation<PlayerDetailScreenNavigationProp>();
  const route = useRoute<PlayerDetailScreenRouteProp>();
  const { playerId } = route.params || {};

  // Hardcoded players data
  const playersData: Record<string, PlayerData> = {
    '1': {
      id: '1',
      name: 'Rui Pedro',
      position: 'Guarda-redes',
      birthday: '15 de Março de 1995',
      number: '1',
      team: 'Quinta Sobrado',
      attributes: [
        // Physical Attributes
        { id: '1', name: 'Altura', value: '1.85m', category: 'Físico', color: '#FF6B6B' },
        { id: '2', name: 'Peso', value: '78kg', category: 'Físico', color: '#FF6B6B' },
        { id: '3', name: 'Velocidade', value: '7/10', category: 'Físico', color: '#FF6B6B' },
        { id: '4', name: 'Resistência', value: '8/10', category: 'Físico', color: '#FF6B6B' },
        { id: '5', name: 'Agilidade', value: '9/10', category: 'Físico', color: '#FF6B6B' },
        
        // Technical Attributes
        { id: '6', name: 'Reflexos', value: '9/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '7', name: 'Posicionamento', value: '8/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '8', name: 'Saída da baliza', value: '7/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '9', name: 'Jogo com os pés', value: '6/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '10', name: 'Defesa de penáltis', value: '8/10', category: 'Técnico', color: '#4ECDC4' },
        
        // Mental Attributes
        { id: '11', name: 'Concentração', value: '9/10', category: 'Mental', color: '#45B7D1' },
        { id: '12', name: 'Liderança', value: '8/10', category: 'Mental', color: '#45B7D1' },
        { id: '13', name: 'Decisão', value: '8/10', category: 'Mental', color: '#45B7D1' },
        { id: '14', name: 'Coragem', value: '9/10', category: 'Mental', color: '#45B7D1' },
        { id: '15', name: 'Comunicação', value: '7/10', category: 'Mental', color: '#45B7D1' },
        
        // Experience
        { id: '16', name: 'Jogos disputados', value: '156', category: 'Experiência', color: '#FFE66D' },
        { id: '17', name: 'Títulos conquistados', value: '3', category: 'Experiência', color: '#FFE66D' },
        { id: '18', name: 'Anos de experiência', value: '8', category: 'Experiência', color: '#FFE66D' },
        { id: '19', name: 'Clubes anteriores', value: '2', category: 'Experiência', color: '#FFE66D' },
      ]
    },
    '2': {
      id: '2',
      name: 'Telmo Silva',
      position: 'Guarda-redes',
      birthday: '22 de Agosto de 1998',
      number: '12',
      team: 'Quinta Sobrado',
      attributes: [
        { id: '1', name: 'Altura', value: '1.82m', category: 'Físico', color: '#FF6B6B' },
        { id: '2', name: 'Peso', value: '75kg', category: 'Físico', color: '#FF6B6B' },
        { id: '3', name: 'Velocidade', value: '6/10', category: 'Físico', color: '#FF6B6B' },
        { id: '4', name: 'Resistência', value: '7/10', category: 'Físico', color: '#FF6B6B' },
        { id: '5', name: 'Agilidade', value: '7/10', category: 'Físico', color: '#FF6B6B' },
        
        { id: '6', name: 'Reflexos', value: '7/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '7', name: 'Posicionamento', value: '7/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '8', name: 'Saída da baliza', value: '6/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '9', name: 'Jogo com os pés', value: '5/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '10', name: 'Defesa de penáltis', value: '7/10', category: 'Técnico', color: '#4ECDC4' },
        
        { id: '11', name: 'Concentração', value: '6/10', category: 'Mental', color: '#45B7D1' },
        { id: '12', name: 'Liderança', value: '5/10', category: 'Mental', color: '#45B7D1' },
        { id: '13', name: 'Decisão', value: '6/10', category: 'Mental', color: '#45B7D1' },
        { id: '14', name: 'Coragem', value: '7/10', category: 'Mental', color: '#45B7D1' },
        { id: '15', name: 'Comunicação', value: '6/10', category: 'Mental', color: '#45B7D1' },
        
        { id: '16', name: 'Jogos disputados', value: '45', category: 'Experiência', color: '#FFE66D' },
        { id: '17', name: 'Títulos conquistados', value: '0', category: 'Experiência', color: '#FFE66D' },
        { id: '18', name: 'Anos de experiência', value: '3', category: 'Experiência', color: '#FFE66D' },
        { id: '19', name: 'Clubes anteriores', value: '1', category: 'Experiência', color: '#FFE66D' },
      ]
    },
    '12': {
      id: '12',
      name: 'Ihor Kovalenko',
      position: 'Pivot',
      birthday: '10 de Janeiro de 1993',
      number: '11',
      team: 'Quinta Sobrado',
      attributes: [
        { id: '1', name: 'Altura', value: '1.85m', category: 'Físico', color: '#FF6B6B' },
        { id: '2', name: 'Peso', value: '85kg', category: 'Físico', color: '#FF6B6B' },
        { id: '3', name: 'Velocidade', value: '8/10', category: 'Físico', color: '#FF6B6B' },
        { id: '4', name: 'Resistência', value: '9/10', category: 'Físico', color: '#FF6B6B' },
        { id: '5', name: 'Agilidade', value: '8/10', category: 'Físico', color: '#FF6B6B' },
        
        { id: '6', name: 'Finalização', value: '9/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '7', name: 'Controlo de bola', value: '8/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '8', name: 'Passe', value: '7/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '9', name: 'Drible', value: '8/10', category: 'Técnico', color: '#4ECDC4' },
        { id: '10', name: 'Remate', value: '9/10', category: 'Técnico', color: '#4ECDC4' },
        
        { id: '11', name: 'Concentração', value: '8/10', category: 'Mental', color: '#45B7D1' },
        { id: '12', name: 'Liderança', value: '9/10', category: 'Mental', color: '#45B7D1' },
        { id: '13', name: 'Decisão', value: '8/10', category: 'Mental', color: '#45B7D1' },
        { id: '14', name: 'Coragem', value: '9/10', category: 'Mental', color: '#45B7D1' },
        { id: '15', name: 'Comunicação', value: '8/10', category: 'Mental', color: '#45B7D1' },
        
        { id: '16', name: 'Jogos disputados', value: '234', category: 'Experiência', color: '#FFE66D' },
        { id: '17', name: 'Títulos conquistados', value: '5', category: 'Experiência', color: '#FFE66D' },
        { id: '18', name: 'Anos de experiência', value: '12', category: 'Experiência', color: '#FFE66D' },
        { id: '19', name: 'Clubes anteriores', value: '4', category: 'Experiência', color: '#FFE66D' },
      ]
    }
  };

  // Get player data based on ID, or use default if no ID provided
  const playerData = playerId ? playersData[playerId] : playersData['1'];
  
  const playerName = playerData.name;
  const playerPosition = playerData.position;
  const playerBirthday = playerData.birthday;
  const playerNumber = playerData.number;
  const playerTeam = playerData.team;
  const attributes = playerData.attributes;

  const groupAttributesByCategory = () => {
    const grouped = attributes.reduce((acc, attribute) => {
      if (!acc[attribute.category]) {
        acc[attribute.category] = [];
      }
      acc[attribute.category].push(attribute);
      return acc;
    }, {} as Record<string, Attribute[]>);
    
    return grouped;
  };

  const renderAttribute = (attribute: Attribute) => (
    <View key={attribute.id} style={[styles.attributeCard, { borderLeftColor: attribute.color }]}>
      <View style={styles.attributeInfo}>
        <Text style={styles.attributeName}>{attribute.name}</Text>
        <Text style={[styles.attributeValue, { color: attribute.color }]}>{attribute.value}</Text>
      </View>
    </View>
  );

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
            <View style={styles.playerNumberContainer}>
              <Text style={styles.playerNumber}>{playerNumber}</Text>
            </View>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>{playerName}</Text>
              <Text style={styles.playerPosition}>{playerPosition}</Text>
              <Text style={styles.playerBirthday}>{playerBirthday}</Text>
              <Text style={styles.playerTeam}>{playerTeam}</Text>
            </View>
          </View>
        </View>

        {/* Attributes Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atributos</Text>
          {Object.entries(groupAttributesByCategory()).map(([category, categoryAttributes]) => (
            <View key={category} style={styles.categoryGroup}>
              <Text style={styles.categoryTitle}>{category}</Text>
              <View style={styles.attributesContainer}>
                {categoryAttributes.map(renderAttribute)}
              </View>
            </View>
          ))}
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
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerNumberContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  playerNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  playerPosition: {
    fontSize: 18,
    color: '#e5e7eb',
    marginBottom: 4,
  },
  playerBirthday: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 2,
  },
  playerTeam: {
    fontSize: 14,
    color: '#cbd5e1',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 20,
  },
  categoryGroup: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
  },
  attributesContainer: {
    gap: 8,
  },
  attributeCard: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  attributeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  attributeName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  attributeValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlayerDetailScreen; 