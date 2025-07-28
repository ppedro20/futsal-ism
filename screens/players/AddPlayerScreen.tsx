import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type AddPlayerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddPlayer'>;

interface FormData {
  playerName: string;
  position: string;
  team: string;
  number: string;
  age: string;
  height: string;
  weight: string;
  physical: string;
  technical: string;
  mental: string;
  experience: string;
}

const AddPlayerScreen: React.FC = () => {
  const navigation = useNavigation<AddPlayerScreenNavigationProp>();
  
  const [formData, setFormData] = useState<FormData>({
    playerName: 'Novo Jogador',
    position: 'Ala',
    team: 'Quinta Sobrado',
    number: '15',
    age: '25',
    height: '1.75m',
    weight: '70kg',
    physical: '7',
    technical: '7',
    mental: '7',
    experience: '5',
  });

  const positions = [
    { label: 'Guarda-redes', value: 'Guarda-redes', color: '#FF6B6B' },
    { label: 'Fixo', value: 'Fixo', color: '#4ECDC4' },
    { label: 'Ala', value: 'Ala', color: '#45B7D1' },
    { label: 'Pivot', value: 'Pivot', color: '#FFE66D' },
  ];

  const teams = [
    { label: 'Quinta Sobrado', value: 'Quinta Sobrado' },
    { label: 'Benfica', value: 'Benfica' },
    { label: 'Sporting CP', value: 'Sporting CP' },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Validate form data
    if (!formData.playerName.trim() || !formData.team.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Show success message
    Alert.alert(
      'Sucesso!',
      'Jogador adicionado com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

  const renderInput = (label: string, field: keyof FormData, placeholder: string, required: boolean = false) => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>
        {label} {required && <Text style={styles.required}>*</Text>}
      </Text>
      <TextInput
        style={styles.textInput}
        value={formData[field]}
        onChangeText={(value) => handleInputChange(field, value)}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );

  const renderSelector = (label: string, field: keyof FormData, options: { label: string; value: string; color?: string }[], required: boolean = false) => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>
        {label} {required && <Text style={styles.required}>*</Text>}
      </Text>
      <View style={styles.selectorContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.selectorButton,
              {
                backgroundColor: formData[field] === option.value ? (option.color || '#1e3a8a') : '#f3f4f6',
                borderColor: option.color || '#1e3a8a',
              }
            ]}
            onPress={() => handleInputChange(field, option.value)}
          >
            <Text style={[
              styles.selectorButtonText,
              { color: formData[field] === option.value ? '#ffffff' : (option.color || '#1e3a8a') }
            ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
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
          <Text style={styles.headerTitle}>Adicionar Jogador</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Informações Básicas</Text>
          
          {renderInput('Nome do Jogador', 'playerName', 'Ex: João Silva', true)}
          {renderSelector('Posição', 'position', positions, true)}
          {renderSelector('Equipa', 'team', teams, true)}
          {renderInput('Número', 'number', 'Ex: 10')}
          {renderInput('Idade', 'age', 'Ex: 25')}
          
          <Text style={styles.sectionTitle}>Informações Físicas</Text>
          
          {renderInput('Altura', 'height', 'Ex: 1.75m')}
          {renderInput('Peso', 'weight', 'Ex: 70kg')}
          
          <Text style={styles.sectionTitle}>Atributos (1-10)</Text>
          
          {renderInput('Físico', 'physical', 'Ex: 7')}
          {renderInput('Técnico', 'technical', 'Ex: 7')}
          {renderInput('Mental', 'mental', 'Ex: 7')}
          {renderInput('Experiência', 'experience', 'Ex: 5')}

          {/* Preview Card */}
          <View style={styles.previewSection}>
            <Text style={styles.sectionTitle}>Pré-visualização</Text>
            <View style={[styles.previewCard, { borderLeftColor: positions.find(p => p.value === formData.position)?.color || '#6b7280' }]}>
              <View style={styles.previewHeader}>
                <View style={[styles.previewNumber, { backgroundColor: positions.find(p => p.value === formData.position)?.color || '#6b7280' }]}>
                  <Text style={styles.previewNumberText}>{formData.number}</Text>
                </View>
                <View style={styles.previewInfo}>
                  <Text style={styles.previewName}>{formData.playerName}</Text>
                  <Text style={styles.previewDetails}>
                    {formData.position} • {formData.team} • {formData.age} anos
                  </Text>
                  <Text style={styles.previewPhysical}>
                    {formData.height} • {formData.weight}
                  </Text>
                </View>
              </View>
              <View style={styles.previewAttributes}>
                <Text style={styles.previewAttribute}>Físico: {formData.physical}/10</Text>
                <Text style={styles.previewAttribute}>Técnico: {formData.technical}/10</Text>
                <Text style={styles.previewAttribute}>Mental: {formData.mental}/10</Text>
                <Text style={styles.previewAttribute}>Exp: {formData.experience}/10</Text>
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Adicionar Jogador</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginTop: 20,
    marginBottom: 12,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  required: {
    color: '#dc2626',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1f2937',
  },
  selectorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  selectorButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    minWidth: 100,
    alignItems: 'center',
  },
  selectorButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  previewSection: {
    marginTop: 20,
  },
  previewCard: {
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
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  previewNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  previewNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  previewInfo: {
    flex: 1,
  },
  previewName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  previewDetails: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
  },
  previewPhysical: {
    fontSize: 12,
    color: '#9ca3af',
  },
  previewAttributes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previewAttribute: {
    fontSize: 12,
    color: '#6b7280',
  },
  submitButton: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddPlayerScreen; 