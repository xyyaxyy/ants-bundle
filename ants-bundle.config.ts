import { defineConfig } from 'ants-bundle';

export default defineConfig({
  name: 'ants-bundle',
  target: 'node20.10',
  dts: {
    resolve: true,
    entry: './src/index.ts',
  },
});
