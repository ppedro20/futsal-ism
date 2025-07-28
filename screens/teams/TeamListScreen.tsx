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

type TeamListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TeamList'>;

interface Team {
  id: string;
  name: string;
  category: string;
  color: string;
  location: string;
  founded: string;
  players: number;
}

const TeamListScreen: React.FC = () => {
  const navigation = useNavigation<TeamListScreenNavigationProp>();
  
  // Hardcoded teams data
  const appName = "Futsal ISM";
  
  const teams: Team[] = [
    { 
      id: '1', 
      name: 'Quinta Sobrado', 
      category: 'Distrital', 
      color: '#1e3a8a',
      location: 'Batalha',
      founded: '1976',
      players: 14
    },
    { 
      id: '2', 
      name: 'Benfica', 
      category: 'Primeira Liga', 
      color: '#dc2626',
      location: 'Lisboa',
      founded: '1904',
      players: 16
    },
    { 
      id: '3', 
      name: 'Sporting CP', 
      category: 'Primeira Liga', 
      color: '#059669',
      location: 'Lisboa',
      founded: '1906',
      players: 15
    },
    { 
      id: '4', 
      name: 'FC Porto', 
      category: 'Primeira Liga', 
      color: '#1e40af',
      location: 'Porto',
      founded: '1893',
      players: 16
    },
    { 
      id: '5', 
      name: 'SC Braga', 
      category: 'Primeira Liga', 
      color: '#dc2626',
      location: 'Braga',
      founded: '1921',
      players: 14
    },
    { 
      id: '6', 
      name: 'Leões Porto Salvo', 
      category: 'Segunda Liga', 
      color: '#7c3aed',
      location: 'Oeiras',
      founded: '1980',
      players: 12
    },
    { 
      id: '7', 
      name: 'Modicus', 
      category: 'Segunda Liga', 
      color: '#059669',
      location: 'Porto',
      founded: '1995',
      players: 13
    },
    { 
      id: '8', 
      name: 'Burinhosa', 
      category: 'Segunda Liga', 
      color: '#1e40af',
      location: 'Leiria',
      founded: '1985',
      players: 11
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Primeira Liga':
        return '#1e3a8a';
      case 'Segunda Liga':
        return '#059669';
      case 'Distrital':
        return '#7c3aed';
      default:
        return '#6b7280';
    }
  };

  const renderTeam = (team: Team) => (
    <TouchableOpacity key={team.id} style={[styles.teamCard, { borderLeftColor: team.color }]}>
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{team.name}</Text>
        <Text style={styles.teamLocation}>{team.location}</Text>
      </View>
      <View style={styles.teamDetails}>
        <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(team.category) }]}>
          <Text style={styles.categoryText}>{team.category}</Text>
        </View>
        <Text style={styles.teamStats}>
          {team.players} jogadores • Fundado {team.founded}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const groupTeamsByCategory = () => {
    const grouped = teams.reduce((acc, team) => {
      if (!acc[team.category]) {
        acc[team.category] = [];
      }
      acc[team.category].push(team);
      return acc;
    }, {} as Record<string, Team[]>);
    
    return grouped;
  };

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
          <Text style={styles.appName}>{appName}</Text>
          <Text style={styles.appSubtitle}>Gestão de Equipas de Futsal</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('AddTeam')}
          >
            <Text style={styles.addButtonText}>+ Adicionar Equipa</Text>
          </TouchableOpacity>
        </View>

        {/* Teams Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipas</Text>
          {Object.entries(groupTeamsByCategory()).map(([category, categoryTeams]) => (
            <View key={category} style={styles.categoryGroup}>
              <Text style={[styles.categoryTitle, { color: getCategoryColor(category) }]}>
                {category}
              </Text>
              <View style={styles.teamsContainer}>
                {categoryTeams.map(renderTeam)}
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
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 16,
    top: 24,
    zIndex: 1,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
    textAlign: 'center',
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
    marginBottom: 12,
  },
  teamsContainer: {
    gap: 12,
  },
  teamCard: {
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
  teamInfo: {
    marginBottom: 8,
  },
  teamName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  teamLocation: {
    fontSize: 14,
    color: '#6b7280',
  },
  teamDetails: {
    alignItems: 'flex-start',
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  teamStats: {
    fontSize: 12,
    color: '#6b7280',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#059669',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TeamListScreen; 