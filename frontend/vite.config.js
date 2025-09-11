import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  // theme:{
  //   gridTemplateColums:{
  //     'auto':'repeat(auto-fill,minmax(200px, 1fr))'
  //   }
  // },
  plugins: [react(),
    tailwindcss(),
  ],
  
})
