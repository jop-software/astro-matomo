export function init(baseUrl, siteId) {
	// Skip tracking when either window.matomo.host is emptry or it does not match the current host.
	if (
		window.matomo.host !== "" &&
		window.location.host !== window.matomo.host
	) {
		console.info(
			`[@jop-software/astro-matomo]: Skip tracking because the host does not match.`
		);
		return;
	}

	var _paq = (window._paq = window._paq || []);
	/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
	_paq.push(["trackPageView"]);
	_paq.push(["enableLinkTracking"]);
	(function () {
		var u = baseUrl;
		_paq.push(["setTrackerUrl", u + "matomo.php"]);
		_paq.push(["setSiteId", siteId]);
		var d = document,
			g = d.createElement("script"),
			s = d.getElementsByTagName("script")[0];
		g.async = true;
		g.src = u + "matomo.js";
		s.parentNode.insertBefore(g, s);
	})();
}
