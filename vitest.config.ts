import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: "playwright",
      slowHijackESM: false,
      name: "chromium",
    },
  },
});
