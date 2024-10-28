import { resolve } from "path"; // Importiert die resolve Funktion aus dem path Modul
import { defineConfig } from "vite"; // Importiert die defineConfig Funktion aus dem vite Modul

export default defineConfig({
  // Exportiert die Konfiguration
  root: resolve(__dirname, "src"), // src als root

  build: {
    // Build Einstellungen
    outDir: resolve(__dirname, "dist"), // dist als outDir

    emptyOutDir: true, // Löscht den outDir vor dem Build
  },
});
