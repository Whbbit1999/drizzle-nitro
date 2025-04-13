
//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-02-12",
  experimental: {
    openAPI: true
  },
  openAPI: {
    production: "runtime",
    meta: {
      title: "Nitro Drizzle Demo Api",
      version: "1.0.0",
      description: "My API description",
    },
    ui: {
      scalar: {
        theme: 'deepSpace'
      }
    }
  },
});