# Misinformation Defense App

A mobile application designed to enhance awareness and defense against misinformation and cyberthreats. The app helps users learn, detect, report, and counter online scams through various tools and community features.

## Features

1. **Community Feed**
   - Share and view real-world scam encounters
   - Learn from others' experiences
   - Community-driven awareness

2. **Verification Tools**
   - AI-powered fact checker
   - Website credibility analyzer
   - Phone number authenticity checker
   - Text message scam detector
   - Suspicious link scanner

3. **Information Hub**
   - Educational resources
   - Best practices
   - Video tutorials
   - Latest scam trends

4. **User Profiles**
   - Personal post history
   - Contribution tracking
   - Profile customization

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)
- Firebase account and project

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/misinformation-defense-app.git
   cd misinformation-defense-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a Firebase project and download the configuration:
   - Go to the Firebase Console
   - Create a new project
   - Add an app (iOS/Android)
   - Download the configuration file
   - Place it in the appropriate location

4. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add your Firebase configuration:
     ```
     FIREBASE_API_KEY=your_api_key
     FIREBASE_AUTH_DOMAIN=your_auth_domain
     FIREBASE_PROJECT_ID=your_project_id
     FIREBASE_STORAGE_BUCKET=your_storage_bucket
     FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     FIREBASE_APP_ID=your_app_id
     ```

5. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

6. Run on your desired platform:
   ```bash
   # For iOS
   npm run ios
   # or
   yarn ios

   # For Android
   npm run android
   # or
   yarn android
   ```

## Project Structure

```
misinformation-defense-app/
├── src/
│   ├── components/       # Reusable UI components
│   ├── navigation/       # Navigation configuration
│   ├── screens/         # Screen components
│   │   ├── auth/        # Authentication screens
│   │   └── checkers/    # Verification tool screens
│   ├── services/        # API and Firebase services
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── assets/              # Images, fonts, etc.
└── App.tsx             # Root component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/)
- [React Navigation](https://reactnavigation.org/) 