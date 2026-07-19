import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const languagePagesPlugin = () => ({
  name: 'claimo-language-pages',
  // writeBundle läuft nur nach einer erfolgreich geschriebenen Ausgabe.
  // closeBundle wurde auch nach einem vorherigen Rollup-Fehler ausgeführt und
  // hat diesen mit einem irreführenden ENOENT für dist/index.html verdeckt.
  writeBundle() {
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
        nutzungsbedingungen: resolve(__dirname, 'nutzungsbedingungen.html'),
        // App legal pages — separate placeholders, kept apart from the website texts.
        appImpressum: resolve(__dirname, 'app/impressum.html'),
        appDatenschutz: resolve(__dirname, 'app/datenschutz.html'),
        appNutzungsbedingungen: resolve(__dirname, 'app/nutzungsbedingungen.html'),
        appWiderrufsbelehrung: resolve(__dirname, 'app/widerrufsbelehrung.html'),
      },
    },
  },
});
