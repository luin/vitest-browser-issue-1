import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      // Try commenting this line out:
      slowHijackESM: false,
      name: "chromium",
    },
  },
});
