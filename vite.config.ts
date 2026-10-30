import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
plugins: [react(), tailwindcss()],
build: {
target: 'es2022',
cssCodeSplit: true,
rollupOptions: {
input: {
main: resolve(__dirname, 'index.html'),
services: resolve(__dirname, 'services/index.html'),
pricing: resolve(__dirname, 'pricing/index.html'),
audit: resolve(__dirname, 'audit/index.html'),
book: resolve(__dirname, 'book/index.html'),
contact: resolve(__dirname, 'contact/index.html'),
privacy: resolve(__dirname, 'privacy/index.html'),
terms: resolve(__dirname, 'terms/index.html'),
},
output: {
manualChunks: {
'vendor-react': ['react', 'react-dom'],
'vendor-icons': ['lucide-react'],
},
},
},
},
});