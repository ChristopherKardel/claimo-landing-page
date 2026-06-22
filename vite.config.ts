import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const languagePagesPlugin = () => ({
  name: 'claimo-language-pages',
  closeBundle() {
    const outputDirectory = resolve(__dirname, 'dist');
    const rootPage = resolve(outputDirectory, 'index.html');

    for (const language of ['de', 'en']) {
      const languageDirectory = resolve(outputDirectory, language);
      mkdirSync(languageDirectory, { recursive: true });
      copyFileSync(rootPage, resolve(languageDirectory, 'index.html'));
    }
  },
});

export default defineConfig({
  base: '/',
  plugins: [react(), languagePagesPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        impressum: resolve(__dirname, 'impressum.html'),
        datenschutz: resolve(__dirname, 'datenschutz.html'),
      },
    },
  },
});
