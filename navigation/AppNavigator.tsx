import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardScreen from '../screens/DashboardScreen';
import TeamListScreen from '../screens/teams/TeamListScreen';
import TeamDetailScreen from '../screens/teams/TeamDetailScreen';
import PlayerDetailScreen from '../screens/players/PlayerDetailScreen';
import PlayerListScreen from '../screens/players/PlayerListScreen';
import AddTeamScreen from '../screens/teams/AddTeamScreen';
import AddPlayerScreen from '../screens/players/AddPlayerScreen';

export type RootStackParamList = {
  Dashboard: undefined;
  TeamList: undefined;
  TeamDetail: undefined;
  PlayerDetail: { playerId?: string };
  PlayerList: undefined;
  AddTeam: undefined;
  AddPlayer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1e3a8a',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="TeamList" 
          component={TeamListScreen}
          options={{ 
            title: 'Equipas',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="TeamDetail" 
          component={TeamDetailScreen}
          options={{ 
            title: 'Detalhes da Equipa',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="PlayerDetail" 
          component={PlayerDetailScreen}
          options={{ 
            title: 'Detalhes do Jogador',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="PlayerList" 
          component={PlayerListScreen}
          options={{ 
            title: 'Lista de Jogadores',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="AddTeam" 
          component={AddTeamScreen}
          options={{ 
            title: 'Adicionar Equipa',
            headerShown: false 
          }}
        />
        <Stack.Screen 
          name="AddPlayer" 
          component={AddPlayerScreen}
          options={{ 
            title: 'Adicionar Jogador',
            headerShown: false 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 