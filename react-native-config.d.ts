declare module 'react-native-config' {
  export interface NativeConfig {
    AES_SECRET_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
