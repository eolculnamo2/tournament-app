import App from './App.svelte';
import {
	authenticationRouteCheck
} from './globals/helpers.js';

// handle authentication redirects for router.
authenticationRouteCheck();
setInterval(() => {
	authenticationRouteCheck();
}, 30000);

const app = new App({
	target: document.body
});

export default app;