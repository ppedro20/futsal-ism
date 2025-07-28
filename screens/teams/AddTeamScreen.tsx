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

type AddTeamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddTeam'>;

interface FormData {
  teamName: string;
  category: string;
  location: string;
  founded: string;
  venue: string;
  capacity: string;
  description: string;
}

const AddTeamScreen: React.FC = () => {
  const navigation = useNavigation<AddTeamScreenNavigationProp>();
  
  const [formData, setFormData] = useState<FormData>({
    teamName: 'Nova Equipa Futsal',
    category: 'Distrital',
    location: 'Lisboa',
    founded: '2024',
    venue: 'Pavilhão Municipal',
    capacity: '500',
    description: 'Equipa de futsal recém-criada para competições distritais.',
  });

  const categories = [
    { label: 'Primeira Liga', value: 'Primeira Liga', color: '#1e3a8a' },
    { label: 'Segunda Liga', value: 'Segunda Liga', color: '#059669' },
    { label: 'Distrital', value: 'Distrital', color: '#7c3aed' },
    { label: 'Regional', value: 'Regional', color: '#f59e0b' },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Validate form data
    if (!formData.teamName.trim() || !formData.location.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Show success message
    Alert.alert(
      'Sucesso!',
      'Equipa adicionada com sucesso!',
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

  const renderCategorySelector = () => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>
        Categoria <Text style={styles.required}>*</Text>
      </Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.value}
            style={[
              styles.categoryButton,
              {
                backgroundColor: formData.category === category.value ? category.color : '#f3f4f6',
                borderColor: category.color,
              }
            ]}
            onPress={() => handleInputChange('category', category.value)}
          >
            <Text style={[
              styles.categoryButtonText,
              { color: formData.category === category.value ? '#ffffff' : category.color }
            ]}>
              {category.label}
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
          <Text style={styles.headerTitle}>Adicionar Equipa</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Informações da Equipa</Text>
          
          {renderInput('Nome da Equipa', 'teamName', 'Ex: Sporting CP', true)}
          {renderCategorySelector()}
          {renderInput('Localização', 'location', 'Ex: Lisboa', true)}
          {renderInput('Ano de Fundação', 'founded', 'Ex: 1906')}
          
          <Text style={styles.sectionTitle}>Informações do Estádio</Text>
          
          {renderInput('Nome do Pavilhão', 'venue', 'Ex: Pavilhão João Rocha')}
          {renderInput('Capacidade', 'capacity', 'Ex: 3000')}
          
          <Text style={styles.sectionTitle}>Descrição</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Descrição da Equipa</Text>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={formData.description}
              onChangeText={(value) => handleInputChange('description', value)}
              placeholder="Descreva a equipa..."
              placeholderTextColor="#9ca3af"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          {/* Preview Card */}
          <View style={styles.previewSection}>
            <Text style={styles.sectionTitle}>Pré-visualização</Text>
            <View style={[styles.previewCard, { borderLeftColor: categories.find(c => c.value === formData.category)?.color || '#6b7280' }]}>
              <Text style={styles.previewTeamName}>{formData.teamName}</Text>
              <Text style={styles.previewLocation}>{formData.location}</Text>
              <View style={styles.previewDetails}>
                <View style={[styles.previewBadge, { backgroundColor: categories.find(c => c.value === formData.category)?.color || '#6b7280' }]}>
                  <Text style={styles.previewBadgeText}>{formData.category}</Text>
                </View>
                <Text style={styles.previewStats}>
                  Fundado {formData.founded} • {formData.venue}
                </Text>
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Adicionar Equipa</Text>
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    minWidth: 100,
    alignItems: 'center',
  },
  categoryButtonText: {
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
  previewTeamName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  previewLocation: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  previewDetails: {
    alignItems: 'flex-start',
  },
  previewBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  previewBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  previewStats: {
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

export default AddTeamScreen; 