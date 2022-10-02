const createPlugin = (options) => {
	return {
		name: "@jop-software/astro-matomo",
		hooks: {
			"astro:config:setup": async ({ config, injectScript }) => {
				injectScript(
					"page",
					`import { init } from '@jop-software/astro-matomo/matomo.js'; init('${options.baseUrl}', ${options.siteId});`
				);
			},
		},
	};
};

export default createPlugin;
