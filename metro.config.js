const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add CJS support
defaultConfig.resolver.sourceExts.push('cjs');

// Disable package exports resolution
defaultConfig.resolver.unstable_enablePackageExports = false;

// Add additional configurations for Firebase
defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'db', 'sqlite'];
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'mjs'];

module.exports = defaultConfig; 