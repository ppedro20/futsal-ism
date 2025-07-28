// Configuration file for Futsal ISM
// This file contains the actual configuration values for the application

export const config = {
  // App Configuration
  appName: 'Futsal ISM',
  appVersion: '1.0.0',
  
  // Supabase Configuration
  supabase: {
    url: 'https://iainxkkjkvwakhhmappy.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhaW54a2tqa3Z3YWtoaG1hcHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTEyMjEsImV4cCI6MjA2OTI4NzIyMX0.36hHFPR7m4lEWeOClnAg6L4OjbchYusbYna7-9KtIJY',
  },
  
  // API Configuration
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 10000,
  },
  
  // Feature Flags
  features: {
    enableAnalytics: false,
    enableDebugMode: true,
  },
  
  // App Settings
  settings: {
    defaultLanguage: 'pt',
    supportedLanguages: ['pt', 'en'],
    maxPlayersPerTeam: 16,
    maxTeamsPerLeague: 20,
  },
  
  // Database Configuration
  database: {
    // Supabase connection details
    projectId: 'iainxkkjkvwakhhmappy',
    region: 'auto', // Supabase automatically handles region
  },
};

// Helper function to get environment variables
export const getEnvVar = (key: string, defaultValue: string = ''): string => {
  return process.env[`EXPO_PUBLIC_${key}`] || defaultValue;
};

// Helper function to check if we're in development
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development' || __DEV__;
};

// Export Supabase configuration for easy access
export const supabaseConfig = {
  url: config.supabase.url,
  anonKey: config.supabase.anonKey,
}; 