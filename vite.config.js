import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Chip-Dale/', // <-- Это скажет Vite, как правильно собирать пути к картинкам и скриптам
})