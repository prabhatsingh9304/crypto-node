import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';


// Load environment variables from .env file
config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    // Your Vite configuration
    define: {
      'process.env': process.env
    }
})



