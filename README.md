# Futsal ISM

A React Native (Expo) application for managing futsal teams and players.

## Features

- **Dashboard**: Main navigation hub with quick stats and navigation buttons
- **Team Management**: 
  - List all teams with filtering by category
  - View team details with staff and players
  - Add new teams with form
- **Player Management**:
  - List all players with advanced filtering (team, position, attributes)
  - View detailed player information with attributes
  - Search and filter players

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Web (Recommended for development)
```bash
npm run web
```

#### Android
```bash
npm run android
```
**Note**: Requires Android SDK and ADB to be properly configured.

#### iOS
```bash
npm run ios
```
**Note**: Requires macOS and Xcode.

## Troubleshooting

### ADB Not Found Error
If you encounter "adb is not recognized" error when running on Android:

1. **Install Android Studio** and Android SDK
2. **Add platform-tools to PATH**:
   - Windows: Add `%LOCALAPPDATA%\Android\Sdk\platform-tools` to PATH
   - macOS/Linux: Add `~/Library/Android/sdk/platform-tools` to PATH

3. **Alternative**: Use web development instead:
   ```bash
   npm run web
   ```

### Navigation Errors
If you see "Couldn't find a navigation object" error:
1. Make sure all dependencies are installed: `npm install`
2. Clear cache: `npx expo start --clear`
3. Restart the development server

## Project Structure

```
futsal-ism/
├── screens/
│   ├── DashboardScreen.tsx          # Main dashboard
│   ├── teams/
│   │   ├── TeamListScreen.tsx       # List of teams
│   │   ├── TeamDetailScreen.tsx     # Team details
│   │   └── AddTeamScreen.tsx        # Add team form
│   └── players/
│       ├── PlayerListScreen.tsx      # List of players
│       └── PlayerDetailScreen.tsx    # Player details
├── navigation/
│   └── AppNavigator.tsx             # Navigation setup
└── App.tsx                          # Main app component
```

## Development

The app uses:
- **React Navigation** for screen navigation
- **TypeScript** for type safety
- **Expo** for cross-platform development
- **React Native** for UI components

## Features Overview

### Dashboard
- Quick stats display
- Navigation buttons to all sections
- Clean, modern UI

### Team Management
- View teams by category (Primeira Liga, Segunda Liga, Distrital)
- Team details with staff and players
- Add new teams with comprehensive form

### Player Management
- Advanced filtering by team, position, and attributes
- Search functionality
- Detailed player profiles with attributes
- Color-coded attribute scores

All data is currently hardcoded for demonstration purposes. 