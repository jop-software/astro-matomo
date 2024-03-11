<div align=center>
    <h1>Matomo + Astro Integration</h1>
</div>

> GDRP friendly tracking in your astro app / site 🚀

## Installation

### Installation using the Astro CLI

Using the Astro CLI is the [recommended way](https://docs.astro.build/en/guides/integrations-guide/#automatic-integration-setup) to setup integrations in Astro.

```console
# npm
npx astro add @jop-software/astro-matomo

# pnpm
pnpm dlx astro add @jop-software/astro-matomo
```

### Manual Installation

When the automatic setup from Astro is not an option for you, feel free to install the package manually.

```console
# npm
npm install @jop-software/astro-matomo

# pnpm
pnpm add @jop-software/astro-matomo
```
## Usage

```js
// astro.config.mjs

import matomo from '@jop-software/astro-matomo';

export default defineConfig({
  // We only track site views when this matches the host the user is on.
  // If the configuration is empty, every page view gets tracked.
  site: "https://example.com",
  integrations: [
    matomo({
      baseUrl: "https://analytics.example.com/",
      siteId: 1
    }),
  ]
});
```

<div align=center>&copy 2022-2024, <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></div>
