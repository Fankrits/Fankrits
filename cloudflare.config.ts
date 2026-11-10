import { defineConfig } from "cf/config";

// Mirrors the live Worker `fankrits` (checked with `cf workers get fankrits`)
// so `cf deploy` does not see the remote settings as deletions.
export default defineConfig({
  worker: {
    name: "fankrits",
    compatibilityDate: "2026-11-04",
    compatibilityFlags: ["nodejs_compat"],
    entrypoint: "./src/server.ts",
    domains: [{ hostname: "fankrits.com", production: true, previews: false }],
    workersDev: false,
    previewUrls: false,
    observability: {
      enabled: false,
      logs: { enabled: true, invocationLogs: true, persist: true },
      traces: { enabled: false, persist: true },
    },
  },
});
