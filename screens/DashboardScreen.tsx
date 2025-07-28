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
import { RootStackParamList } from '../navigation/AppNavigator';

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

interface DashboardItem {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  screen: keyof RootStackParamList;
}

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const dashboardItems: DashboardItem[] = [
    { id: '1', title: 'Equipas', description: 'Gerir equipas de futsal', color: '#1e3a8a', icon: '⚽', screen: 'TeamList' },
    { id: '2', title: 'Jogadores', description: 'Ver lista de jogadores', color: '#dc2626', icon: '👥', screen: 'PlayerList' },
    { id: '3', title: 'Estatísticas', description: 'Análise de performance', color: '#6b7280', icon: '📊', screen: 'Dashboard' },
    { id: '4', title: 'Calendário', description: 'Jogos e eventos', color: '#8b5cf6', icon: '📅', screen: 'Dashboard' },
  ];

  const handleNavigation = (screen: keyof RootStackParamList) => {
    if (screen === 'PlayerDetail') {
      navigation.navigate('PlayerDetail', { playerId: '1' });
    } else {
      navigation.navigate(screen);
    }
  };

  const renderDashboardItem = (item: DashboardItem) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.dashboardCard, { borderLeftColor: item.color }]}
      onPress={() => handleNavigation(item.screen)}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardIcon}>{item.icon}</Text>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.appName}>Futsal ISM</Text>
          <Text style={styles.appSubtitle}>Gestão de Equipas de Futsal</Text>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Equipas</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Jogadores</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Ligas</Text>
          </View>
        </View>

        {/* Navigation Items */}
        <View style={styles.navigationContainer}>
          <Text style={styles.sectionTitle}>Dashboard</Text>
          <View style={styles.dashboardGrid}>
            {dashboardItems.map(renderDashboardItem)}
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
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#e5e7eb',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
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
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  navigationContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 16,
  },
  dashboardGrid: {
    gap: 12,
  },
  dashboardCard: {
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6b7280',
  },
});

export default DashboardScreen; 