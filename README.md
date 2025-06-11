# ScamSkibidi - Anti-Scam Awareness App

A mobile application built with Expo and React Native that helps users learn about, detect, and report online scams and misinformation.

## Features

- User authentication (login/signup)
- Community feed for sharing scam encounters
- Various verification tools:
  - General fact checker
  - Website misinformation checker
  - Unknown phone number checker
  - Suspicious text message checker
  - Suspicious link checker
- Information hub with educational resources
- User profiles with post history

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ScamSkibidi2
```

2. Install dependencies:
```bash
npm install
```

3. Create a Firebase project and add your configuration:
   - Go to the Firebase Console
   - Create a new project
   - Enable Authentication and Firestore
   - Copy your Firebase config
   - Replace the config in `App.js`

4. Start the development server:
```bash
npm start
```

5. Run on your preferred platform:
   - Press `i` for iOS
   - Press `a` for Android
   - Scan QR code with Expo Go app for physical device

## Project Structure

```
src/
├── assets/         # Images and other static assets
├── components/     # Reusable components
├── screens/        # Screen components
│   ├── auth/      # Authentication screens
│   └── main/      # Main app screens
└── utils/         # Utility functions and helpers
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
