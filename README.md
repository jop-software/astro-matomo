<div align=center>
    <h1>Matomo + Astro Integration</h1>
</div>

> GDRP friendly tracking in your astro app / site 🚀

## Usage

```js
// astro.config.mjs

import matomo from '@jop-software/astro-matomo';

export default defineConfig({
  integrations: [
    // We only track site views when this matches the host the user is on.
    // If the configuration is empty, every page view gets tracked.
    site: "https://example.com",
    matomo({
      baseUrl: "https://analytics.example.com/",
      siteId: 1
    }),
  ]
});
```

<div align=center>&copy 2022-2023, <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></div>
