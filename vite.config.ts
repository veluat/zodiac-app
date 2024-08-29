import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: ['module', 'main'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: 'telegram-web-app-api',
        replacement: path.resolve(__dirname, 'node_modules/telegram-web-app-api/dist/index.js'),
      },
    ],
  },
})
