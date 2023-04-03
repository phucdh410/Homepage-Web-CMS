import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const _env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@/others': fileURLToPath(
          new URL('./src/common/components/others/index.ts', import.meta.url),
        ),
        '@/errors': fileURLToPath(
          new URL('./src/common/components/errors/index.ts', import.meta.url),
        ),
        '@/controls': fileURLToPath(
          new URL('./src/common/components/controls/index.ts', import.meta.url),
        ),
        '@/layouts': fileURLToPath(
          new URL('./src/common/components/layouts', import.meta.url),
        ),
        '@/modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
        '@/funcs': fileURLToPath(
          new URL('./src/utils/funcs/index.ts', import.meta.url),
        ),
        '@/apis': fileURLToPath(new URL('./src/apis', import.meta.url)),
        '@/axios': fileURLToPath(new URL('./src/utils/axios', import.meta.url)),
        '@/slices': fileURLToPath(
          new URL('./src/redux/slices', import.meta.url),
        ),
        '@/redux': fileURLToPath(
          new URL('./src/redux/index.ts', import.meta.url),
        ),
        '@/routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
        '@/constants': fileURLToPath(
          new URL('./src/common/constants', import.meta.url),
        ),
        '@/assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api': _env.VITE_API_URL,
      },
    },
    build: {
      assetsDir: 'static',
      rollupOptions: {
        output: {
          chunkFileNames: '[hash].chunk.js',
          assetFileNames: '[hash].chunk.[ext]',
        },
      },
      chunkSizeWarningLimit: 1000,
      // manifest: true,
    },
  };
});
