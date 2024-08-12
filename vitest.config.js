import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'istanbul',
      include: ['**'],
      reporter: ['text', 'json-summary', 'json'],
    },
  },
})
