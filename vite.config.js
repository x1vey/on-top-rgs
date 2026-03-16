import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        join: resolve(__dirname, 'join.html'),
        membership: resolve(__dirname, 'membership.html'),
        plumber: resolve(__dirname, 'plumber-adelaide.html'),
        electrician: resolve(__dirname, 'electrician-adelaide.html'),
        gas: resolve(__dirname, 'gas.html'),
        roofing: resolve(__dirname, 'roofing.html'),
        trades: resolve(__dirname, 'trades.html'),
        bathrooms: resolve(__dirname, 'bathrooms.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
