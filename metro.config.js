/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
	resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
	transformer: {
		getTransformOptions: async () => ({
			transform: {
				experimentalImportSupport: false,
				inlineRequires: true,
			},
		}),
		babelTransformerPath: require.resolve("react-native-svg-transformer"),
	},
	resolver: {
		assetExts: ["bin", "txt", "jpg", "png", "ttf"],
		sourceExts: ["js", "json", "ts", "tsx", "jsx"],
	},
};

module.exports = mergeConfig(defaultConfig, config);
