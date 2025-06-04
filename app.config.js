export default {
  expo: {
    name: 'ScamSkibidi',
    slug: 'scam-skibidi',
    version: '1.0.0',
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.tsg.scamskibidi'
    },
    android: {
      adaptiveIcon: {
        backgroundColor: '#ffffff'
      },
      package: 'com.tsg.scamskibidi'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      eas: {
        projectId: 'your-project-id'
      }
    }
  }
}; 