import CryptoJS from 'react-native-crypto-js';

// Replace with your actual key (store securely on the frontend)
const SECRET_KEY = 'e6b8b3beea7e92f3e66a53ed08da57bd';

export const encryptMessage = (message: string) => {
  const encrypted = CryptoJS.AES.encrypt(message, SECRET_KEY).toString();
  return encrypted;
};

export function decryptMessage(ciphertext: string) {
  const decrypted = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY).toString(
    CryptoJS.enc.Utf8,
  );
  return decrypted;
}
