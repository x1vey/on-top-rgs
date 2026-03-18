import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        airConditioning: resolve(__dirname, 'air-conditioning.html'),
        bathrooms: resolve(__dirname, 'bathrooms.html'),
        chimneyRebuilt: resolve(__dirname, 'chimney-rebuilt.html'),
        contact: resolve(__dirname, 'contact.html'),
        electrician: resolve(__dirname, 'electrician-adelaide.html'),
        fasciasSoffits: resolve(__dirname, 'fascias-soffits.html'),
        flatRoofs: resolve(__dirname, 'flat-roofs.html'),
        gas: resolve(__dirname, 'gas.html'),
        guttering: resolve(__dirname, 'guttering.html'),
        join: resolve(__dirname, 'join.html'),
        membership: resolve(__dirname, 'membership.html'),
        newRoofs: resolve(__dirname, 'new-roofs.html'),
        plumber: resolve(__dirname, 'plumber-adelaide.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        reviews: resolve(__dirname, 'reviews.html'),
        roofRepairs: resolve(__dirname, 'roof-repairs.html'),
        roofing: resolve(__dirname, 'roofing.html'),
        trades: resolve(__dirname, 'trades.html'),
      }
    }
  }
});
