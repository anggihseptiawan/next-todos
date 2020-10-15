import { initAuth0 } from "@auth0/nextjs-auth0";

const {
	AUTH0_DOMAIN,
	AUTH0_CLIENT_SECRET,
	AUTH0_CLIENT_ID,
	COOKIE_SECRET,
} = process.env;

export default initAuth0({
	domain: AUTH0_DOMAIN,
	clientId: AUTH0_CLIENT_ID,
	clientSecret: AUTH0_CLIENT_SECRET,
	scope: "openid profile",
	redirectUri: "https://sepstodo.vercel.app/api/callback",
	postLogoutRedirectUri: "https://sepstodo.vercel.app/",
	session: {
		// The secret used to encrypt the cookie.
		cookieSecret: COOKIE_SECRET,
		// The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
		cookieLifetime: 60 * 60 * 8,
		// (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.

		// (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
		cookieSameSite: "lax",
		// (Optional) Store the id_token in the session. Defaults to false.
		storeIdToken: false,
		// (Optional) Store the access_token in the session. Defaults to false.
		storeAccessToken: false,
		// (Optional) Store the refresh_token in the session. Defaults to false.
		storeRefreshToken: false,
	},
	oidcClient: {
		// (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
		httpTimeout: 2500,
		// (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
		clockTolerance: 10000,
	},
});
