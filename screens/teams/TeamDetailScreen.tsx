import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type TeamDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TeamDetail'>;

interface StaffMember {
  id: string;
  name: string;
  role: string;
  color: string;
}

interface Player {
  id: string;
  name: string;
  position: string;
  number: string;
  color: string;
}

const TeamDetailScreen: React.FC = () => {
  const navigation = useNavigation<TeamDetailScreenNavigationProp>();
  
  // Hardcoded futsal team data - Quinta Sobrado Futsal
  const teamName = "Quinta Sobrado Futsal";
  
  const staff: StaffMember[] = [
    { id: '1', name: 'João Santos', role: 'Treinador', color: '#FF6B35' },
    { id: '2', name: 'Miguel Silva', role: 'Treinador Guarda-redes', color: '#4ECDC4' },
    { id: '3', name: 'Diogo', role: 'Fitness Coach', color: '#45B7D1' },
  ];

  const players: Player[] = [
    { id: '1', name: 'Rui Pedro', position: 'Guarda-redes', number: '1', color: '#FF6B6B' },
    { id: '2', name: 'Telmo', position: 'Guarda-redes', number: '12', color: '#FF6B6B' },
    { id: '3', name: 'Tomás Videira', position: 'Fixo', number: '2', color: '#4ECDC4' },
    { id: '4', name: 'Pedro Pedro', position: 'Fixo', number: '3', color: '#4ECDC4' },
    { id: '5', name: 'Gonçalo Pinheiro', position: 'Fixo', number: '4', color: '#4ECDC4' },
    { id: '6', name: 'Ricky', position: 'Ala', number: '5', color: '#4ECDC4' },
    { id: '7', name: 'Rodrigo Raposo', position: 'Ala', number: '6', color: '#4ECDC4' },
    { id: '8', name: 'Tiago Magalhães', position: 'Ala', number: '7', color: '#45B7D1' },
    { id: '9', name: 'Osvaldo', position: 'Ala', number: '8', color: '#45B7D1' },
    { id: '10', name: 'Pedro Pereira', position: 'Ala', number: '9', color: '#45B7D1' },
    { id: '11', name: 'Gonçalo Costa', position: 'Ala', number: '10', color: '#45B7D1' },
    { id: '12', name: 'Ihor', position: 'Pivot', number: '11', color: '#FFE66D' },
    { id: '13', name: 'Pirika', position: 'Pivot', number: '13', color: '#FFE66D' },
    { id: '14', name: 'Moita', position: 'Pivot', number: '14', color: '#FFE66D' },
  ];

  const groupPlayersByPosition = () => {
    const grouped = players.reduce((acc, player) => {
      if (!acc[player.position]) {
        acc[player.position] = [];
      }
      acc[player.position].push(player);
      return acc;
    }, {} as Record<string, Player[]>);
    
    return grouped;
  };

  const renderStaffMember = (member: StaffMember) => (
    <View key={member.id} style={[styles.staffCard, { borderLeftColor: member.color }]}>
      <Text style={styles.staffName}>
        {member.name}
        <Text style={[styles.staffRole, { color: member.color }]}> • {member.role}</Text>
      </Text>
    </View>
  );

  const renderPlayer = (player: Player) => (
    <View key={player.id} style={[styles.playerCard, { borderLeftColor: player.color }]}>
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{player.name}</Text>
      </View>
      <View style={[styles.playerNumber, { backgroundColor: player.color }]}>
        <Text style={styles.numberText}>{player.number}</Text>
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
            <Text style={styles.teamName}>{teamName}</Text>
            <Text style={styles.teamInfo}>Pavilhão Gimnodesportivo Quinta Sobrado • Batalha</Text>
          </View>
        </View>

        {/* Staff Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Staff</Text>
          <View style={styles.staffContainer}>
            {staff.map(renderStaffMember)}
          </View>
        </View>

        {/* Players Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Players</Text>
          {Object.entries(groupPlayersByPosition()).map(([position, positionPlayers]) => (
            <View key={position} style={styles.positionGroup}>
              <Text style={styles.positionTitle}>{position}s</Text>
              <View style={styles.playersContainer}>
                {positionPlayers.map(renderPlayer)}
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
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  backButton: {
    marginBottom: 12,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerContent: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  teamInfo: {
    fontSize: 14,
    color: '#e5e7eb',
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 16,
  },
  staffContainer: {
    gap: 12,
  },
  staffCard: {
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
  staffName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  staffRole: {
    fontSize: 14,
    fontWeight: '500',
  },
  playersContainer: {
    gap: 12,
  },
  playerCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  playerPosition: {
    fontSize: 14,
    color: '#6b7280',
  },
  playerNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  positionGroup: {
    marginBottom: 20,
  },
  positionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
});

export default TeamDetailScreen; 