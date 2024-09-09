import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rudavoFF',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: "none" // Vous pouvez aussi essayer "body" ou "ionic" selon vos besoins
    }
  }
};

export default config;
