import {PermissionsAndroid} from 'react-native';
import {createLog} from '../context/LoggerContext';

async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'This app needs access to your device storage to save logs.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      createLog(new Date().toString());
    } else {
      console.log('Storage permission denied');
    }
  } catch (error) {
    console.error('Error requesting storage permission:', error);
  }
}

export {requestStoragePermission};
