# expo-version-checker

This project is built around this package <https://github.com/kimxogus/react-native-version-check> to run smoothly on expo.

## Getting started

- npm

```bash
npm install expo-version-checker
```

- yarn

```bash
yarn add expo-version-checker
```

## Usage

```javascript
import VersionCheck from 'expo-version-checker';

VersionCheck.getLatestVersion()
 .then(latestVersion => {
  console.log(latestVersion);
 });

VersionCheck.needUpdate()
.then((res) => {
  console.log(res);    // { currentVersion: 1.0.2, isNeeded: true, latestVersion: 1.0.4, storeUrl: IOS | Android Url }
  if (res.isNeeded) {
 // you can do whatever you want here open
 }
});

```

Full doc available at <https://github.com/kimxogus/react-native-version-check>
