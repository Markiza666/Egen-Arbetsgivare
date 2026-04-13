import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';
import type { InlineConfig } from 'vitest/node';

// Created type here to avoid TS error when adding test config to Vite config
interface VitestConfigExport extends UserConfig {
  test?: InlineConfig;
}

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'v8',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/*.svg',
                '**/*.scss',
                'src/main.tsx',
                'src/vite-env.d.ts'
            ]
        },
    },
} as VitestConfigExport);