import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // This enables 'vi', 'describe', etc. as globals if you want, 
        // but since you import them, it's extra safety.
        globals: true,
        environment: 'node',
        hookTimeout: 60000,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            // Exclude the entry point and types to get a fair 100% on logic
            exclude: [
                '**/index.ts',
                '**/server.ts',
                '**/types.ts',
                '**/*.test.ts',
            ],
        },
    },
});
