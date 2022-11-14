// @flow
import builder from 'react-native-version-check/builder';
import VersionInfo from './src/ExpoVersionInfo';

export default function(country){
	return builder(VersionInfo(country));
};
