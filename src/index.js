const createPlugin = (options) => {
	return {
		name: "@jop-software/astro-matomo",
		hooks: {
			"astro:config:setup": async ({ config, injectScript }) => {
				/**
				 * @prop {string} host - The URL to compare window.location.host to, to determine weather we should track the user or not.
				 */
				const matomo = {
					host: "",
				};

				if (config.site) {
					let url = new URL(config.site);
					matomo.host = url.host;
				}

				injectScript(
					"page",
					`import { init as jopsoftware_matomo_init } from '@jop-software/astro-matomo/matomo.js'; window.matomo = ${JSON.stringify(
						matomo
					)}; jopsoftware_matomo_init('${options.baseUrl}', ${options.siteId});`
				);
			},
		},
	};
};

export default createPlugin;
